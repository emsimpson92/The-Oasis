import { useEffect, useState } from 'react';
import useMeta from '../hooks/useMeta';
import { Box, Button, Snackbar, SnackbarContent, TextField, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import '../styles/fonts.css';

const Styles = (theme, formIsValid) => {
    return {
        root: {
            backgroundColor: theme.colors.background,
            minHeight: '100vh',
            paddingBottom: theme.spacing.xxl,
        },
        pageTitle: {
            fontSize: '3.5rem',
            color: theme.colors.primary,
            fontWeight: 'bold',
            userSelect: 'none',
            fontFamily: 'Arsenica Trial Regular, serif',
            textAlign: 'center',
        },
        input: {
            backgroundColor: theme.colors.header,
            margin: '6px 0px'
        },
        form: {
            margin: 'auto',
            maxWidth: '50rem',
            padding: theme.spacing.lg,
        },
        button: {
            marginTop: '6px',
            float: 'right',
            color: theme.colors.background,
            backgroundColor: formIsValid ? theme.colors.primary : theme.colors.disabled,
        },
        snackbar: {
            backgroundColor: theme.colors.header,
            color: theme.colors.primary
        }
    };
};

function EventRequest() {
    const [eventRequest, setEventRequest] = useState({username: '', description: '', eventName: ''});
    const [snackbar, setSnackbar] = useState({open: false, vertical: 'bottom', horizontal: 'right'});
    const formIsValid = eventRequest.description?.trim().length > 0 && eventRequest.username?.trim().length > 0 && eventRequest.eventName?.trim().length > 0;
    const theme = useTheme();
    const styles = Styles(theme, formIsValid);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useMeta({
        title: 'Event Request — The Oasis',
        description: 'Request an event in The Oasis charter neighborhood on Moon Guard. Submit your event name, description, and contact character to request scheduling.',
        url: 'https://www.example.com/events/request',
        image: 'https://www.example.com/og/eventrequest.svg',
        canonical: 'https://www.example.com/events/request'
    });

    const handleSubmit = () => { 
        if(formIsValid) {
            const method = {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: eventRequest.username,
                    content: `<@&1451315110856495225> Event Request: ${eventRequest.eventName}\n${eventRequest.description}`,
                }),
            };

            // Yes I know this is bad practice
            // No I don't care
            // Please don't make me refactor this
            fetch('https://discord.com/api/webhooks/1449251218231922780/Luv7cdU09vVGOs7nJa9ey6FvOk7NeYQo0ArszfsjzXTf4SP_yp0d7mg4hhMdjBYuFkag', method)
                .then(response => {
                    if (response.ok) {
                        setSnackbar({ ...snackbar, open: true, message: 'Your message has been sent successfully!' });
                        setEventRequest({username: '', description: '', eventName: ''});
                    } 
                    else {
                        setSnackbar({ ...snackbar, open: true, message: 'There was an error sending your message. Please try again later.' });
                    }
                })
                .catch(() => {
                    setSnackbar({ ...snackbar, open: true, message: 'There was an error sending your message. Please try again later.' });
                });
        }
        else {
            setSnackbar({ ...snackbar, open: true,  message: 'Please enter a message before submitting.' });
        }
    };

    return (
        <Box>
            <Header />
            <Box style={styles.root}>
                <Typography variant="h1" style={styles.pageTitle}>
                    {'Event Request Form'}
                </Typography>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <TextField sx={styles.input} 
                        slotProps={{ htmlInput: { maxLength: 20 } }} 
                        value={eventRequest.username} 
                        onChange={(event) => setEventRequest({...eventRequest, username: event.target.value})} 
                        label="Character Name" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" />
                    <TextField sx={styles.input} 
                        slotProps={{ htmlInput: { maxLength: 50 } }} 
                        value={eventRequest.eventName} 
                        onChange={(event) => setEventRequest({...eventRequest, eventName: event.target.value})} 
                        label="Event Name" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" />
                    <TextField sx={styles.input} 
                        slotProps={{ htmlInput: { maxLength: 1800 } }} 
                        value={eventRequest.description} 
                        onChange={(event) => setEventRequest({...eventRequest, description: event.target.value})} 
                        label="Event Description" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        multiline 
                        rows={6} />
                    <Button variant="contained" disabled={!formIsValid} color="primary" style={styles.button} onClick={handleSubmit}>
                        {'Submit'}
                    </Button>
                </form>
            </Box>
            <Snackbar
                anchorOrigin={{ vertical: snackbar.vertical, horizontal: snackbar.horizontal }}
                open={snackbar.open}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                autoHideDuration={3000}
                key={snackbar.vertical + snackbar.horizontal}>
                <SnackbarContent style={styles.snackbar} message={snackbar.message}/>
            </Snackbar>
        </Box>
    );
}

export default EventRequest;
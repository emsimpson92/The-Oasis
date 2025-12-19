import { useEffect, useState } from 'react';
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

function ContactPage() {
    const [message, setMessage] = useState({username: undefined, content: ''});
    const [snackbar, setSnackbar] = useState({open: false, vertical: 'bottom', horizontal: 'right'});
    const theme = useTheme();
    const styles = Styles(theme, message.content);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = () => { 
        if(message.content.trim().length > 0) {
            message.content = `<@&1451315849419030643> ${message.content}`;
            message.username ||= 'Anonymous';

            const method = {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            };

            // Yes I know this is bad practice
            // No I don't care
            // Please don't make me refactor this
            fetch('https://discord.com/api/webhooks/1449251218231922780/Luv7cdU09vVGOs7nJa9ey6FvOk7NeYQo0ArszfsjzXTf4SP_yp0d7mg4hhMdjBYuFkag', method)
                .then(response => {
                    if (response.ok) {
                        setSnackbar({ ...snackbar, open: true, message: 'Your message has been sent successfully!' });
                        setMessage({username: '', content: ''});
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
                    {'Oasis Contact Form'}
                </Typography>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <TextField sx={styles.input} 
                        value={message.username} 
                        onChange={(event) => setMessage({...message, username: event.target.value})} 
                        label="Character Name" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        placeholder='Leave blank if you wish to remain anonymous' />
                    <TextField sx={styles.input} 
                        slotProps={{ htmlInput: { maxLength: 1950 } }} 
                        value={message.content} 
                        onChange={(event) => setMessage({...message, content: event.target.value})} 
                        label="Message" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        multiline 
                        rows={6} />
                    <Button variant="contained" disabled={!message.content} color="primary" style={styles.button} onClick={handleSubmit}>
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

export default ContactPage;
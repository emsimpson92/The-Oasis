import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import '../styles/fonts.css';
import Event from '../components/Event';
import { Events } from '../data';
import { useTheme as muiTheme } from '@mui/material';

const Styles = (theme) => {
    return {
        root: {
            backgroundColor: theme.colors.background,
            minHeight: '100vh',
            paddingBottom: theme.spacing.xs
        },
        pageTitle: {
            fontSize: '3.5rem',
            color: theme.colors.primary,
            fontWeight: 'bold',
            marginBottom: theme.spacing.md,
            userSelect: 'none',
            fontFamily: 'Arsenica Trial Regular, serif',
            textAlign: 'center',
        },
        eventContainer: {
            width: '80%',
            margin: 'auto',
            [theme.breakpoints.down('sm')]: {
                width: '320px'
            },
        },
        text: {
            fontSize: theme.typography.fontSize.base,
            fontWeight: 'bold',
            userSelect: 'none',
            opacity: '0.7',
            fontFamily: 'serif',
            textAlign: 'center',
        }
    };
};

function UpcomingEvents() {
    const theme = useTheme();
    const mui = muiTheme();
    const styles = Styles({...mui, ...theme});   
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box>
            <Header />
            <Box style={styles.root}>
                <Typography variant="h1" style={styles.pageTitle}>
                    {'Upcoming Events'}
                </Typography>
                <Typography variant="h6" style={styles.text}>
                    {'All event times are using Moon Guard server time. (CT)'}
                </Typography>
                <Box component="section" sx={styles.eventContainer}>
                {
                    // Filter out events where the end date has passed
                    // If no end date, use start date + 1 day
                    Events.filter(item => (item.end ? item.end : new Date(item.start).setDate(item.start.getDate() + 1)) > new Date())
                        .sort((a, b) => a.start > b.start ? 1 : 0)
                        .map((item, index) => (
                            <Event key={index} model={item} />
                        )
                    )
                }
                </Box>
            </Box>
        </Box>
    );
}

export default UpcomingEvents;
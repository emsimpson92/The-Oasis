import {  useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import '../styles/fonts.css';
import Zadwick from '../assets/Zadwick.webp';
import Oasis from '../assets/OasisHome.webp';
import { useTheme as muiTheme } from '@mui/material';

const Styles = (theme) => {
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
            fontFamily: 'Arsenica Trial Regular, serif'
        },
        divider: {
            border: `1px solid ${theme.colors.accent}`,
            margin: `${theme.spacing.xs} 0 ${theme.spacing.md} 0`,
            [theme.breakpoints.down('sm')]: {
                margin: `${theme.spacing.xs} 0`,
            },
        },
        bodyText: {
            fontFamily: 'Cormorant Garamond, serif',
            color: theme.colors.text,
            [theme.breakpoints.down('sm')]: {
                margin: `${theme.spacing.md} 0px`
            },
        },
        body: {
            display: 'inline-flex',
            flexDirection: 'row',
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
            },
        },
        image: {
            width: '300px',
            margin: `0 ${theme.spacing.md}`,
            borderRadius: '10px',
            boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
        },
        portrait: {
            width: '250px',
            margin: `0 ${theme.spacing.md}`,
            borderRadius: '10px',
            boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`
        },
        caption: {
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '.9rem',
            color: theme.colors.text,
            opacity: '0.8',
            textAlign: 'center',
            margin: `0 ${theme.spacing.md}`,
        },
        imageContainer: {
            [theme.breakpoints.down('sm')]: {
                margin: '0 auto'
            }
        }
    };
};

function AboutPage() {
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
                <Container maxWidth="lg">
                    <Typography variant="h1" style={styles.pageTitle}>
                        {'About Us'}
                    </Typography>
                    <hr style={styles.divider} />
                    <Box sx={styles.body}>
                        <Typography variant="body1" sx={styles.bodyText}>
                            {'The Oasis is a cross-faction, cross-server charter neighborhood originating from Moon Guard. We are a mature, LGBTQ+ friendly group of adults (18+) and '}
                            {'our goal is to provide a thriving community with a heavy focus on RP, partnering with other RP guilds and individuals across World of Warcraft. '}
                            {'Rather than individual player housing, The Oasis puts an emphasis on shared space, where members can come and go as they please. '}
                            {'Each plot in the Oasis serves a communal purpose. As you explore the Oasis you may find yourself at a cozy bakery, a luxurious hot springs resort, or a dimly lit tavern. '}
                            {'The Oasis and its many venues is a prime location to host events, some of which are organized by Oasis staff, and others that are by request. '}
                            {'There is something for everyone at The Oasis.'}
                        </Typography>
                        <Box sx={styles.imageContainer}>
                            <figure style={{margin: '0px'}}>
                                <img src={Oasis} alt="Oasis" style={styles.image} loading='lazy' />
                                <figcaption style={styles.caption}>{'One of our many stunning views!'}</figcaption>
                            </figure>
                        </Box>
                    </Box>
                    <Typography variant="h1" style={{...styles.pageTitle, marginTop: theme.spacing.sm}}>
                        {'Our Staff'}
                    </Typography>
                    <hr style={styles.divider} />
                    <Box sx={{...styles.body, justifyContent: 'flex-start'}}>
                        <Box sx={styles.imageContainer}>
                            <figure style={{margin: '0px'}}>
                                <img src={Zadwick} alt="Zadwick" style={styles.portrait} loading='lazy' />
                                <figcaption style={styles.caption}>{'Zadwick - Oasis Community Manager'}</figcaption>
                            </figure>
                        </Box>
                        <Typography variant="body1" sx={styles.bodyText}>
                            {'Z handle general logistics such as reviewing membership applications, discord organization/moderation, '}
                            {'and website maintenance for the Oasis. It is my mission to ensure that everyone who enters the Oasis is treated respectfully and has a good time. '}
                            {'If you have questions or are curious about us, feel free to reach out to me on discord (or you can use our general inquiries page) and I will be happy to assist you!'}
                        </Typography>
                    </Box>
                    <Box sx={{...styles.body, justifyContent: 'flex-start', marginTop: theme.spacing.xl}}>
                        <Box sx={styles.imageContainer}>
                            <figure style={{margin: '0px'}}>
                                <img src={Zadwick} alt="TBD" style={styles.portrait} loading='lazy' />
                                <figcaption style={styles.caption}>{'TBD - Oasis Event Coordinator'}</figcaption>
                            </figure>
                        </Box>
                        <Typography variant="body1" sx={styles.bodyText}>
                            {'The Oasis is currently seeking an experienced roleplayer to manage event scheduling and coordination.'}
                        </Typography>
                    </Box>
                    <Box sx={{...styles.body, justifyContent: 'flex-start', marginTop: theme.spacing.xl}}>
                        <Box sx={styles.imageContainer}>
                            <figure style={{margin: '0px'}}>
                                <img src={Zadwick} alt="Tyrin" style={styles.portrait} loading='lazy' />
                                <figcaption style={styles.caption}>{'Tyrin - Oasis Media Manager'}</figcaption>
                            </figure>
                        </Box>
                        <Typography variant="body1" sx={styles.bodyText}>
                            {'The Oasis is currently seeking a member experienced in graphic design that can create promotional graphics for upcoming events.'}
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default AboutPage;
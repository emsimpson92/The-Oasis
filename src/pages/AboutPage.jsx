import {  useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import '../styles/fonts.css';
import Zadwick from '../assets/Zadwick.webp';
import Oasis from '../assets/OasisHome.webp';

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
        },
        bodyText: {
            fontFamily: 'Cormorant Garamond, serif',
            opacity: '0.8'
        },
        body: {
            display: 'inline-flex',
            flexDirection: 'row',
            width: '100%'
        },
        image: {
            width: '350px',
            margin: `0 ${theme.spacing.md}`,
            borderRadius: '10px',
            boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
        },
        portrait: {
            width: '250px',
            margin: `0 ${theme.spacing.md}`,
            borderRadius: '10px',
            boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
        },
        caption: {
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '.9rem',
            opacity: '0.7',
            textAlign: 'center',
            margin: `0 ${theme.spacing.md}`,
        }
    };
};

function AboutPage() {
    const theme = useTheme();
    const styles = Styles(theme);    
    
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
                    <div style={styles.body}>
                        <Typography variant="body1" style={styles.bodyText}>
                            {'The Oasis is a cross-faction, cross-server charter neighborhood originating from Moon Guard. We are a mature, LGBTQ+ friendly group of adults (18+) and '}
                            {'our goal is to provide a thriving community with a heavy focus on RP, partnering with other RP guilds and individuals across World of Warcraft. '}
                            {'Rather than individual player housing, The Oasis puts an emphasis on shared space, where members can come and go as they please. '}
                            {'Each plot in the Oasis serves a communal purpose. As you explore the Oasis you may find yourself at a cozy bakery, a luxurious hot springs resort, or a dimly lit tavern. '}
                            {'The Oasis and its many venues is a prime location to host events, some of which are organized by Oasis staff, and others that are by request. '}
                            {'There is something for everyone at The Oasis.'}
                        </Typography>
                        <figure style={{margin: '0px'}}>
                            <img src={Oasis} alt="Oasis" style={styles.image} loading='lazy' />
                            <figcaption style={styles.caption}>{'One of our many stunning views!'}</figcaption>
                        </figure>
                    </div>
                    <Typography variant="h1" style={{...styles.pageTitle, marginTop: theme.spacing.sm}}>
                        {'Our Staff'}
                    </Typography>
                    <hr style={styles.divider} />
                    <div style={{...styles.body, justifyContent: 'flex-start'}}>
                        <figure style={{margin: '0px'}}>
                            <img src={Zadwick} alt="Zadwick" style={styles.portrait} loading='lazy' />
                            <figcaption style={styles.caption}>{'Zadwick - Oasis Community Manager'}</figcaption>
                        </figure>
                        <Typography variant="body1" style={styles.bodyText}>
                            {'I\'m Zadwick, the Oasis community manager. I handle general logistics such as reviewing membership applications, discord organization/moderation, '}
                            {'and website maintenance for the Oasis. It is my mission to ensure that everyone who enters the Oasis is treated respectfully and has a good time. '}
                            {'If you have questions or are curious about us, feel free to reach out to me on discord (or you can use our general inquiries page) and I will be happy to assist you!'}
                        </Typography>
                    </div>
                    <div style={{...styles.body, justifyContent: 'flex-end', marginTop: theme.spacing.xl}}>
                        <Typography variant="body1" style={styles.bodyText}>
                            {'The Oasis is currently seeking an experienced roleplayer to manage event scheduling and coordination.'}
                        </Typography>
                        <figure style={{margin: '0px'}}>
                            <img src={Zadwick} alt="TBD" style={styles.portrait} loading='lazy' />
                            <figcaption style={styles.caption}>{'TBD - Oasis Event Coordinator'}</figcaption>
                        </figure>
                    </div>
                    <div style={{...styles.body, justifyContent: 'flex-start', marginTop: theme.spacing.xl}}>
                        <figure style={{margin: '0px'}}>
                            <img src={Zadwick} alt="TBD" style={styles.portrait} loading='lazy' />
                            <figcaption style={styles.caption}>{'TBD - Oasis Media Manager'}</figcaption>
                        </figure>
                        <Typography variant="body1" style={styles.bodyText}>
                            {'The Oasis is currently seeking a member experienced in graphic design that can create promotional graphics for upcoming events. '}
                            {'(Or if you like to use ChatGPT that\'s fine with me too)'}
                        </Typography>
                    </div>
                </Container>
            </Box>
        </Box>
    );
}

export default AboutPage;
import {  useEffect } from 'react';
import useMeta from '../hooks/useMeta';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import '../styles/fonts.css';
import Gorukh from '../assets/Gorukh.webp';
import Zibwick from '../assets/Zibwick.webp';
import Astarthea from '../assets/Astarthea.webp';
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
            width: '350px',
            borderRadius: '10px',
            boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
        },
        imageBox: {
            margin: `0 ${theme.spacing.md}`,
            [theme.breakpoints.down('sm')]: {
                margin: '0'
            }
        },
        portrait: {
            width: '350px',
            marginRight: theme.spacing.md,
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

    useMeta({
        title: 'About The Oasis — Charter Neighborhood on Moon Guard',
        description: 'Learn about The Oasis, a cross-faction charter neighborhood on the Moon Guard server focused on roleplay, events, and community in World of Warcraft.',
        url: 'https://www.oasismoonguard.com/about',
        image: 'https://www.oasismoonguard.com/og/about.svg',
        canonical: 'https://www.oasismoonguard.com/about'
    });

    return (
        <Box>
            <Header />
            <Box style={styles.root}>
                <Container maxWidth="xl">
                    <Typography variant="h1" style={styles.pageTitle}>
                        {'About Us'}
                    </Typography>
                    <hr style={styles.divider} />
                    <Box sx={styles.body}>
                        <Typography variant="body1" sx={styles.bodyText}>
                            {'The Oasis is a cross-faction, cross-server charter neighborhood originating from Moon Guard. We are a mature, LGBTQ+ friendly group of adults (18+) and '}
                            {'our goal is to provide a thriving community with a heavy focus on RP, partnering with other RP guilds and individuals across World of Warcraft. '}
                            {'The Oasis puts an emphasis on personal choice, where your experience is what you make of it. All of our members are free to host events, run shops, or simply roleplay in the neighborhood. '}
                            {'Many of our plots in the Oasis serve a communal purpose. As you explore the Oasis you may find yourself at a cozy bakery, a luxurious hot springs resort, or a dimly lit tavern. '}
                            {'There is something for everyone at The Oasis.'}
                        </Typography>
                        <Box sx={styles.imageContainer}>
                            <figure style={{margin: '0px'}}>
                                <Box sx={styles.imageBox}><img src={Oasis} style={styles.image} alt="Oasis" loading='lazy' /></Box>
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
                                <img src={Zibwick} alt="Zibwick" style={styles.portrait} loading='lazy' />
                                <figcaption style={styles.caption}><span style={{ textDecoration: 'line-through' }}>{'Zadwick'}</span>{' Zibwick - Oasis Community Manager'}</figcaption>
                            </figure>
                        </Box>
                        <Typography variant="body1" sx={styles.bodyText}>
                            {'I\'m '}<span style={{ textDecoration: 'line-through' }}>{'Zadwick'}</span>{' Zibwick, the Oasis community manager. I handle general logistics such as reviewing membership applications, discord organization/moderation, '}
                            {'and website maintenance for the Oasis. It is my mission to ensure that everyone who enters the Oasis is treated respectfully and has a good time. '}
                            {'If you have questions or are curious about us, feel free to reach out to me on discord (or you can use our general inquiries page) and I will be happy to assist you!'}
                        </Typography>
                    </Box>
                    <Box sx={{...styles.body, justifyContent: 'flex-start', marginTop: theme.spacing.xl}}>
                        <Box sx={styles.imageContainer}>
                            <figure style={{margin: '0px'}}>
                                <img src={Astarthea} alt="Astarthea" style={styles.portrait} loading='lazy' />
                                <figcaption style={styles.caption}>{'Astarthea - Matron of the Velvet Lily'}</figcaption>
                            </figure>
                        </Box>
                        <Typography variant="body1" sx={styles.bodyText}>
                            {'Astarthea is the owner of the Velvet Lily, a prestigious establishment that is more than just a building... It is a place that many have called home. Astarthea and her "Lilies" have joined forces with the Oasis to cultivate a unique experience for all residents and visitors.'}
                        </Typography>
                    </Box>
                    <Box sx={{...styles.body, justifyContent: 'flex-start', marginTop: theme.spacing.xl}}>
                        <Box sx={styles.imageContainer}>
                            <figure style={{margin: '0px'}}>
                                <img src={Gorukh} alt="Gorukh" style={styles.portrait} loading='lazy' />
                                <figcaption style={styles.caption}>{'Gorukh - Razorwind Pines Caretaker'}</figcaption>
                            </figure>
                        </Box>
                        <Typography variant="body1" sx={styles.bodyText}>
                            {'Gorukh is the groundskeeper and caretaker of Razorwind Pines Lodge. He is responsible for maintaining the lodge and its surrounding areas, ensuring that it remains a welcoming and comfortable space for all visitors. '}
                            {'He operates the lodge\'s exclusive violet lounge, where he serves a hand picked selection of the finest wines and spirits from across Azeroth.'}
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default AboutPage;
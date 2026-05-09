import { useEffect, useRef } from 'react';
import useMeta from '../hooks/useMeta';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import ActivityCard from '../components/ActivityCard';
import '../styles/fonts.css';
import OasisHomeImg from '../assets/OasisHome.webp';
import LibraryLower from '../assets/RazorwindPines/LibraryLower.webp';
import SlurringMurloc1 from '../assets/SlurringMurloc/SlurringMurloc1.webp';
import CrookedKey from '../assets/CrookedKey/CrookedKey.webp';
import DiscordIcon from '../assets/discord-icon.svg';
import ArcanistBallroom from '../assets/ArcanistBallroom/Exterior_Profile.webp';
import { useTheme as muiTheme } from '@mui/material';

const Styles = (theme) => {
    return {
        root: {
            backgroundColor: theme.colors.background, 
            minHeight: '100vh',
            position: 'relative',
        },
        welcomeHeader: {            
            fontSize: '4rem',
            color: theme.colors.accent,
            fontWeight: 'bold',
            marginBottom: theme.spacing.sm,
            zIndex: 2,
            userSelect: 'none',
            fontFamily: 'Arsenica Trial Light, serif',
            textShadow: `0 0 1px teal`,
        },
        titleHeader: {
            fontSize: '8rem',
            color: theme.colors.accent,
            fontWeight: 'bold',
            zIndex: 2,
            marginBottom: theme.spacing.xl,
            userSelect: 'none',
            fontFamily: 'Arsenica Trial Regular, serif',
            textShadow: `0 0 1px teal`,
        },
        exploreButton: {
            color: theme.colors.background,
            padding: `${theme.spacing.sm}`,
            zIndex: 2,
            fontSize: theme.typography.fontSize.xlarge,
            fontWeight: 'bold',
            textTransform: 'none',
            position: 'relative',
            transition: 'all 0.3s ease',
            '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: 3,
                backgroundColor: theme.colors.header,
                width: '100%',
                height: '0.13em',
                opacity: 0,
                transition: 'opacity 0.3s, transform 0.3s'
            },
            '&:hover': {
                color: theme.colors.header,
            },
            '&:hover::after': {
                opacity: 1,
                transform: 'translate3d(0, -0.2em, 0)'
            },
            '&:focus::after': {
                opacity: 1,
                transform: 'translate3d(0, -0.2em, 0)'
            },
        },
        splashPage: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: `url(${OasisHomeImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            textAlign: 'center',
            padding: theme.spacing.xl,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 1,
            },
        },
        gradientDivider: {
            height: '70px',
            width: '100%',
            background: `linear-gradient(to bottom, transparent, ${theme.colors.background})`,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
        },
        activitiesSection: {
            padding: theme.spacing.xl,
            backgroundColor: theme.colors.background,
            [theme.breakpoints.down('sm')]: {
                padding: `${theme.spacing.lg} 0px`,
            },
        },
        paradiseHeader: {
            fontSize: theme.typography.fontSize.xxlarge,
            color: theme.colors.primary,
            textAlign: 'center',
            marginBottom: theme.spacing.xl,
            userSelect: 'none',
            fontWeight: 'bold',
            fontFamily: 'Arsenica Trial Regular, serif',
        },
        discordButton: {
            position: 'absolute',
            top: theme.spacing.sm,
            right: theme.spacing.sm,
            background: 'transparent',
            color: theme.colors.background,
            border: 'none',
            zIndex: 2,
            textTransform: 'none',
            fontSize: theme.typography.fontSize.xlarge,
            cursor: 'pointer',
            fontFamily: 'serif',
            padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
            '&:hover': {
                color: theme.colors.header,
                textShadow: `0 0 1px ${theme.colors.primary}`,
            },
        },
        overlay: { 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0,
            bottom: 0, 
            backgroundColor: 'rgba(0,0,0,0.35)', 
            zIndex: 1 
        },
        activityImage: {
            width: '100%', 
            height: '200px', 
            objectFit: 'cover'
        }
    }
};

function HomePage() {
    const theme = useTheme();
    const mui = muiTheme();
    const activitiesRef = useRef(null);
    const styles = Styles({...mui, ...theme});

    useMeta({
        title: 'The Oasis — Home | The Oasis Charter Neighborhood',
        description: 'The Oasis is a cross-faction, cross-server charter neighborhood on Moon Guard offering RP, events, and community in World of Warcraft.',
        url: 'https://www.oasismoonguard.com/',
        image: 'https://www.oasismoonguard.com/og/home.svg',
        canonical: 'https://www.oasismoonguard.com/'
    });

    const handleExplore = (event) => {
        activitiesRef.current?.scrollIntoView({ behavior: 'smooth' });
        event.target.blur();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box style={styles.root}>
            <Button variant="text" href="https://discord.gg/AhsnAsSUNK" target="_blank" rel="noopener noreferrer" sx={styles.discordButton}>
                <img src={DiscordIcon} alt='Discord' style={{width: '40px', height: '40px', marginRight: '8px', verticalAlign: 'middle'}} />
                Discord
            </Button>
            {/* Hero Section */}
            <Box component="section" style={styles.splashPage}>
                <Box style={styles.overlay} />
                <Typography variant="h1" style={styles.welcomeHeader}>
                    Welcome to
                </Typography>
                <Typography variant="h1" style={styles.titleHeader}>
                    The Oasis
                </Typography>
                <Button variant="inline" size="large" onClick={handleExplore} sx={styles.exploreButton}>
                    Explore
                </Button>
                <div style={styles.gradientDivider} />
            </Box>
            {/* Activities Section */}
            <Box component="section" ref={activitiesRef} sx={styles.activitiesSection}>
                <Typography variant="h2" style={styles.paradiseHeader}>
                    Our Venues
                </Typography>
                <Container maxWidth="xl">
                    <Grid container spacing={3} style={{display: 'flex', justifyContent: 'center'}}>
                        <Grid item xs={12} sm={6} md={4} key={1}>
                            <ActivityCard title={'Razorwind Pines Lodge'} description={'Cliffside retreat nestled on the outskirts of the Oasis'} link={'/razorwindpines'}>
                                <img src={LibraryLower} alt={'Razorwind Pines'} style={styles.activityImage} loading='lazy' />
                            </ActivityCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} key={2}>
                            <ActivityCard title={'The Crooked Key'} description={'Pandaren Pub & Piano Theater'} link={'/crookedkey'}>
                                <img src={CrookedKey} alt={'The Crooked Key'} style={styles.activityImage} loading='lazy' />
                            </ActivityCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} key={3}>
                            <ActivityCard title={'The Arcanist\'s Ballroom'} description={'Events center and theater floating just beyond the Four Sisters Falls'} link={'/arcanistballroom'}>
                                <img src={ArcanistBallroom} alt={'The Arcanist\'s Ballroom'} style={styles.activityImage} loading='lazy' />
                            </ActivityCard>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default HomePage;
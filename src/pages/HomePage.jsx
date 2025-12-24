import { useEffect, useRef } from 'react';
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
import SpringsImg from '../assets/Springs.webp';
import DiningImg from '../assets/Dining.webp';
import NightlifeImg from '../assets/Nightlife.webp';
import EventsImg from '../assets/Events.webp';
import RecreationImg from '../assets/Recreation.webp';
import AccommodationsImg from '../assets/Accommodations.webp';
import OasisHomeImg from '../assets/OasisHome.webp';
import DiscordIcon from '../assets/discord-icon.svg';

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
            userSelect: 'none',
            fontFamily: 'Arsenica Trial Light, serif',
            textShadow: `0 0 1px teal`,
        },
        titleHeader: {
            fontSize: '8rem',
            color: theme.colors.accent,
            fontWeight: 'bold',
            marginBottom: theme.spacing.xl,
            userSelect: 'none',
            fontFamily: 'Arsenica Trial Regular, serif',
            textShadow: `0 0 1px teal`,
        },
        exploreButton: {
            color: theme.colors.background,
            padding: `${theme.spacing.sm}`,
            fontSize: theme.typography.fontSize.xlarge,
            fontWeight: 'bold',
            zIndex: 2,
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
            width: '100vw',
            background: `linear-gradient(to bottom, transparent, ${theme.colors.background})`,
            position: 'absolute',
            bottom: 0,
        },
        activitiesSection: {
            padding: theme.spacing.xl,
            backgroundColor: theme.colors.background,
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
            zIndex: 1,
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
        activityImage: {
            width: '100%', 
            height: '200px', 
            objectFit: 'cover'
        }
    }
};

function HomePage() {
    const theme = useTheme();
    const activitiesRef = useRef(null);
    const styles = Styles(theme);

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
            <Box component="section" ref={activitiesRef} style={styles.activitiesSection}>
                <Typography variant="h2" style={styles.paradiseHeader}>
                    Paradise Begins Here
                </Typography>
                <Container maxWidth="lg">
                    <Grid container spacing={3} style={{display: 'flex', justifyContent: 'center'}}>
                        <Grid item xs={12} sm={6} md={4} key={1}>
                            <ActivityCard title={'Spa & Wellness'} description={'Relax and rejuvenate at our hot springs resort'} link={'/wellness'}>
                                <img src={SpringsImg} alt={'Wellness'} style={styles.activityImage} loading='lazy' />
                            </ActivityCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} key={2}>
                            <ActivityCard title={'Dining'} description={'Exquisite culinary experiences crafted by renowned chefs'} link={'/dining'}>
                                <img src={DiningImg} alt={'Dining'} style={styles.activityImage} loading='lazy' />
                            </ActivityCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} key={3}>
                            <ActivityCard title={'Nightlife'} description={'Experience vibrant nightlife and entertainment'} link={'/nightlife'}>
                                <img src={NightlifeImg} alt={'Nightlife'} style={styles.activityImage} loading='lazy' />
                            </ActivityCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} key={4}>
                            <ActivityCard title={'Events'} description={'Host your special occasions in our stunning venues'} link={'/events'}>
                                <img src={EventsImg} alt={'Events'} style={styles.activityImage} loading='lazy' />
                            </ActivityCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} key={5}>
                            <ActivityCard title={'Recreation'} description={'Enjoy waterfalls, beaches, and outdoor adventures'} link={'/recreation'}>
                                <img src={RecreationImg} alt={'Recreation'} style={styles.activityImage} loading='lazy' />
                            </ActivityCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} key={6}>
                            <ActivityCard title={'Accommodations'} description={'Luxurious rooms with breathtaking views'} link={'/accommodations'}>
                                <img src={AccommodationsImg} alt={'Accommodations'} style={styles.activityImage} loading='lazy' />
                            </ActivityCard>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default HomePage;
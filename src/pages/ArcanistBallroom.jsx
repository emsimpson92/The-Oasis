import { useEffect, useRef, useState } from 'react';
import useMeta from '../hooks/useMeta';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '../hooks/useTheme';
import '../styles/fonts.css';
import { useTheme as muiTheme } from '@mui/material';
import Header from '../components/Header';
import Ballroom from '../assets/ArcanistBallroom/Ballroom.webp';
import BarEntry from '../assets/ArcanistBallroom/Bar_Entry.webp';
import BarLeft from '../assets/ArcanistBallroom/Bar_Left.webp';
import BarRight from '../assets/ArcanistBallroom/Bar_Right.webp';
import ExteriorEntry from '../assets/ArcanistBallroom/Exterior_Entry.webp';
import ExteriorFront from '../assets/ArcanistBallroom/Exterior_Front.webp';
import ExteriorProfile from '../assets/ArcanistBallroom/Exterior_Profile.webp';
import GalleryWalkway from '../assets/ArcanistBallroom/Gallery_Walkway.webp';
import GameRoom from '../assets/ArcanistBallroom/Game_Room.webp';
import GrandStair from '../assets/ArcanistBallroom/Grand_Stair.webp';
import Library from '../assets/ArcanistBallroom/Library.webp';
import LibraryCorner from '../assets/ArcanistBallroom/Library_Corner.webp';
import StoryCircleAndFlowerGarden from '../assets/ArcanistBallroom/Story_Circle_and_Flower_Garden.webp';
import TheaterAudience from '../assets/ArcanistBallroom/Theater_Audience.webp';
import TheaterStage from '../assets/ArcanistBallroom/Theater_Stage.webp';

const Styles = (theme) => ({
    root: { 
        backgroundColor: theme.colors.background, 
        minHeight: '100vh', 
        position: 'relative' 
    },
    videoWrapper: { 
        position: 'relative', 
        height: 'calc(100vh + 70px)', 
        overflow: 'hidden' 
    },
    video: { 
        position: 'absolute', 
        top: 0, 
        left: 0,
        width: '100%', 
        height: '100%', 
        objectFit: 'cover', 
        zIndex: 0, 
        pointerEvents: 'none',
        border: 'none'
    },
    splashContent: { 
        position: 'relative', 
        zIndex: 2, 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column', 
        padding: theme.spacing.xl, 
        color: theme.colors.background, 
        textAlign: 'center' 
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
        exploreButton: {
            color: theme.colors.background,
            padding: `${theme.spacing.sm}`,
            marginTop: theme.spacing.md,
            fontSize: theme.typography.fontSize.xlarge,
            fontWeight: 'bold',
            opacity: 0.8,
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
        bodyText: {
            fontFamily: 'Cormorant Garamond, serif',
            color: theme.colors.text,
            [theme.breakpoints.down('sm')]: {
                margin: `${theme.spacing.md} 0px`
            },
        },
        carouselContainer: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing.lg,
            [theme.breakpoints.down('sm')]: {
                gap: `0px`
            },
        },
        carouselButton: {
            color: theme.colors.primary,
            '&:hover': {
                opacity: 0.6,
            },
        },
        carouselContent: { 
            position: 'relative', 
            overflow: 'hidden', 
            flex: 1, 
            maxWidth: '600px', 
            display: 'flex', 
            justifyContent: 'center', 
            height: '375px',
            [theme.breakpoints.down('sm')]: {
                height: `160px`,
                minWidth: '250px'
            },
        }
});

function ArcanistBallroom() {
    const theme = useTheme();
    const mui = muiTheme();
    const styles = Styles({ ...mui, ...theme });
    const contentRef = useRef(null);
    const aboutRef = useRef(null);
    const [carouselIndex, setCarouselIndex] = useState(0);
    
    const features = [
        { name: 'Exterior', image: ExteriorProfile },
        { name: 'Exterior Front', image: ExteriorFront },
        { name: 'Ballroom', image: Ballroom },
        { name: 'Bar Entry', image: BarEntry },
        { name: 'Bar Left', image: BarLeft },
        { name: 'Bar Right', image: BarRight },
        { name: 'Gallery Walkway', image: GalleryWalkway },
        { name: 'Game Room', image: GameRoom },
        { name: 'Grand Stair', image: GrandStair },
        { name: 'Library', image: Library },
        { name: 'Library Corner', image: LibraryCorner },
        { name: 'Story Circle and Flower Garden', image: StoryCircleAndFlowerGarden },
        { name: 'Theater Audience', image: TheaterAudience },
        { name: 'Theater Stage', image: TheaterStage },
    ];
    
    const handlePrevious = () => {
        setCarouselIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
    };
    
    const handleNext = () => {
        setCarouselIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    };
    
    const handleExplore = (event) => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        event.target.blur();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    useMeta({
        title: 'Arcanist Ballroom — The Oasis',
        description: "Arcanist Ballroom is a grand venue within The Oasis charter neighborhood on Moon Guard. Explore the ballroom, bar, library, and theater.",
        url: 'https://www.oasismoonguard.com/arcanistballroom',
        image: 'https://www.oasismoonguard.com/og/arcanistballroom.svg',
        canonical: 'https://www.oasismoonguard.com/arcanistballroom'
    });

    return (
        <Box style={styles.root}>
            <Box style={styles.videoWrapper}>
                <Header transparent />
                <img
                    src={ExteriorEntry}
                    alt="The Arcanist's Ballroom"
                    aria-hidden="true"
                    style={{
                        border: 'none',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100vw',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Box style={styles.overlay} />
                <Box style={styles.splashContent} ref={contentRef}>
                    <Typography variant="h1" style={{ fontSize: '4rem', color: theme.colors.accent, fontFamily: 'Arsenica Trial Regular, serif' }}>
                        The Arcanist's Ballroom
                    </Typography>
                    <Typography variant="h2" style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', color: theme.colors.primary, marginTop: theme.spacing.md }}>
                        "Your Party, Our Playground"
                    </Typography>
                    <Button variant="inline" size="large" onClick={handleExplore} sx={styles.exploreButton}>
                        About
                    </Button>
                </Box>
                <div style={styles.gradientDivider} />
            </Box>

            <Box component="section" ref={aboutRef} sx={{ padding: `${theme.spacing.sm} ${theme.spacing.sm} ${theme.spacing.xl}`, backgroundColor: theme.colors.background }}>
                <Container maxWidth="xl">
                    <Typography variant="h3" style={{ margin: `${theme.spacing.md} 0px 0px`, color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif' }}>
                        About
                    </Typography>
                    <Typography variant="subtitle1" style={{fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: theme.colors.text, fontSize: theme.typography.fontSize.large}}>
                        Oasis #46
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Come and let us turn your special occasion into memories that last a lifetime. '}
                        {'Here at the Arcanist\'s Ballroom, floating scenically over the Four Sisters Falls, your guests will feel like Silvermoon Royalty. '}
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Whether it\'s the wedding of the century, the Darkmoon Player\'s latest show, or your lunarly bookclub we have everything you need! '}
                        {'Our unseen staff have been trained by only Azerother\'s finest, from Pandaren chefs and Silvermoon sommeliers to dwarven brewmasters and orcish pitmasters.'}                        
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Feel welcome to explore the tower\'s expansive interior! '}
                        {'We boast a variety of settings including picturesque picnic spots, cozy library corners, and grand galleries!'}                        
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'The tower also serves as home to our groundskeeper, retired rootwarden Muc, and your host and primary contact for event scheduling, Archmage Tom. '}
                        {'Please be courteous, respectful of enchantment warning labels, and close all portals behind you!'}                        
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Thank you, and welcome to The Arcanist Ballroom! Don\'t forget to sign the guest book!'}
                    </Typography>
                    <Typography variant="h3" style={{ textAlign: 'center', margin: `${theme.spacing.md} 0px`, color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif' }}>
                        Gallery
                    </Typography>
                    <Box sx={styles.carouselContainer}>
                        <IconButton onClick={handlePrevious} sx={styles.carouselButton} aria-label="previous" size="large">
                            <ArrowBackIcon />
                        </IconButton>
                        <Box sx={styles.carouselContent}>
                        {
                            features.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        opacity: carouselIndex === index ? 1 : 0,
                                        transition: 'opacity 0.5s ease-in-out',
                                        zIndex: carouselIndex === index ? 2 : 1,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} loading='lazy' />
                                </Box>
                            ))
                        }
                        </Box>
                        <IconButton onClick={handleNext} sx={styles.carouselButton} aria-label="next" size="large">
                            <ArrowForwardIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="body1" style={{ textAlign: 'center', color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif', fontSize: theme.typography.fontSize.large, marginTop: theme.spacing.sm }}>
                        {features[carouselIndex].name}
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}

export default ArcanistBallroom;

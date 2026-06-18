import { useEffect, useRef, useState } from 'react';
import useMeta from '../hooks/useMeta';
import { Box, Button, Container, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import '../styles/fonts.css';
import { useTheme as muiTheme } from '@mui/material';
import Header from '../components/Header';
import Entry from '../assets/RazorwindPines/Entry.webp';
import BanquetHall from '../assets/RazorwindPines/BanquetHall.webp';
import KafaShop from '../assets/RazorwindPines/KafaShop.webp';
import Kitchen from '../assets/RazorwindPines/Kitchen.webp';
import LibraryLower from '../assets/RazorwindPines/LibraryLower.webp';
import LibraryMiddle from '../assets/RazorwindPines/LibraryMiddle.webp';
import LibraryUpper from '../assets/RazorwindPines/LibraryUpper.webp';
import Lounge1 from '../assets/RazorwindPines/Lounge1.webp';
import Lounge2 from '../assets/RazorwindPines/Lounge2.webp';
import Lounge3 from '../assets/RazorwindPines/Lounge3.webp';
import LodgeDeck from '../assets/RazorwindPines/LodgeDeck.webp';
import OuterTerrace from '../assets/RazorwindPines/OuterTerrace.webp';
import LodgeHome from '../assets/RazorwindPines/LodgeHome.webp';

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
                height: `200px`,
                minWidth: '250px'
            },
        }
});

function RazorwindPines() {
    const theme = useTheme();
    const mui = muiTheme();
    const styles = Styles({ ...mui, ...theme });
    const contentRef = useRef(null);
    const aboutRef = useRef(null);
    const [carouselIndex, setCarouselIndex] = useState(0);
    
    const features = [
        { name: 'Foyer', image: Entry },
        { name: 'Banquet Hall', image: BanquetHall },
        { name: 'Kitchen', image: Kitchen },
        { name: 'Kafa Shop', image: KafaShop },
        { name: 'Libary (Lower)', image: LibraryLower },
        { name: 'Libary (Middle)', image: LibraryMiddle },
        { name: 'Library (Upper)', image: LibraryUpper },
        { name: 'The Violet Lounge', image: Lounge1 },
        { name: 'The Violet Lounge', image: Lounge2 },
        { name: 'The Violet Lounge', image: Lounge3 },
        { name: 'The Upper Deck', image: LodgeDeck },
        { name: 'Outer Terrace', image: OuterTerrace },
    ];
    
    const handleExplore = (event) => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        event.target.blur();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [features.length]);

    useMeta({
        title: 'Razorwind Pines Lodge — The Oasis',
        description: "Razorwind Pines Lodge is a cliffside retreat within The Oasis charter neighborhood on Moon Guard. Explore the lodge, Violet Lounge, and gallery.",
        url: 'https://www.oasismoonguard.com/razorwindpines',
        image: 'https://www.oasismoonguard.com/og/razorwindpines.svg',
        canonical: 'https://www.oasismoonguard.com/razorwindpines'
    });

    return (
        <Box style={styles.root}>
            <Box style={styles.videoWrapper}>
                <Header transparent />
                <img
                    src={LodgeHome}
                    alt="Razorwind Pines Lodge"
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
                        Razorwind Pines Lodge
                    </Typography>
                    <Typography variant="h2" style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', color: theme.colors.primary, marginTop: theme.spacing.md }}>
                        Home to the exclusive Violet Lounge
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
                        Oasis #52
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Razorwind Pines Lodge is a cozy retreat perched on the cliffs overlooking the Oasis. '}
                        {'Known for its rustic charm and breathtaking views, the lodge offers a serene escape from the bustling activities of the Oasis. '}
                        {'Guests can enjoy the tranquil atmosphere, explore nearby hiking trails, or simply relax by the fireplace with a warm drink. '}
                        {'The lodge\'s unique location provides stunning sunsets and a peaceful ambiance, making it a favorite spot for those seeking solitude and natural beauty.'}                        
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Razorwind Pines Lodge is also home to the renowned Violet Lounge, an exclusive members-only bar known for its intimate atmosphere. '}
                        {'The lounge features a curated menu of rare vintages, making it a must-visit destination for connoisseurs and casual drinkers alike. '}                        
                    </Typography>
                    <Typography variant="h3" style={{ textAlign: 'center', margin: `${theme.spacing.md} 0px`, color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif' }}>
                        Gallery
                    </Typography>
                    <Box sx={styles.carouselContainer}>
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
                    </Box>
                    <Typography variant="body1" style={{ textAlign: 'center', color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif', fontSize: theme.typography.fontSize.large, marginTop: theme.spacing.sm }}>
                        {features[carouselIndex].name}
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}

export default RazorwindPines;

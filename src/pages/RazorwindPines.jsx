import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import useMeta from '../hooks/useMeta';
import { Box, Button, Container, IconButton, Slide, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '../hooks/useTheme';
import '../styles/fonts.css';
import { useTheme as muiTheme } from '@mui/material';
import Header from '../components/Header';
import Entry from '../assets/RazorwindPines/Entry.webp';
import BanquetHall from '../assets/RazorwindPines/BanquetHall.webp';
import KafaShop from '../assets/RazorwindPines/KafaShop.webp';
import Kitchen1 from '../assets/RazorwindPines/Kitchen1.webp';
import Kitchen2 from '../assets/RazorwindPines/Kitchen2.webp';
import LibraryLower from '../assets/RazorwindPines/LibraryLower.webp';
import LibraryUpper from '../assets/RazorwindPines/LibraryUpper.webp';
import VioletLounge1 from '../assets/RazorwindPines/VioletLounge1.webp';
import VioletLounge2 from '../assets/RazorwindPines/VioletLounge2.webp';
import ZadsOffice from '../assets/RazorwindPines/ZadsOffice.webp';
import LodgeDeck from '../assets/RazorwindPines/LodgeDeck.webp';

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
            marginTop: theme.spacing.xl,
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

function RazorwindPines() {
    const theme = useTheme();
    const mui = muiTheme();
    const styles = Styles({ ...mui, ...theme });
    const contentRef = useRef(null);
    const aboutRef = useRef(null);
    const videoRef = useRef(null);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [direction, setDirection] = useState('left');
    
    const features = [
        { name: 'Foyer', image: Entry },
        { name: 'Banquet Hall', image: BanquetHall },
        { name: 'Kitchen', image: Kitchen1 },
        { name: 'Kitchen', image: Kitchen2 },
        { name: 'Libary (Lower)', image: LibraryLower },
        { name: 'Library (Upper)', image: LibraryUpper },
        { name: 'Kafa Shop', image: KafaShop },
        { name: "Zadwick's Office", image: ZadsOffice },
        { name: 'The Violet Lounge', image: VioletLounge1 },
        { name: 'The Violet Lounge', image: VioletLounge2 },
        { name: 'The Upper Deck', image: LodgeDeck },
    ];
    
    const handlePrevious = () => {
        setDirection('right');
        setCarouselIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
    };
    
    const handleNext = () => {
        setDirection('left');
        setCarouselIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    };
    
    const handleExplore = (event) => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        event.target.blur();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Attach HLS stream to the video element so we can control styling (object-fit: cover)
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const streamUrl = 'https://videodelivery.net/39a723bc8aa63519ec03b64abd5505ae/manifest/video.m3u8';

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(streamUrl);
            hls.attachMedia(video);
            return () => hls.destroy();
        } else {
            // Native HLS (Safari)
            video.src = streamUrl;
        }
    }, []);

    useMeta({
        title: 'Razorwind Pines Lodge — The Oasis',
        description: "Razorwind Pines Lodge is a cliffside retreat within The Oasis charter neighborhood on Moon Guard. Explore the lodge, Violet Lounge, and gallery.",
        url: 'https://www.example.com/razorwindpines',
        image: 'https://www.example.com/og/razorwindpines.svg',
        canonical: 'https://www.example.com/razorwindpines'
    });

    return (
        <Box style={styles.root}>
            <Box style={styles.videoWrapper}>
                <Header transparent />
                <video
                    ref={videoRef}
                    playsInline
                    autoPlay
                    muted
                    loop
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
                        A cliffside retreat nestled on the outskirts of the Oasis
                    </Typography>
                    <Button variant="inline" size="large" onClick={handleExplore} sx={styles.exploreButton}>
                        About
                    </Button>
                </Box>
                <div style={styles.gradientDivider} />
            </Box>

            <Box component="section" ref={aboutRef} sx={{ padding: `${theme.spacing.sm} ${theme.spacing.xl} ${theme.spacing.xl}`, backgroundColor: theme.colors.background }}>
                <Container maxWidth="xl">
                    <Typography variant="h3" style={{ margin: `${theme.spacing.md} 0px 0px`, color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif' }}>
                        About Razorwind Pines
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
                    <Typography variant="h3" style={{ margin: `${theme.spacing.md} 0px`, color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif' }}>
                        Gallery
                    </Typography>
                    <Box sx={styles.carouselContainer}>
                        <IconButton onClick={handlePrevious} sx={styles.carouselButton} aria-label="previous" size="large">
                            <ArrowBackIcon />
                        </IconButton>
                        <Box sx={styles.carouselContent}>
                        {
                            features.map((item, index) => (
                                <Slide 
                                    key={index}
                                    direction={direction} 
                                    in={carouselIndex === index} 
                                    mountOnEnter 
                                    unmountOnExit
                                    timeout={{ enter: 300, exit: 300 }}
                                    style={{ position: 'absolute', width: '100%', height: '100%' }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%', transition: 'opacity 0.6s ease-in-out' }}>
                                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', transition: 'opacity 0.6s ease-in-out' }} loading='lazy' />
                                    </div>
                                </Slide>
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

export default RazorwindPines;

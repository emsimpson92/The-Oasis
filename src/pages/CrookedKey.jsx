import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import useMeta from '../hooks/useMeta';
import { Box, Button, Container, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import '../styles/fonts.css';
import { useTheme as muiTheme } from '@mui/material';
import Header from '../components/Header';

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

function CrookedKey() {
    const theme = useTheme();
    const mui = muiTheme();
    const styles = Styles({ ...mui, ...theme });
    const contentRef = useRef(null);
    const aboutRef = useRef(null);
    const videoRef = useRef(null);
    
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
        const streamUrl = 'https://videodelivery.net/76ed4d25140a8e588c346cbf901aeb85/manifest/video.m3u8';

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
        title: 'The Crooked Key — The Oasis',
        description: "The Crooked Key is a Pandaren pub and piano theater within The Oasis charter neighborhood on Moon Guard.",
        url: 'https://www.oasismoonguard.com/crookedkey',
        image: 'https://www.oasismoonguard.com/og/crookedkey.svg',
        canonical: 'https://www.oasismoonguard.com/crookedkey'
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
                        The Crooked Key
                    </Typography>
                    <Typography variant="h2" style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', color: theme.colors.primary, marginTop: theme.spacing.md, textShadow: `0 0 1px ${theme.colors.header}` }}>
                        “Where Every Evening Finds Its Melody”
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
                        About
                    </Typography>
                    <Typography variant="subtitle1" style={{fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: theme.colors.text, fontSize: theme.typography.fontSize.large}}>
                        Oasis #31
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Nestled beneath warm lantern light and rough bamboo beams, The Crooked Key welcomes travelers, performers, and connoisseurs alike. '}
                        {'Guests gather for honeyed meads, sizzling hibachi plates, and nightly piano performances that drift like silk across the room. '}
                        {'The stage hosts musicians, storytellers, and wandering bards, while the bar serves specialty brews crafted with care and tradition. '}
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'At The Crooked Key, refinement and comfort share the same table. It is a place to unwind, celebrate, and lose track of time beneath gentle music and golden light. '}
                    </Typography>
                    <Typography variant="h4" style={{ margin: `${theme.spacing.md} 0px ${theme.spacing.sm}`, color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif' }}>
                        House Specialties
                    </Typography>
                    <ul style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: theme.typography.fontSize.large,
                        color: theme.colors.text,
                        marginLeft: theme.spacing.sm,
                        margin: '8px',
                        lineHeight: '1.8',
                    }}>
                        <li>Artisan meads and rare infusions</li>
                        <li>Hibachi grill selections and delicacies</li>
                        <li>Evening piano recitals and open performance nights</li>
                        <li>Rotating seasonal menus</li>
                    </ul>
                    <hr style={{color: theme.colors.text, opacity: 0.2, marginTop: theme.spacing.md}} />
                    <Typography variant="h5" style={{ margin: `${theme.spacing.md} 0px`, fontStyle: 'italic', color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif' }}>
                        A Note to the Observant Guest
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Those who linger after the final encore...'}
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Those who notice the curtain that was not there before...'}
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Those who follow a whisper instead of a sign...'}
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'May discover that The Crooked Key holds more than one stage.'}
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'A Place of Brass and Bold Spirits'}
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Laughter echoes alongside the sharp crack of billiard breaks and the soft clink of wagering coins. '}
                        {'Patrons jokingly refer to it as Rack & Ruin, though staff simply smile when asked.'}
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'A Mark Etched in Green Flame'}
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'A chamber behind an unassuming curtain, where fel light glows softly and illusions dance for those who dare to indulge curiosity and seek quiet conversation. '}
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Some call it The Twisted Sigil, though no official door bears the name.'}
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'And Then… There Is the Amethyst Veil'}
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Rarely spoken of.'}
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Rarely seen.'}
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'A shimmer of violet light glimpsed only by chance — or invitation.'}
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Some insist it is merely reflection from polished crystal. Others know better.'}
                    </Typography>
                    <Typography variant="h6" sx={{ margin: `${theme.spacing.sm} 0px ${theme.spacing.sm}`, color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif' }}>
                        {'House Courtesy'}
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Respect performers and patrons alike.'}
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Discretion is appreciated.'}
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Not every door is meant for every guest.'}
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Music is for all — discovery is for the willing.'}
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}

export default CrookedKey;

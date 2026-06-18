import { useEffect, useRef, useState } from 'react';
import useMeta from '../hooks/useMeta';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '../hooks/useTheme';
import '../styles/fonts.css';
import { useTheme as muiTheme } from '@mui/material';
import Header from '../components/Header';
import Exterior from '../assets/KarumaSedei/Exterior.webp';
import DiningRoom from '../assets/KarumaSedei/DiningRoom.webp';
import Lounge from '../assets/KarumaSedei/Lounge.webp';
import MeditationRoom1 from '../assets/KarumaSedei/MeditationRoom1.webp';
import MeditationRoom2 from '../assets/KarumaSedei/MeditationRoom2.webp';
import MeditationRoom3 from '../assets/KarumaSedei/MeditationRoom3.webp';
import SevenLotus from '../assets/KarumaSedei/7Lotus.webp';
import KSHome from '../assets/KarumaSedei/KSHome.webp';

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
        },
        lotusGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: theme.spacing.xs,
            marginTop: theme.spacing.sm
        },
        lotusCard: {
            backgroundColor: 'transparent',
            padding: `${theme.spacing.sm}`,
            minHeight: '120px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        lotusTitle: {
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 700,
            color: theme.colors.primary
        },
        lotusQuote: {
            fontStyle: 'italic',
            color: theme.colors.text
        },
        lotusFocus: {
            fontWeight: 600,
            color: theme.colors.accent
        },
        serviceSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: theme.spacing.md,
            gap: theme.spacing.xs,
        },
        serviceGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: theme.spacing.md,
            justifyContent: 'center',
            width: '100%',
            marginTop: theme.spacing.md,
            [theme.breakpoints.down('lg')]: {
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            },
            [theme.breakpoints.down('sm')]: {
                gridTemplateColumns: '1fr',
            },
        },
        serviceCard: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: theme.colors.header,
            borderRadius: '20px',
            padding: theme.spacing.md,
            minHeight: '150px',
            justifyContent: 'flex-start',
            border: `2px solid ${theme.colors.primary}`,
            boxShadow: '0 0 18px rgba(0, 0, 0, 0.2)',
        },
        serviceCardTitle: {
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 700,
            color: theme.colors.primary,
            marginBottom: theme.spacing.sm,
        },
        serviceItem: {
            color: theme.colors.text,
            marginBottom: theme.spacing.xs,
            fontFamily: 'Cormorant Garamond, serif',
        },
});

function KarumaSedei() {
    const theme = useTheme();
    const mui = muiTheme();
    const styles = Styles({ ...mui, ...theme });
    const contentRef = useRef(null);
    const aboutRef = useRef(null);
    const [carouselIndex, setCarouselIndex] = useState(0);
    
    const features = [
        { name: 'Exterior', image: Exterior },
        { name: 'Dining Room', image: DiningRoom },
        { name: 'Lounge', image: Lounge },
        { name: 'Meditation Rooms', image: MeditationRoom1 },
        { name: 'Meditation Rooms', image: MeditationRoom2 },
        { name: 'Meditation Rooms', image: MeditationRoom3 },
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
        title: 'Karuma Sedei — The Oasis',
        description: "Karuma Sedei is a healing sanctuary within The Oasis charter neighborhood on Moon Guard.",
        url: 'https://www.oasismoonguard.com/karumasedei',
        image: 'https://www.oasismoonguard.com/og/karumasedei.svg',
        canonical: 'https://www.oasismoonguard.com/karumasedei'
    });

    return (
        <Box style={styles.root}>
            <Box style={styles.videoWrapper}>
                <Header transparent />
                <img
                    src={KSHome}
                    alt="Karuma Sedei"
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
                        Karuma Sedei
                    </Typography>
                    <Typography variant="h2" style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', color: theme.colors.primary, marginTop: theme.spacing.md }}>
                        Where serenity blossoms, spirits are renewed, and every path leads towards harmony.
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
                        Oasis #17
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Nestled among tranquil gardens and sheltered beneath graceful cherry blossoms, Karuma Sedei Healing Sanctuary is a place of peace, reflection, and renewal within the heart of the community. '}
                        {'Founded and lovingly tended by the Pandaren monk Reikilotus, the sanctuary welcomes travelers, adventurers, and weary souls seeking a moment of stillness away from the burdens of the world.'}
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Built in the traditional Pandaren style, Karuma Sedei blends natural beauty with spiritual harmony. Soft lantern light dances across polished wood walkways, the gentle sound of flowing water echoes through meditation gardens, and the fragrance of rare teas and herbal incense drifts through the air. '}
                        {'Every corner of the sanctuary has been carefully designed to encourage balance of mind, body, and spirit.'}
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Visitors may enjoy guided meditation sessions, restorative tea ceremonies, spiritual consultations, energy-balancing treatments, and quiet spaces for contemplation. '}
                        {'Whether seeking healing after a difficult journey, guidance during a crossroads in life, or simply a peaceful refuge from the noise of the world, guests will find a warm welcome within these sacred halls.'}
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Under Reikilotus\' compassionate guidance, Karuma Sedei has earned a reputation as a haven where kindness is practiced, wisdom is shared, and every guest is treated with dignity and respect. '}
                        {'It is said that many who arrive burdened by worry leave with lighter hearts, renewed purpose, and a deeper connection to themselves and the world around them.'}
                    </Typography>
                    <br />
                    <Typography variant="h4" style={{ margin: `${theme.spacing.md} 0px 0px`, color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif' }}>
                        Journey of the Seven Lotuses
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        {'Journey of the Seven Lotuses is a signature spiritual experience unique to Karuma Sedei Healing Sanctuary, representing a symbolic pilgrimage through seven stages of growth, healing, and self-discovery. '}
                        {'Inspired by Pandaren philosophy, meditation practices, and chakra-based energy work, each lotus represents a lesson on the path toward harmony.'}
                    </Typography>
                    <Box sx={styles.lotusGrid}>
                        <Box sx={styles.lotusCard}>
                            <Typography variant="h5" sx={styles.lotusTitle}>
                                1. The Rooted Lotus — Foundation
                            </Typography>
                            <Typography variant="body2" sx={styles.lotusQuote}>
                                “Where do your feet stand?”
                            </Typography>
                            <Typography variant="body2" sx={styles.bodyText}>
                                The journey begins by establishing stability and grounding. Guests reflect on home, community, responsibility, and a sense of security.
                            </Typography>
                            <Typography variant="subtitle2" sx={styles.lotusFocus}>
                                Focus: Grounding, safety, belonging.
                            </Typography>
                        </Box>
                        <Box sx={styles.lotusCard}>
                            <Typography variant="h5" sx={styles.lotusTitle}>
                                2. The Flowing Lotus — Emotion
                            </Typography>
                            <Typography variant="body2" sx={styles.lotusQuote}>
                                “What waters move within you?”
                            </Typography>
                            <Typography variant="body2" sx={styles.bodyText}>
                                Participants explore emotions, creativity, and personal relationships, learning to accept feelings without judgment.
                            </Typography>
                            <Typography variant="subtitle2" sx={styles.lotusFocus}>
                                Focus: Emotional balance, creativity, connection.
                            </Typography>
                        </Box>
                        <Box sx={styles.lotusCard}>
                            <Typography variant="h5" sx={styles.lotusTitle}>
                                3. The Golden Lotus — Inner Fire
                            </Typography>
                            <Typography variant="body2" sx={styles.lotusQuote}>
                                “What purpose guides your steps?”
                            </Typography>
                            <Typography variant="body2" sx={styles.bodyText}>
                                This stage examines confidence, ambition, and personal strength. Guests identify obstacles that diminish their inner light.
                            </Typography>
                            <Typography variant="subtitle2" sx={styles.lotusFocus}>
                                Focus: Self-confidence, motivation, personal power.
                            </Typography>
                        </Box>
                        <Box sx={styles.lotusCard}>
                            <Typography variant="h5" sx={styles.lotusTitle}>
                                4. The Emerald Lotus — Compassion
                            </Typography>
                            <Typography variant="body2" sx={styles.lotusQuote}>
                                “How do you offer and receive kindness?”
                            </Typography>
                            <Typography variant="body2" sx={styles.bodyText}>
                                A meditation on forgiveness, empathy, and opening the heart to oneself and others.
                            </Typography>
                            <Typography variant="subtitle2" sx={styles.lotusFocus}>
                                Focus: Love, compassion, healing.
                            </Typography>
                        </Box>
                        <Box sx={styles.lotusCard}>
                            <Typography variant="h5" sx={styles.lotusTitle}>
                                5. The Azure Lotus — Voice
                            </Typography>
                            <Typography variant="body2" sx={styles.lotusQuote}>
                                “What truths remain unspoken?”
                            </Typography>
                            <Typography variant="body2" sx={styles.bodyText}>
                                Guests are encouraged to explore communication, authenticity, and the courage to speak honestly.
                            </Typography>
                            <Typography variant="subtitle2" sx={styles.lotusFocus}>
                                Focus: Expression, truth, self-advocacy.
                            </Typography>
                        </Box>
                        <Box sx={styles.lotusCard}>
                            <Typography variant="h5" sx={styles.lotusTitle}>
                                6. The Violet Lotus — Insight
                            </Typography>
                            <Typography variant="body2" sx={styles.lotusQuote}>
                                “What wisdom waits beneath the surface?”
                            </Typography>
                            <Typography variant="body2" sx={styles.bodyText}>
                                Through meditation and divination, participants seek greater understanding of their path and purpose.
                            </Typography>
                            <Typography variant="subtitle2" sx={styles.lotusFocus}>
                                Focus: Intuition, awareness, spiritual insight.
                            </Typography>
                        </Box>
                        <Box sx={styles.lotusCard}>
                            <Typography variant="h5" sx={styles.lotusTitle}>
                                7. The Celestial Lotus — Harmony
                            </Typography>
                            <Typography variant="body2" sx={styles.lotusQuote}>
                                “How will you carry your wisdom forward?”
                            </Typography>
                            <Typography variant="body2" sx={styles.bodyText}>
                                The final stage unites all previous lessons into a balanced whole, concluding with a blessing and reflection on the future journey.
                            </Typography>
                            <Typography variant="subtitle2" sx={styles.lotusFocus}>
                                Focus: Enlightenment, balance, unity.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: theme.spacing.lg }}>
                        <Box component="img" src={SevenLotus} alt="Seven Lotuses" sx={{ width: '100%', maxWidth: '720px', borderRadius: '16px', boxShadow: `0 20px 60px rgba(0,0,0,0.15)` }} />
                    </Box>
                    <Box sx={styles.serviceSection}>
                        <Typography variant="h4" style={{ margin: `${theme.spacing.sm} 0px ${theme.spacing.sm}`, color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif', textAlign: 'center' }}>
                            House Blessings & Sanctuary Offerings
                        </Typography>
                        <Typography variant="body1" sx={{ ...styles.bodyText, textAlign: 'center' }}>
                            Karuma Sedei offers a collection of blessings, healing sessions, meditation experiences, and mindful tea rituals to restore peace, balance, and warmth to home and hearth.
                        </Typography>
                        <Box sx={styles.serviceGrid}>
                            <Box sx={styles.serviceCard}>
                                <Typography variant="h5" sx={styles.serviceCardTitle}>
                                    House Blessings
                                </Typography>
                                <Typography variant="body2" sx={styles.serviceItem}>
                                    Home Harmony Blessing
                                </Typography>
                                <Typography variant="body2" sx={styles.serviceItem}>
                                    New Home Consecration
                                </Typography>
                                <Typography variant="body2" sx={styles.serviceItem}>
                                    Business Prosperity Blessing
                                </Typography>
                            </Box>
                            <Box sx={styles.serviceCard}>
                                <Typography variant="h5" sx={styles.serviceCardTitle}>
                                    Spiritual Healing
                                </Typography>
                                <Typography variant="body2" sx={styles.serviceItem}>
                                    Lotus Energy Balancing
                                </Typography>
                                <Typography variant="body2" sx={styles.serviceItem}>
                                    Chakra Alignment Consultation
                                </Typography>
                                <Typography variant="body2" sx={styles.serviceItem}>
                                    Reiki Blessing Ceremony
                                </Typography>
                                <Typography variant="body2" sx={styles.serviceItem}>
                                    Aura Cleansing Ritual
                                </Typography>
                            </Box>
                            <Box sx={styles.serviceCard}>
                                <Typography variant="h5" sx={styles.serviceCardTitle}>
                                    Meditation Services
                                </Typography>
                                <Typography variant="body2" sx={styles.serviceItem}>
                                    Guided Meditation Journey
                                </Typography>
                                <Typography variant="body2" sx={styles.serviceItem}>
                                    Group Meditation Circle
                                </Typography>
                                <Typography variant="body2" sx={styles.serviceItem}>
                                    Breath of the Jade Lotus
                                </Typography>
                            </Box>
                            <Box sx={styles.serviceCard}>
                                <Typography variant="h5" sx={styles.serviceCardTitle}>
                                    Tea & Tranquility
                                </Typography>
                                <Typography variant="body2" sx={styles.serviceItem}>
                                    Pandaren Tea Ceremony
                                </Typography>
                                <Typography variant="body2" sx={styles.serviceItem}>
                                    Traveler's Respite
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Typography variant="h4" style={{ margin: `${theme.spacing.xl} 0px 0px`, color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif' }}>
                        The Experience at Karuma Sedei
                    </Typography>
                    <Typography variant="body1" sx={styles.bodyText}>
                        A complete Journey of the Seven Lotuses may include:
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={{...styles.bodyText, marginLeft: theme.spacing.md}}>
                        Welcome tea ceremony
                    </Typography>
                    <Typography variant="body1" sx={{...styles.bodyText, marginLeft: theme.spacing.md}}>
                        Seven guided reflections or meditations
                    </Typography>
                    <Typography variant="body1" sx={{...styles.bodyText, marginLeft: theme.spacing.md}}>
                        Reiki healing at each lotus stage
                    </Typography>
                    <Typography variant="body1" sx={{...styles.bodyText, marginLeft: theme.spacing.md}}>
                        Oracle card guidance
                    </Typography>
                    <Typography variant="body1" sx={{...styles.bodyText, marginLeft: theme.spacing.md}}>
                        A closing blessing from Reikilotus
                    </Typography>
                    <br />
                    <Typography variant="body1" sx={styles.bodyText}>
                        Many guests choose to complete the journey in a single extended visit, while others return weekly to focus on one lotus at a time.
                    </Typography>                    
                    <Typography variant="h6" style={{ margin: `${theme.spacing.md} 0px 0px`, color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif' }}>
                        Karuma Sedei Teaching:
                    </Typography>
                    <Typography variant="body1" sx={{...styles.bodyText, fontStyle: 'italic'}}>
                        "The lotus does not bloom all at once. Each petal unfolds in its own season, revealing the beauty that was always waiting within."
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

export default KarumaSedei;

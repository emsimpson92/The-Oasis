import { cloneElement, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import ActivityCard from '../components/ActivityCard';
import '../styles/fonts.css';

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
            marginBottom: theme.spacing.xl,
            userSelect: 'none',
            fontFamily: 'Arsenica Trial Regular, serif',
            textAlign: 'center',
        },
        heroImage: {
            width: '100%',
            height: '400px',
            borderRadius: '16px',
            objectFit: 'cover',
            marginBottom: theme.spacing.xxl,
            boxShadow: theme.shadows.lg,
        },
        sectionTitle: {
            fontSize: theme.typography.fontSize.xxlarge,
            color: theme.colors.primary,
            textAlign: 'center',
            marginBottom: theme.spacing.xl,
            userSelect: 'none',
            fontWeight: 'bold',
            fontFamily: 'Arsenica Trial Regular, serif',
        },
        descriptionText: {
            fontSize: theme.typography.fontSize.large,
            color: theme.colors.text,
            textAlign: 'center',
            marginBottom: theme.spacing.xxl,
            lineHeight: '1.6',
        },
        cardImage: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            marginBottom: theme.spacing.lg,
            boxShadow: theme.shadows.md,
        },
    };
};

function Page(props) {
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
                    {props.pageTitle}
                </Typography>

                <Box>
                {
                    cloneElement(props.heroImage, { style: styles.heroImage })
                }
                </Box>

                <Typography variant="h2" style={styles.sectionTitle}>
                    {props.subtitle}
                </Typography>
                <Typography style={styles.descriptionText}>
                    {props.description}
                </Typography>

                <Typography variant="h2" style={styles.sectionTitle}>
                    {props.cardSectionTitle}
                </Typography>
                <Grid container spacing={4} style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    props.items.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <ActivityCard title={item.name} description={item.description}>
                                <img src={item.image} alt={item.name} style={styles.cardImage} loading='lazy' />
                            </ActivityCard>
                        </Grid>
                    ))
                }
                </Grid>
            </Container>
            </Box>
        </Box>
    );
}

export default Page;
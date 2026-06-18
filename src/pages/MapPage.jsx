import { useEffect } from 'react';
import useMeta from '../hooks/useMeta';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import Map from '../assets/Map.webp';
import '../styles/fonts.css';
import { Plots } from '../data';
import { useTheme as muiTheme } from '@mui/material';

const Styles = (theme) => {
    return {
        root: {
            backgroundColor: theme.colors.background,
            minHeight: '100vh',
        },
        pageTitle: {
            fontSize: '3.5rem',
            color: theme.colors.primary,
            fontWeight: 'bold',
            marginBottom: theme.spacing.md,
            userSelect: 'none',
            fontFamily: 'Arsenica Trial Regular, serif',
            textAlign: 'center',
        },
        map: {
            width: '95%',
            display: 'flex',
            margin: '0 auto',
            borderRadius: '24px',
            border: `5px solid ${theme.colors.accent}`,
            boxShadow: theme.shadows.lg,
        },
        mapContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        sectionTitle: {
            fontSize: theme.typography.fontSize.xxlarge,
            color: theme.colors.primary,
            textAlign: 'center',
            margin: theme.spacing.md,
            userSelect: 'none',
            fontWeight: 'bold',
            fontFamily: 'Arsenica Trial Regular, serif',
        },
        plotContainer: {
            justifyContent: 'space-around', 
            margin: '0 4rem',
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                margin: `0px 0px 0px ${theme.spacing.sm}`,
                flexDirection: 'column',
                gap: '0px',
            },
        },
        plotLabel: {
            display: 'inline', 
            color: theme.colors.primary, 
            fontFamily: 'serif',
            fontSize: theme.typography.fontSize.large,
            marginLeft: theme.spacing.sm, 
            marginBottom: theme.spacing.xs,
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.fontSize.base,
                margin: 'auto'
            },
        },
        plotDescription: {
            display: 'inline', 
            color: theme.colors.text, 
            marginLeft: theme.spacing.sm, 
            marginBottom: theme.spacing.xs,
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.fontSize.base,
            },
        }
    };
};

function MapPage() {
    const theme = useTheme();
    const mui = muiTheme();
    const styles = Styles({...mui, ...theme});
    useMeta({
        title: 'Explore the Oasis Map — The Oasis',
        description: 'View plot locations and availability for The Oasis charter neighborhood on Moon Guard. Explore plots, locations, and community points of interest.',
        url: 'https://www.oasismoonguard.com/map',
        image: 'https://www.oasismoonguard.com/og/map.svg',
        canonical: 'https://www.oasismoonguard.com/map'
    });
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box>
            <Header />
            <Box style={styles.root}>
                <Typography variant="h1" style={styles.pageTitle}>
                    {'Explore the Oasis Map'}
                </Typography>
                <Box style={styles.mapContainer}>
                    <img src={Map} alt="Map" style={styles.map} />
                    <Box>
                        <Typography variant="h2" style={styles.sectionTitle}>
                            {'Plots'}
                        </Typography>
                        <Grid container spacing={2} padding={2} sx={styles.plotContainer}>
                        {
                            Plots.map((col, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                {
                                    col.map((plot) => (
                                        <div key={plot.id}>
                                            <Typography variant="body1" sx={styles.plotLabel}>
                                                {`Plot ${plot.id}:`}
                                            </Typography>
                                            <Typography variant="body1" sx={{...styles.plotDescription, color: plot.description === 'Available' ? theme.colors.accent : theme.colors.text}}>
                                                {plot.description}
                                            </Typography>
                                        </div>
                                    ))
                                }
                                </Grid>
                            ))
                        }
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default MapPage;
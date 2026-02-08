import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme as muiTheme } from '@mui/material';

const Styles = (theme) => {
    return {
        footer: {
            backgroundColor: theme.colors.header,
            padding: `${theme.spacing.lg} ${theme.spacing.md}`,
            textAlign: 'center',
            marginTop: 'auto',
        },
        title: {
            fontSize: theme.typography.fontSize.xxlarge,
            color: theme.colors.primary,
            fontWeight: 'bold',
            userSelect: 'none',
            fontFamily: 'Arsenica Trial Regular, serif',
            marginBottom: theme.spacing.lg,
        },
        sectionsContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: theme.spacing.xxl,
            flexWrap: 'wrap',
            maxWidth: '600px',
            margin: '0 auto',
        },
        section: {
            minWidth: '150px',
            textAlign: 'left',
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
                margin: 'auto'
            },
        },
        sectionTitle: {
            fontSize: theme.typography.fontSize.large,
            color: theme.colors.primary,
            fontWeight: 'bold',
            userSelect: 'none',
            marginLeft: '4px',
            fontFamily: 'Cormorant Garamond, serif',
            marginBottom: theme.spacing.sm,
        },
        sectionButton: {
            color: theme.colors.primary,
            textTransform: 'none',
            fontWeight: 700,
            padding: '4px',
            fontFamily: 'Cormorant Garamond, serif',
            textAlign: 'left',
            display: 'block',
            fontSize: '0.875rem',
            margin: `${theme.spacing.xs} 0`,
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
                margin: 'auto'
            },
        },
        oasisLogo: {
            width: '60px', 
            height: '60px', 
            userSelect: 'none',
        },
        divider: {
            border: `1px solid ${theme.colors.accent}`,
            margin: `${theme.spacing.xs} 0 ${theme.spacing.sm} 0`,
        },
        link: {
            textDecoration: 'none'
        }
    }
}

function Footer() {
    const theme = useTheme();
    const mui = muiTheme();
    const styles = Styles({...mui, ...theme});

    return (
        <Box sx={styles.footer}>
            <img src='/favicon.svg' alt='Oasis Logo' style={styles.oasisLogo} />
            <Typography variant="h2" sx={styles.title}>
                Adventure awaits in the Oasis
            </Typography>
            <Box sx={styles.sectionsContainer}>
                <Box sx={styles.section}>
                    <Typography sx={styles.sectionTitle}>About</Typography>
                    <hr style={styles.divider} />
                    <RouterLink style={styles.link} to="/about"><Typography sx={styles.sectionButton}>What is the Oasis?</Typography></RouterLink>
                    <RouterLink style={styles.link} to="/map"><Typography sx={styles.sectionButton}>Community Map</Typography></RouterLink>
                </Box>
                <Box sx={styles.section}>
                    <Typography sx={styles.sectionTitle}>Contact</Typography>
                    <hr style={styles.divider} />
                    <RouterLink to="/contact" style={styles.link}><Typography sx={styles.sectionButton}>General Inquiries</Typography></RouterLink>
                    <RouterLink style={styles.link} to="/events/request"><Typography sx={styles.sectionButton}>Request an Event</Typography></RouterLink>
                    <Button variant="inline" onClick={() => window.open('https://discord.gg/AhsnAsSUNK', '_blank', 'noopener,noreferrer')} sx={styles.sectionButton}>Join the Community</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer

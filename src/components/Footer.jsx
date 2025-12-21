import { Box, Button, Typography } from '@mui/material'
import { useTheme } from '../hooks/useTheme'
import { Link as RouterLink } from 'react-router-dom';

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
            maxWidth: '1000px',
            margin: '0 auto',
        },
        section: {
            minWidth: '150px',
            textAlign: 'left',
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
            textDecoration: 'none',
            fontWeight: 700,
            padding: '4px',
            fontFamily: 'Cormorant Garamond, serif',
            textAlign: 'left',
            display: 'block',
            fontSize: '0.875rem',
            margin: `${theme.spacing.xs} 0`
        },
        oasisLogo: {
            width: '60px', 
            height: '60px', 
            userSelect: 'none',
        },
        divider: {
            border: `1px solid ${theme.colors.accent}`,
            margin: `${theme.spacing.xs} 0 ${theme.spacing.sm} 0`,
        }
    }
}

function Footer() {
    const theme = useTheme()
    const styles = Styles(theme)

    return (
        <Box sx={styles.footer}>
            <img src='/favicon.svg' alt='Oasis Logo' style={styles.oasisLogo} />
            <Typography variant="h2" sx={styles.title}>
                Enjoy Your Stay at the Oasis
            </Typography>
            <Box sx={styles.sectionsContainer}>
                <Box sx={styles.section}>
                    <Typography sx={styles.sectionTitle}>About</Typography>
                    <hr style={styles.divider} />
                    <RouterLink style={styles.sectionButton} to="/about">What is the Oasis?</RouterLink>
                    <RouterLink style={styles.sectionButton} to="/map">Community Map</RouterLink>
                </Box>
                <Box sx={styles.section}>
                    <Typography sx={styles.sectionTitle}>Events</Typography>
                    <hr style={styles.divider} />
                    <RouterLink style={styles.sectionButton} to="/events/upcoming">Upcoming events</RouterLink>
                    <RouterLink style={styles.sectionButton} to="/events/request">Request an Event</RouterLink>
                </Box>
                <Box sx={styles.section}>
                    <Typography sx={styles.sectionTitle}>Contact</Typography>
                    <hr style={styles.divider} />
                    <RouterLink style={styles.sectionButton} to="/contact">General Inquiries</RouterLink>
                    <Button variant="inline" onClick={() => window.open('https://discord.gg/AhsnAsSUNK', '_blank', 'noopener,noreferrer')} sx={styles.sectionButton}>Join the Community</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer

import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import DiscordIcon from '../assets/discord-icon.svg';
import { useTheme as muiTheme } from '@mui/material';

const Styles = (theme) => {
    return {
        header: {
            backgroundColor: theme.colors.background,
            padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing.sm,
            },
        },
        oasisLogo: {
            width: '35px', 
            height: '35px', 
            userSelect: 'none',
        },
        logo: {
            textDecoration: 'none',
        },
        discordButton: {
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.sm,
            '&:hover': {
                opacity: 0.7,
            },
            [theme.breakpoints.down('sm')]: {
                padding: `${theme.spacing.xs} 0px`,
                alignItems: 'flex-end'
            },
        },
        oasisText: {
            transform: 'translateY(-4px)',
            display: 'inline-block',
            paddingLeft: `${theme.spacing.sm}`,
            color: theme.colors.primary,
            fontSize: theme.typography.fontSize.xxlarge,
            fontWeight: 'bold',
            fontFamily: 'Arsenica Trial Regular, serif',
            '&:hover': {
                opacity: 0.8,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.fontSize.xlarge,
                transform: 'translateY(-8px)',
            },
        },
        discordText: {            
            color: theme.colors.primary,
            textTransform: 'none',
            fontSize: theme.typography.fontSize.large,
            fontFamily: 'Arsenica Trial Regular, serif',
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        }
    };
};

function Header() {
    const theme = useTheme();
    const mui = muiTheme();
    const styles = Styles({...mui, ...theme});

    return (
        <Box sx={styles.header}>
            <RouterLink to="/" style={styles.logo}>
                <img src='/favicon.svg' alt='Oasis Logo' style={styles.oasisLogo} />
                <Typography sx={styles.oasisText}>The Oasis</Typography>
            </RouterLink>
            <Button variant="text" href="https://discord.gg/AhsnAsSUNK" target="_blank" rel="noopener noreferrer" sx={styles.discordButton}>
                <img src={DiscordIcon} alt="Discord" style={{ width: '24px', height: '24px' }} />
                <Typography sx={styles.discordText}>Discord</Typography>
            </Button>
        </Box>
    );
}

export default Header;

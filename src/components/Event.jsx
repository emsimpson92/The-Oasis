import { Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';

const Styles = (theme) => {
    return {
        root: {
            marginTop: theme.spacing.lg
        },
        title: {            
            fontSize: theme.typography.fontSize.xxlarge,
            color: theme.colors.primary,
            userSelect: 'none',
            fontWeight: 'bold',
            fontFamily: 'Arsenica Trial Regular, serif',
        },
        date: {
            fontStyle: 'italic',
            fontSize: theme.typography.fontSize.small,
            color: theme.colors.accent
        },
        description: {
            fontSize: theme.typography.fontSize.large,
            color: theme.colors.text,
            fontFamily: 'Cormorant Garamond, serif'
        },
        divider: {
            border: `1px solid ${theme.colors.accent}`,
        },
        bannerImage: {
            maxHeight: '200px',
            display: 'flex',
            margin: `${theme.spacing.lg} auto`
        }
    }
};

const FormatDate = (start, end) => {
    let isPM = start.getHours() > 12;
    let final = `${start.toLocaleDateString('en-US')} - `;
    final += `${start.getHours() - (isPM ? 12 : 0)}:${start.getMinutes().toString().padStart(2, '0')} ${(isPM ? 'PM' : 'AM')}`;
    if(end) {
        let isPM = end.getHours() > 12;
        final += ` to ${end.getHours() - (isPM ? 12 : 0)}:${end.getMinutes().toString().padStart(2, '0')} ${(isPM ? 'PM' : 'AM')}`;
    }

    return final;
}

function Event(props) {
    const theme = useTheme();
    const styles = Styles(theme);
    const { title, start, end, description, banner } = props.model;

    return (
        <div style={styles.root}>
            <Typography variant='h1' sx={styles.title}>{title}</Typography>
            <Typography variant='caption' sx={styles.date}>{FormatDate(start, end)}</Typography>
            <Typography variant='body1' sx={styles.description}>{description}</Typography>
            {banner && <img src={banner} alt={'Event Image'} style={styles.bannerImage} loading='lazy' />}
            <hr style={styles.divider} />
        </div>
    )
}

export default Event;
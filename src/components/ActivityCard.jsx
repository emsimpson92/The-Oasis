import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { Fragment } from 'react';
import { useTheme as muiTheme } from '@mui/material';

const Styles = (theme, hasLink) => {
    return {
        root: {
            backgroundColor: theme.colors.header,
            height: '100%',
            display: 'flex',
            width: '330px',
            flexDirection: 'column',
            transition: hasLink ? 'transform 0.3s ease' : 'none',
            cursor: hasLink ? 'pointer' : 'default',
            ...(hasLink && {
                '&:hover': {
                    transform: 'translateY(-5px)',
                }
            }),
            [theme.breakpoints.down('sm')]: {
                maxWidth: '350px',
            },
        },
        cardTitle: {            
            color: theme.colors.primary,
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: theme.typography.fontSize.xlarge,
            fontWeight: 'bold',
        },
        description: {            
            color: theme.colors.text,
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: theme.typography.fontSize.base,
            marginBottom: theme.spacing.md,
            flex: 1,
        },
        learnMore: {            
            color: theme.colors.link,
            textDecoration: 'underline',
            textDecorationColor: theme.colors.link,
            textDecorationThickness: '2px',
            textUnderlineOffset: '4px',
            display: 'inline-block',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 'bold',
            '&:hover': {
                opacity: 0.8,
            },
        },
        link: { 
            textDecoration: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%' 
        },
        content: {
            display: 'flex', 
            flexDirection: 'column',
            flex: 1,
        }
    }
};

function ActivityCard({ title, description, link, children }) {
    const theme = useTheme();
    const mui = muiTheme();
    const styles = Styles({...mui, ...theme}, !!link);
    const hasLink = !!link;

    const cardContent = (
        <Fragment>
            <CardMedia component="div">{children}</CardMedia>
            <CardContent sx={styles.content}>
                <Typography gutterBottom variant="h5" style={styles.cardTitle}>
                    {title}
                </Typography>
                <Typography variant="body2" style={styles.description}>
                    {description}
                </Typography>
                {
                    hasLink && (
                        <Typography sx={styles.learnMore}>
                            Learn More →
                        </Typography>
                    )
                }
            </CardContent>
        </Fragment>
    );

    return (
        <Card sx={styles.root}>
        {
            hasLink ? (
                <RouterLink to={link} style={styles.link}>
                    {cardContent}
                </RouterLink>
            ) : (
                cardContent
            )
        }
        </Card>
    )
}

export default ActivityCard;
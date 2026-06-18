import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useMeta from '../../hooks/useMeta';
import { useTheme as useCustomTheme } from '../../hooks/useTheme';
import { useTheme as muiTheme } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BuriedGodImg from '../../assets/Chronicles/BuriedGod/BuriedGod.webp';
import Tablet1 from '../../assets/Chronicles/BuriedGod/Tablet1.webp';
import Tablet2 from '../../assets/Chronicles/BuriedGod/Tablet2.webp';
import Tablet3 from '../../assets/Chronicles/BuriedGod/Tablet3.webp';
import Tablet4 from '../../assets/Chronicles/BuriedGod/Tablet4.webp';
import '../../styles/fonts.css';

const Styles = (theme) => ({
	root: { backgroundColor: theme.colors.background, minHeight: '100vh', color: theme.colors.text },
	hero: {
		position: 'relative',
		width: '100%',
		height: '56vh',
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'center',
		overflow: 'hidden',
		backgroundColor: theme.colors.background,
		[theme.breakpoints.down('sm')]: {
			height: '31vh',
			maxHeight: '250px'
		}
	},
	heroImage: {
		position: 'absolute',
		top: 0,
		left: '50%',
        transform: 'translateX(-50%)',
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		objectPosition: 'center',
		filter: 'brightness(0.75) contrast(1.05)',
		[theme.breakpoints.down('sm')]: {
			left: 0,
			transform: 'none',
			width: '100%'
		}
	},
	heroTitle: {
		position: 'absolute',
		bottom: theme.spacing.md,
		left: '50%',
		transform: 'translateX(-50%)',
		zIndex: 2,
		color: theme.colors.background,
		fontFamily: 'Arsenica Trial Regular, serif',
		textAlign: 'center',
		width: '100%',
		padding: `${theme.spacing.sm} ${theme.spacing.md}`,
		[theme.breakpoints.down('sm')]: {
			bottom: theme.spacing.sm
		}
	},
	article: {
		padding: `${theme.spacing.xl} ${theme.spacing.md} ${theme.spacing.sm}`,
		maxWidth: '840px',
		margin: '0 auto',
		[theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing.lg} ${theme.spacing.md} ${theme.spacing.sm}`,
		}
	},
	byline: { color: theme.colors.primary, marginBottom: theme.spacing.sm },
	bodyText: { fontFamily: 'Cormorant Garamond, serif', color: theme.colors.text, lineHeight: 1.8 },
	carouselContainer: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: theme.spacing.lg,
		marginTop: theme.spacing.xl,
		[theme.breakpoints.down('sm')]: {
			gap: 0
		}
	},
	carouselButton: {
		color: theme.colors.primary,
		'&:hover': {
			opacity: 0.6
		}
	},
	carouselContent: {
		position: 'relative',
		overflow: 'hidden',
		flex: 1,
		maxWidth: '300px',
		display: 'flex',
		justifyContent: 'center',
		height: '375px',
		[theme.breakpoints.down('sm')]: {
			minWidth: '250px'
		}
	}
});

function TheBuriedGod() {
	const theme = useCustomTheme();
	const mui = muiTheme();
	const styles = Styles({ ...mui, ...theme });
	const [carouselIndex, setCarouselIndex] = useState(0);

	const tablets = [
		{ name: 'Tablet 1', image: Tablet1 },
		{ name: 'Tablet 2', image: Tablet2 },
		{ name: 'Tablet 3', image: Tablet3 },
		{ name: 'Tablet 4', image: Tablet4 }
	];

	const handlePrevious = () => {
		setCarouselIndex((prev) => (prev === 0 ? tablets.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCarouselIndex((prev) => (prev === tablets.length - 1 ? 0 : prev + 1));
	};

	useEffect(() => window.scrollTo(0, 0), []);

	useMeta({
		title: 'The Buried God — Chronicles — The Oasis',
		description: 'A tablet with strange markings is found off the coast of the Oasis.',
		url: 'https://www.oasismoonguard.com/chronicles/theburiedgod',
		image: 'https://www.oasismoonguard.com/og/theburiedgod.svg',
		canonical: 'https://www.oasismoonguard.com/chronicles/theburiedgod'
	});

	return (
		<Box style={styles.root}>
			<Header />

		<Box sx={styles.hero}>
			<Box
				component="img"
				src={BuriedGodImg}
				alt="The Buried God"
				loading="eager"
				sx={styles.heroImage}
			/>
				<Typography variant="h1" component="h1" style={{ ...styles.heroTitle, fontSize: '2.5rem' }}>
					The Buried God
				</Typography>
			</Box>

			<Container component="article" maxWidth="md" sx={styles.article}>
				<Typography variant="subtitle1" style={styles.byline}>
					The Chronicler - June 14, 2026
				</Typography>

				<Typography variant="body1" sx={styles.bodyText} paragraph>
					A strange tablet was found off the coast of the Oasis near a shipwreck. The tablet contained indecipherable markings that required the assistance of the bronze dragonflight to translate. 
					After questioning the locals, community members were led to the smuggler's cove, who suggested that the explorer's league may be able to help translate the tablet. 
					Brann was unable to help, however he suggested that Anachronos may be able to assist. After being bestowed with Anachronos' knowledge, the tablet was successfully translated.
				</Typography>

				<Typography variant="body1" sx={styles.bodyText} paragraph>
					The tablet spoke of an ancient civilization that had once thrived in the region, but had mysteriously vanished upon the arrival of a new group called "The Verdant Accord". 
					The explorers made their way back to the smuggler's hideout to inquire about additional tablets. "High Tides" Ren said that his contact in Booty Bay might have some more information, so they decided to investigate.
					After visiting the contact, they learned that the tablet had been stolen by a nearby group of bloodsail pirates. They interrogated a pirate by the name of Crosby and learned that the tablet was in the cargo hold of a nearby ship.
					They decided to board the ship and retrieve the tablet.
				</Typography>

				<Typography variant="body1" sx={styles.bodyText} paragraph>
					The second tablet mentioned an entity called "The Ancient One", and revealed the native population's skepticism towards the new group. Upon returning to the Oasis, the explorers heard rumors of some hieroglyphs on a rock formation in the southern region. 
					The hieroglyphs revealed that the Oasis was once a vast desert ruled by a massive sand worm, who was worshipped by the native population. After the Verdant Accord had arrived, they engaged in battle. 
					The rest of the hieroglyphs had faded away, leaving only fragments of the ancient story, but the remaining piece suggested that the tablets had been carved on a nearby island. 
					The explorers found the third tablet in the water under a dock along the coast.
				</Typography>

				<Typography variant="body1" sx={styles.bodyText} paragraph>
					The third tablet detailed the conflict between the native population and the Verdant Accord. The druids of the accord seemed to be winning the battle. The explorers returned to the smuggler's den once more to request assistance. 
					The smuggler told them of a hooded figure who carried a lute and was also looking for the tablets. After finding the lute player's home, the explorers discovered a map with notes written in the margins that mentioned that the final tablet had been shattered into 3 pieces. 
					The locations of the three pieces were marked on the map. One piece was located in a cave in the southern reaches of Kalimdor, guarded by a large sleeping dragon. The other was guarded by the Verdant Accord themselves, in the Emerald Dream. 
					The final piece had already been retrieved by the hooded figure. After retrieving the fragment from the Verdant Accord, the explorers were given the location of the hooded figure's hideout.
					This led them to the Grim Guzzler, where they defeated the cultist and retrieved the final piece of the tablet.
				</Typography>
				
				<Typography variant="body1" sx={styles.bodyText} paragraph>
					Once the tablet had been reassembled, it revealed that the native group called themselves "The Children of the Shifting Sands". They had lost the battle against the Verdant Accord, and the sand worm had been put to rest beneath the Oasis under a powerful binding spell. 
					The tablet suggested that the children of the shifting sands had been defeated, but they are not gone forever. One day they may return to shatter the six seals that bind their master, and reawaken the Ancient One, returning the Oasis to its former desolate state.
				</Typography>

				<Typography variant="body1" sx={{...styles.bodyText, fontStyle: 'italic'}} paragraph>
					The text of the tablets can be seen below.
				</Typography>
			</Container>

			<Box sx={{ paddingBottom: theme.spacing.xl, backgroundColor: theme.colors.background }}>
				<Container maxWidth="xl">
					<Box sx={styles.carouselContainer}>
						<IconButton onClick={handlePrevious} sx={styles.carouselButton} aria-label="previous" size="large">
							<ArrowBackIcon />
						</IconButton>
						<Box sx={styles.carouselContent}>
							{
								tablets.map((item, index) => (
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
										}}>
										<div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
											<img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', borderRadius: '4px' }} loading='lazy' />
										</div>
									</Box>
								))
							}
						</Box>
						<IconButton onClick={handleNext} sx={styles.carouselButton} aria-label="next" size="large">
							<ArrowForwardIcon />
						</IconButton>
					</Box>
					<Typography variant="body1" style={{ textAlign: 'center', color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif', fontSize: theme.typography.fontSize.large, marginTop: theme.spacing.sm }}>
						{tablets[carouselIndex].name}
					</Typography>
				</Container>
			</Box>
		</Box>
	);
}

export default TheBuriedGod;

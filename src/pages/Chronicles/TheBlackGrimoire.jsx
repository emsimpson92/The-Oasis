import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, IconButton, Slide } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useMeta from '../../hooks/useMeta';
import { useTheme as useCustomTheme } from '../../hooks/useTheme';
import { useTheme as muiTheme } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlackGrimoireImg from '../../assets/Chronicles/BlackGrimoire.webp';
import Page1 from '../../assets/Chronicles/Page1.webp';
import Page2 from '../../assets/Chronicles/Page2.webp';
import Page3 from '../../assets/Chronicles/Page3.webp';
import Page4 from '../../assets/Chronicles/Page4.webp';
import Page5 from '../../assets/Chronicles/Page5.webp';
import Page6 from '../../assets/Chronicles/Page6.webp';
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
			height: '31vh'
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
		objectPosition: 'top center',
		filter: 'brightness(0.75) contrast(1.05)',
		[theme.breakpoints.down('sm')]: {
			left: 0,
			transform: 'none',
			width: '100%'
		}
	},
	heroTitle: {
		position: 'relative',
		zIndex: 2,
		color: theme.colors.background,
		fontFamily: 'Arsenica Trial Regular, serif',
		padding: `${theme.spacing.lg} ${theme.spacing.md}`,
		textAlign: 'center'
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

function TheBlackGrimoire() {
	const theme = useCustomTheme();
	const mui = muiTheme();
	const styles = Styles({ ...mui, ...theme });
	const [carouselIndex, setCarouselIndex] = useState(0);
	const [direction, setDirection] = useState('left');

	const pages = [
		{ name: 'Page 1', image: Page1 },
		{ name: 'Page 2', image: Page2 },
		{ name: 'Page 3', image: Page3 },
		{ name: 'Page 4', image: Page4 },
		{ name: 'Page 5', image: Page5 },
		{ name: 'Page 6', image: Page6 }
	];

	const handlePrevious = () => {
		setDirection('right');
		setCarouselIndex((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setDirection('left');
		setCarouselIndex((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
	};

	useEffect(() => window.scrollTo(0, 0), []);

	useMeta({
		title: 'The Black Grimoire — Chronicles — The Oasis',
		description: 'An ancient volume reappears in The Oasis, its pages humming with dark and useful knowledge.',
		url: 'https://www.oasismoonguard.com/chronicles/theblackgrimoire',
		image: 'https://www.oasismoonguard.com/og/theblackgrimoire.svg',
		canonical: 'https://www.oasismoonguard.com/chronicles/theblackgrimoire'
	});

	return (
		<Box style={styles.root}>
			<Header />

		<Box sx={styles.hero}>
			<Box
				component="img"
				src={BlackGrimoireImg}
				alt="The Black Grimoire"
				loading="eager"
				sx={styles.heroImage}
			/>
				<Typography variant="h1" component="h1" style={{ ...styles.heroTitle, fontSize: '3rem' }}>
					The Black Grimoire
				</Typography>
			</Box>

			<Container component="article" maxWidth="md" sx={styles.article}>
				<Typography variant="subtitle1" style={styles.byline}>
					The Chronicler - May 23, 2026
				</Typography>

				<Typography variant="body1" sx={styles.bodyText} paragraph>
					Members of the community worked together to piece together the story of the Black Grimoire. It started with a single page in the town square, 
                    and sent them to the home of a local alchemist to investigate a break-in. Another page was found inside the alchemist's home.
				</Typography>

				<Typography variant="body1" sx={styles.bodyText} paragraph>
					The second page sent them to a shady bartender named 'Mad' Marrick, who denied any involvement but hinted that his 'supplier' might have some more information. 
                    Once they located the supplier, they were sent looking for an amulet that had been snatched by some local wildlife. Once the amulet was retrieved, 
                    the supplier refused to help them, and her bodyguard scared them off. After eavesdropping on their conversation, they found out that the owner of the journal 
                    had gone to a dark cave in search of glowing crystals. They searched Rachni's Crypt and found the crystals they were looking for, as well as 
                    another page of the journal.
				</Typography>

				<Typography variant="body1" sx={styles.bodyText} paragraph>
					The third page mentioned a black market, so the group set off in search of it. They found it hidden behind an illusory wall at Tyrin's 
                    home, and one of the black market dealers asked them to collect some payments in exchange for an artifact that might help them locate what 
                    they were looking for. After collecting the payments, they returned and were given a magical sphinx statue. When holding the statue and 
                    concentrating, the sphinx would light up and tell them a riddle. This riddle lead them to the base of the 4 sisters waterfall, where they 
                    found the fourth page.
				</Typography>

				<Typography variant="body1" sx={styles.bodyText} paragraph>
					The fourth page referenced an abandoned 'east wing' of the lodge. After searching the library, they noticed a suspicious bookcase on the 
                    second floor. After pulling on a book, they revealed a hidden passageway that led to a secret room. Inside the room, was a strange machine and 
                    several portals. On the table in front of them was a manual on how to operate the machine. The manual explained that they would need to acquire 
                    an astral attunement rod, and attune it to various locations within the Oasis. After crafting the rod at the alchemist station in the lodge, 
                    they set off to attune it to the locations mentioned in the manual. After attuning it to the locations, they were able to use the machine to open a portal. 
                    They stepped through the portal and found themselves in a dark cave. As they explored the depths of the cave, they came across a small campsite with the 
                    final pages of the journal.
				</Typography>

				<Typography variant="body1" sx={styles.bodyText} paragraph>
					The journal revealed that the owner of the journal was none other than the community manager of the Oasis - Zadwick Fizzleblooom. Although, Zadwick 
                    was not his true name. The real Zadwick had died decades ago. The 'Zadwick' that they knew was actually his twin brother, Zibwick Fizzlebloom. 
                    He had assumed his brother's identity 51 years prior after he had summoned a demonic entity that he was unable to control and had killed his entire family. 
                    He feared that the guards would learn about what had happened and he would be taken into custody, so he took on his brother's identity and claimed that 
                    Zibwick had died in the incident.
				</Typography>

				<Typography variant="body1" sx={styles.bodyText} paragraph>
					Regardless... Zibwick was successful the second time around. He was able to summon the demon and bind it to his will. After mastering fel magic, he 
                    chose to abandon the Fizzlebloom name and took on the name Zibwick Felbloom, as a result. The summoning left a scar in the portal room... A rift that 
                    he was unable to close. He set off in search of some powerful components that he would use to create a leystaff that would be powerful enough to close the rift. 
                    The townsfolk followed him and acquired a bloodgem of Mannoroth, and a root of the world tree to create a depleted leystaff. They went to Karazhan and 
                    fought their way to the tower's summit, where the arcane energies were the most powerful, and used it to charge the leystaff. After returning to the lodge, 
                    they used the leystaff to seal the rift permanently and keep the burning legion out of the Oasis.
				</Typography>

				<Typography variant="body1" sx={{...styles.bodyText, fontStyle: 'italic'}} paragraph>
					A full copy of the Black Grimoire can be seen below
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
								pages.map((item, index) => (
									<Slide 
										key={index}
										direction={direction} 
										in={carouselIndex === index} 
										mountOnEnter 
										unmountOnExit
										timeout={{ enter: 300, exit: 300 }}
										style={{ position: 'absolute', width: '100%', height: '100%' }}
									>
										<div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%', transition: 'opacity 0.6s ease-in-out' }}>
											<img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', borderRadius: '4px', transition: 'opacity 0.6s ease-in-out' }} loading='lazy' />
										</div>
									</Slide>
								))
							}
						</Box>
						<IconButton onClick={handleNext} sx={styles.carouselButton} aria-label="next" size="large">
							<ArrowForwardIcon />
						</IconButton>
					</Box>
					<Typography variant="body1" style={{ textAlign: 'center', color: theme.colors.primary, fontFamily: 'Cormorant Garamond, serif', fontSize: theme.typography.fontSize.large, marginTop: theme.spacing.sm }}>
						{pages[carouselIndex].name}
					</Typography>
				</Container>
			</Box>
		</Box>
	);
}

export default TheBlackGrimoire;

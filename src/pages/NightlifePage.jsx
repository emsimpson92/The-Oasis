import NightlifeImg from '../assets/Nightlife.webp';
import Page from '../components/Page';
import { Nightlife } from '../data';

function NightlifePage() {
    return (
        <Page pageTitle={'Nightlife'} 
            subtitle={'Vibrant Entertainment'}
            heroImage={<img src={NightlifeImg} alt={'Nightlife Experience'} loading='lazy' />}
            cardSectionTitle={'Our Venues'}
            items={Nightlife}
            description={'Immerse yourself in our world-class nightlife. From elegant lounges to energetic clubs, we offer unforgettable evenings with premium drinks and exceptional entertainment.'} />
    );
}

export default NightlifePage;
import SpaImg from '../assets/Springs.webp';
import Page from '../components/Page';
import { SpaWellness } from '../data';

function SpaWellnessPage() {
    return (
        <Page pageTitle={'Spa & Wellness'} 
            subtitle={'Wellness Sanctuary'} 
            heroImage={<img src={SpaImg} alt="Spa & Wellness Experience" loading='lazy' />}
            description={'Escape to our serene spa and wellness retreat. Discover treatments and therapies designed to harmonize your body, mind, and spirit.'}
            cardSectionTitle={'Our Services'}
            items={SpaWellness} />
    );
}

export default SpaWellnessPage;
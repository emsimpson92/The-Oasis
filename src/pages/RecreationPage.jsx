import RecreationImg from '../assets/Recreation.webp?url';
import Page from '../components/Page';
import { Recreation } from '../data';

function RecreationPage() {

    return (
        <Page pageTitle={'Recreation'} 
            subtitle={'Outdoor Adventures Await'}
            heroImage={<img src={RecreationImg} alt="Recreation Experience" loading='lazy' />}
            description={'Discover the natural beauty and thrilling activities our paradise has to offer. From serene hikes to adrenaline-pumping sports, there\'s something for everyone.'}
            cardSectionTitle={'Our Activities'}
            items={Recreation} />
    );
}

export default RecreationPage;
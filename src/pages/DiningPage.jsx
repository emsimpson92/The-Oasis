import DiningImg from '../assets/Dining.webp?url';
import Page from '../components/Page';
import { Dining } from '../data';

function DiningPage() {
    return (
        <Page pageTitle={'Dining'}
            subtitle={'Culinary Excellence'}
            heroImage={<img src={DiningImg} alt="Dining Experience" loading='lazy' />}
            cardSectionTitle={'Restaurants'}
            items={Dining}
            description={'Indulge in a variety of exquisite dining options. Savor gourmet dishes made from the freshest ingredients, with flavors that will delight your palate.'} />
    );
}

export default DiningPage;
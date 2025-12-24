import AccommodationsImg from '../assets/Accommodations.webp?url';
import Page from '../components/Page';
import { Accommodations } from '../data';

function AccommodationsPage() {
    return (
        <Page pageTitle={'Accommodations'} 
            heroImage={<img src={AccommodationsImg} alt="Accommodations" loading='lazy' />}
            subtitle={'Your Sanctuary Awaits'} 
            description={'Discover our world-class accommodations designed for comfort and luxury. Each room offers breathtaking views and exceptional amenities for your perfect stay.'} 
            cardSectionTitle={'Room Types'} 
            items={Accommodations} />        
    );
}

export default AccommodationsPage;
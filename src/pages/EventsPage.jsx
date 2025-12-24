import EventsImg from '../assets/Events.webp?url';
import Page from '../components/Page';
import { Venues } from '../data';

function EventsPage() {
    return (
        <Page pageTitle={'Events'}
            subtitle={'Unforgettable Celebrations'}
            heroImage={<img src={EventsImg} alt="Events Experience" loading='lazy' />}
            description={'Host your special occasions in our stunning venues, designed to make every event memorable.'}
            cardSectionTitle={'Event Venues'}
            items={Venues}/>
    );
}

export default EventsPage;
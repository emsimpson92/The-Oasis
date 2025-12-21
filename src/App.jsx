import { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './hooks/useTheme';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
const DiningPage = lazy(() => import('./pages/DiningPage'));
const SpaWellnessPage = lazy(() => import('./pages/SpaWellnessPage'));
const AccommodationsPage = lazy(() => import('./pages/AccommodationsPage'));
const NightlifePage = lazy(() => import('./pages/NightlifePage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const RecreationPage = lazy(() => import('./pages/RecreationPage'));
const MapPage = lazy(() => import('./pages/MapPage'));
const UpcomingEvents = lazy(() => import('./pages/UpcomingEvents'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const EventRequest = lazy(() => import('./pages/EventRequest'));

function App() {
  const theme = useTheme();
  let background = (
    <Fragment>
      <Header />
      <div style={{ backgroundColor: theme.colors.background, minHeight: '100vh' }}></div>
    </Fragment>
  );

  return (
    <ThemeProvider>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dining" element={<Suspense fallback={background}><DiningPage /></Suspense>} />
            <Route path="/wellness" element={<Suspense fallback={background}><SpaWellnessPage /></Suspense>} />
            <Route path="/accommodations" element={<Suspense fallback={background}><AccommodationsPage /></Suspense>} />
            <Route path="/nightlife" element={<Suspense fallback={background}><NightlifePage /></Suspense>} />
            <Route path="/events" element={<Suspense fallback={background}><EventsPage /></Suspense>} />
            <Route path="/recreation" element={<Suspense fallback={background}><RecreationPage /></Suspense>} />
            <Route path="/map" element={<Suspense fallback={background}><MapPage /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={background}><AboutPage /></Suspense>} />
            <Route path="/events/upcoming" element={<Suspense fallback={background}><UpcomingEvents /></Suspense>} />
            <Route path="/events/request" element={<Suspense fallback={background}><EventRequest /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={background}><ContactPage /></Suspense>} />
            <Route path="*" element={<Suspense fallback={background}><NotFound /></Suspense>} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </ThemeProvider>
  )
}

export default App;
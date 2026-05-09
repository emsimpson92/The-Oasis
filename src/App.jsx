import { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import { useTheme } from './hooks/useTheme';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
const MapPage = lazy(() => import('./pages/MapPage'));
const RazorwindPines = lazy(() => import('./pages/RazorwindPines'));
const ArcanistBallroom = lazy(() => import('./pages/ArcanistBallroom'));
const CrookedKey = lazy(() => import('./pages/CrookedKey'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const EventRequest = lazy(() => import('./pages/EventRequest'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));

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
            <Route path="/map" element={<Suspense fallback={background}><MapPage /></Suspense>} />
            <Route path="/crookedkey" element={<Suspense fallback={background}><CrookedKey /></Suspense>} />
            <Route path="/arcanistballroom" element={<Suspense fallback={background}><ArcanistBallroom /></Suspense>} />
            <Route path="/razorwindpines" element={<Suspense fallback={background}><RazorwindPines /></Suspense>} />
            <Route path="/slurringmurloc" element={<Suspense fallback={background}><ComingSoon /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={background}><AboutPage /></Suspense>} />
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
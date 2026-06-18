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
const KarumaSedei = lazy(() => import('./pages/KarumaSedei'));
const TheBlackGrimoire = lazy(() => import('./pages/Chronicles/TheBlackGrimoire'));
const TheBuriedGod = lazy(() => import('./pages/Chronicles/TheBuriedGod'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));

function AppContent() {
  const theme = useTheme();
  const background = (
    <Fragment>
      <Header />
      <div style={{ backgroundColor: theme.colors.background, minHeight: '100vh' }}></div>
    </Fragment>
  );

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<Suspense fallback={background}><MapPage /></Suspense>} />
        <Route path="/crookedkey" element={<Suspense fallback={background}><CrookedKey /></Suspense>} />
        <Route path="/arcanistballroom" element={<Suspense fallback={background}><ArcanistBallroom /></Suspense>} />
        <Route path="/razorwindpines" element={<Suspense fallback={background}><RazorwindPines /></Suspense>} />
        <Route path="/karumasedei" element={<Suspense fallback={background}><KarumaSedei /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={background}><AboutPage /></Suspense>} />
        <Route path="/chronicles/theblackgrimoire" element={<Suspense fallback={background}><TheBlackGrimoire /></Suspense>} />
        <Route path="/chronicles/theburiedgod" element={<Suspense fallback={background}><TheBuriedGod /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={background}><ContactPage /></Suspense>} />
        <Route path="*" element={<Suspense fallback={background}><NotFound /></Suspense>} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
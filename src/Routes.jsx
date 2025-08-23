import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import CelebrationCountdown from './pages/celebration-countdown';
import CinematicHomepage from './pages/cinematic-homepage';
import WeddingDetailsCentral from './pages/wedding-details-central';
import GuestExperienceHub from './pages/guest-experience-hub';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<CinematicHomepage />} />
        <Route path="/celebration-countdown" element={<CelebrationCountdown />} />
        <Route path="/cinematic-homepage" element={<CinematicHomepage />} />
        <Route path="/wedding-details-central" element={<WeddingDetailsCentral />} />
        <Route path="/guest-experience-hub" element={<GuestExperienceHub />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;

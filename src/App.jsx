import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SkeletonPage from './components/SkeletonPage';

// Lazy loading the page routes
const HomePage = React.lazy(() => import('./components/HomePage'));
const NotFoundPage = React.lazy(() => import('./components/NotFoundPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<SkeletonPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;


import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { BackToTopButton } from './components/BackToTopButton.tsx';
import { MobileActionBar } from './components/MobileActionBar.tsx';
import { HomePage } from './pages/HomePage.tsx';

function App() {
  const [isCateringModalOpen, setIsCateringModalOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage isCateringModalOpen={isCateringModalOpen} setIsCateringModalOpen={setIsCateringModalOpen} />} />
          {/* Add other routes here in the future, e.g. <Route path="/gallery" element={<GalleryPage />} /> */}
        </Routes>
      </main>
      <Footer />
      <BackToTopButton isCateringModalOpen={isCateringModalOpen} />
      <MobileActionBar setIsCateringModalOpen={setIsCateringModalOpen} />
    </>
  );
}

export default App;

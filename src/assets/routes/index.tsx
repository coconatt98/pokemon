import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "../components/footer.tsx";
import Header from "../components/header.tsx";
import HomePage from "../features/home/index.tsx";
import PokemonDetailPage from "../features/pokemon-detail.tsx";
import React from "react";
import { ThemeProvider } from "../components/theme-context.tsx";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-custom-bg bg-cover min-h-screen flex flex-col dark:bg-gray-900">
        <Router>
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;

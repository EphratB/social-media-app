import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import PreferencesPage from "./components/pages/PreferencesPage";
import PostListPage from "./components/pages/HomePage/PostListPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/preferences" element={<PreferencesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

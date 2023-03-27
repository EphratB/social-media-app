import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PreferencesPage from "./pages/PreferencesPage";
import PostListPage from "./pages/PostListPage";
import PostItemPage from "./pages/PostItemPage";
import FormPostPage from "./pages/FormPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import AboutUsIntroductionPage from "./pages/AboutUsPage/introduction";
import AboutUsMissionPage from "./pages/AboutUsPage/mission";
import AboutUsPrivacyPage from "./pages/AboutUsPage/privacy";
import PageNotFound from "./pages/PageNotFound";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { setPosts } from "./redux/postSlice";
import { useDispatch } from "react-redux";
// import { load } from "./database/read";
// import { save, update } from "./database/write";
// import { load as databaseLoad, save, update } from "./database/index";
import * as database from "./database"; // this is importing every method (if you wnat to work with just load its better to import load)

function App() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true); // is used for conditional loading
  useEffect(() => {
    // load the database

    // IIFE immediately Invoked fucntion expression

    (async () => {
      const data = await database.load();
      dispatch(setPosts(data));
    })();
  }, []);
  return (
    <>
      <Header />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/posts" element={<PostListPage />} />
          <Route path="/posts/add" element={<FormPostPage />} />
          <Route path="/posts/:id" element={<PostItemPage />} />

          <Route path="/preferences" element={<PreferencesPage />} />

          <Route path="/about-us" element={<AboutUsPage />}>
            <Route path="" element={<AboutUsIntroductionPage />} />
            <Route path="mission" element={<AboutUsMissionPage />} />
            <Route path="privacy" element={<AboutUsPrivacyPage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}

      <Footer />
    </>
  );
}

export default App;

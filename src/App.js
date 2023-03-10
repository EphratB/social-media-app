import Header from "./components/Header";
import Footer from "./components/Footer";
import PostList from "./components/Posts/postList";
import Form from "./components/Form";
import Settings from "./components/Settings";

function App() {
  return (
    <>
      <Header />
      <PostList />
      <Form />
      <Settings />
      <Footer />
    </>
  );
}

export default App;

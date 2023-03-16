import "./styles.scss";

export default function MainMenu() {
  return (
    <nav className="main">
      <a href="/">Home</a>
      <a href="/posts">Posts</a>
      <a href="/preferences">Preference</a>
      <a href="/about-us">About Us</a>
    </nav>
  );
}

import PageContainer from "../../components/PageContainer";
import { NavLink, Outlet } from "react-router-dom";
import "./styles.scss";
export default function AboutUsPage() {
  return (
    <PageContainer title="About Us" className="about-us-page">
      <article>
        <Outlet />
      </article>
      <aside className="side-menu">
        <NavLink to="/about-us" end>
          About Us
        </NavLink>
        <NavLink to="/about-us/mission">Our Mission</NavLink>
        <NavLink to="/about-us/privacy">Our Policy</NavLink>
      </aside>
    </PageContainer>
  );
}

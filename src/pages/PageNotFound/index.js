import PageContainer from "../../components/PageContainer";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <PageContainer title="Page not found">
      <div>
        We're sorry, but the page you are looking for could not be found.
      </div>
      <ul>
        <li>
          <Link to="/">click here</Link> to go to the initial page
        </li>
      </ul>
    </PageContainer>
  );
}

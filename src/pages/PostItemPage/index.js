import PageContainer from "../../components/PageContainer";
import PageNotFound from "../PageNotFound";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.scss";

export default function PostItemPage() {
  const params = useParams();
  const post = useSelector((state) =>
    state.post.posts.find((post) => post.id === params.id)
  );
  console.log(post);
  if (!post) {
    return <PageNotFound />;
  }

  return (
    <PageContainer title={post.post} className="post-item-page">
      <div className="picture">
        <img src={post.photo} alt={post.post} />
      </div>
      <div className="description">{post.description}</div>
      <Link to="/posts" className="back-link">
        Back
      </Link>
    </PageContainer>
  );
}

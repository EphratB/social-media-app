import PageContainer from "../../components/PageContainer";
import Loading from "../../components/Loading";
import PageNotFound from "../PageNotFound";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import * as database from "./../../database";
import "./styles.scss";

export default function PostItemPage() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const loadedPost = await database.loadById(params.id);
      setPost(loadedPost);
      setIsLoading(false);
    })();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (!post) {
    return <PageNotFound />;
  }
  // This is we used useSelect the post we get from the computer memory not from the database
  // const post = useSelector((state) =>
  //   state.post.posts.find((post) => post.id === params.id)
  // );
  // console.log(post);

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

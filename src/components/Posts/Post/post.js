import { getCategory, getStatus } from "../../Includes/variables";
import "./styles.scss";
import { BiLike, BiDislike } from "react-icons/bi";

// This is a child component
function Post({
  id,
  post,
  description,
  category,
  promote,
  status,
  photo,
  countLikes,
  countDislikes,
  onPostLike,
  onPostDislike,
}) {
  const handleLikes = () => {
    onPostLike(id);
    console.log(id);
  };
  const handleDislike = () => {
    onPostDislike(id);
  };
  const promoteStyle = promote ? "promote-yes" : "promote-no";

  return (
    <div className="post-component">
      <h3>{post}</h3>
      <div className="description">
        <img src="images/white-mountain.jpg" alt={post} />
        <span>{description}</span>
      </div>
      <div className="info">
        Category:
        <strong>{getCategory(category)}</strong>
      </div>
      <div>
        Status:
        <strong>{getStatus(status)}</strong>
      </div>
      <div className={promoteStyle}>
        Promote:
        <strong>{promote ? "Yes" : "No"}</strong>
      </div>
      <div className="rate">
        <button title="I like this" className="like" onClick={handleLikes}>
          <BiLike />
          {countLikes}
        </button>

        <button
          title="I dislike this"
          className="dislike"
          onClick={handleDislike}
        >
          <BiDislike /> {countDislikes}
        </button>
      </div>
    </div>
  );
}
export default Post;

import { getCategory, getStatus } from "../../Includes/variables";
import "./styles.css";

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
    <div className="childpost">
      <h2>{post}</h2>
      <div>
        <img src={photo} alt={post} width={100} />
      </div>
      <h3>{description}</h3>
      <h4>{getCategory(category)}</h4>
      <h4 className={promoteStyle}>{promote ? "Yes" : "No"}</h4>
      <h4>{getStatus(status)}</h4>
      <div>Likes: {countLikes}</div>
      <div>Dislikes: {countDislikes}</div>
      <button onClick={handleLikes}>Like</button> &nbsp;
      <button onClick={handleDislike}>Dislikes</button>
    </div>
  );
}
export default Post;

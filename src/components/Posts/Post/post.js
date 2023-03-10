import { getCategory, getStatus } from "../../Includes/variables";
import "./styles.scss";
import { BiLike, BiDislike } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { dislikePost, likePost } from "../../../redux/postSlice";

// This is a child component
function Post({
  id,
  description,
  category,
  promote,
  status,
  photo,
  countLikes,
  countDislikes,
}) {
  const post = []; // empty array: space holder TODO: delte later
  const { allowLikes, allowDislikes } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleLikes = () => {
    // onPostLike(id);
    dispatch(likePost(id));
  };
  const handleDislike = () => {
    //onPostDislike(id);
    dispatch(dislikePost(id));
  };
  const promoteStyle = promote ? "promote-yes" : "promote-no";

  let rateClassName = "rate";
  if (!allowLikes || !allowDislikes) {
    rateClassName += " rate-single-button";
  }

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
      {/* Conditional statement for not to have an extra blank space 
      if both allow likes and allwodislikes is not checked the div will still
      be there, this is basically a conditional styling */}

      {(allowLikes || allowDislikes) && (
        <div className={rateClassName}>
          {allowLikes && (
            <button title="I like this" className="like" onClick={handleLikes}>
              <BiLike />
              {countLikes}
            </button>
          )}
          {allowDislikes && (
            <button
              title="I dislike this"
              className="dislike"
              onClick={handleDislike}
            >
              <BiDislike /> {countDislikes}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
export default Post;

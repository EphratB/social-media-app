import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import * as database from "./../../../database";

import { getCategory, getStatus } from "../../Includes/variables";
import { BiLike, BiDislike } from "react-icons/bi";
import { dislikePost, likePost } from "../../../redux/postSlice";
import { Link } from "react-router-dom";

// This is a child component
function Post({
  id,
  post,
  description,
  category,
  promote,
  status,
  photo,
  likes,
  dislikes,
}) {
  //const post = []; // empty array: space holder TODO: delte later
  const { allowLikes, allowDislikes } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleLikes = async (event) => {
    event.preventDefault();
    dispatch(likePost(id));
    // onPostLike(id);
    const data = { likes: likes + 1 };
    const updated = await database.update(id, data);
    console.log("updated", updated);

    if (!updated) {
      // TODO: handle this with state and give feedback to tthe user
      // TODO: if it case if it fails take the like back (less than one) likes: likes -1)
      alert("Failed to update likes");
    }
  };
  const handleDislike = async (event) => {
    event.preventDefault();
    //onPostDislike(id);
    dispatch(dislikePost(id));

    const data = { dislikes: dislikes + 1 };
    const updated = await database.update(id, data);
    console.log("updated", updated);

    if (!updated) {
      // TODO: handle this with state and give feedback to tthe user
      // TODO: if it case if it fails take the like back (less than one) likes: likes -1)
      alert("Failed to update likes");
    }
  };
  const promoteStyle = promote ? "promote-yes" : "promote-no";

  let rateClassName = "rate";
  if (!allowLikes || !allowDislikes) {
    rateClassName += " rate-single-button";
  }

  return (
    <Link to={"/posts/" + id} className="post-component">
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
              {likes}
            </button>
          )}
          {allowDislikes && (
            <button
              title="I dislike this"
              className="dislike"
              onClick={handleDislike}
            >
              <BiDislike /> {dislikes}
            </button>
          )}
        </div>
      )}
    </Link>
  );
}
export default Post;

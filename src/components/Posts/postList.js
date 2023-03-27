import Post from "./Post/post";
import "../Posts/styles.scss";
// import uuid from "react-uuid";
import { useSelector } from "react-redux";

function PostList({ showOnlyPromoted }) {
  // we changed post from const to let because we want to use it in other components, and since we used Redux, we can use let instead of const
  // if it were a state we can not change the state of the component
  let posts = useSelector((state) => state.post.posts);

  const { allowLikes, allowDislikes } = useSelector((state) => state.settings);

  // filtering out posts that are not promoted
  if (showOnlyPromoted) {
    posts = posts.filter((post) => post.promote);
  }

  // now that we are working with database
  // if we dont have any posts, we should communicate with the user that thier is no post
  if (posts.length === 0) {
    return (
      <div className="no-post">
        <h3>No post yet</h3>
      </div>
    );
  }
  // getting the sum of likes and dislikes

  let totalLikes = 0;
  let totalDislikes = 0;

  posts.forEach((posts) => {
    totalLikes += posts.likes;
    totalDislikes += posts.dislikes;
  });

  //fucntion referencing, and passing function referencing with props

  return (
    <>
      <div className="post-list full-width">
        {posts.map((post, index) => (
          <Post
            key={index}
            {...post}
            countLikes={post.likes}
            countDislikes={post.dislikes}
          />
        ))}

        {(allowLikes || allowDislikes) && !showOnlyPromoted && (
          <h3 className="total-rate">
            {allowLikes && <>Total likes: {totalLikes} </>}
            {allowLikes && allowDislikes && <> | </>}

            {allowDislikes && <>Total Dislikes: {totalDislikes} </>}
          </h3>
        )}
      </div>
    </>
  );
}
export default PostList;

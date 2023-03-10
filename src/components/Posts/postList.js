import Post from "./Post/post";
import "../Posts/styles.scss";
// import uuid from "react-uuid";
import { useSelector } from "react-redux";

function PostList() {
  const posts = useSelector((state) => state.post.posts);

  const { allowLikes, allowDislikes } = useSelector((state) => state.settings);
  //const posts = []; // empty array: space holder TODO: delte later

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
      <main className="post-list">
        {posts.map((post, index) => (
          <Post
            key={index}
            {...post}
            countLikes={post.likes}
            countDislikes={post.dislikes}
          />
        ))}

        {(allowLikes || allowDislikes) && (
          <h3 className="total-rate">
            {allowLikes && <>Total likes: {totalLikes} </>}
            {allowLikes && allowDislikes && <> | </>}

            {allowDislikes && <>Total Dislikes: {totalDislikes} </>}
          </h3>
        )}
      </main>
    </>
  );
}
export default PostList;

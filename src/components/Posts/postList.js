import Post from "./Post/post";
// import uuid from "react-uuid";

function PostList({ posts, onPostLike, onPostDislike }) {
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
      <main>
        <h2>Lists of Posts</h2>
        {posts.map((post, index) => (
          <Post
            key={index}
            {...post}
            countLikes={post.likes}
            countDislikes={post.dislikes}
            onPostLike={onPostLike}
            onPostDislike={onPostDislike}
          />
        ))}

        <h3>
          Total likes: {totalLikes} | Total Dislikes: {totalDislikes}
        </h3>
      </main>
    </>
  );
}
export default PostList;

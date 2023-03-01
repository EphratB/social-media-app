// import { postStatus, postCategories } from "./components/Includes/variables";
// import CounterFunction from "./components/CounterFunction";
// import CounterClass from "./components/CounterClass/CounterClass";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostList from "./components/Posts/postList";
import Form from "./components/Form";

import { useState } from "react";
import uuid from "react-uuid";

function App() {
  //PostList is the parent passing the props to the child post

  //after moving the state from postList to app.js we will be facing a lot of error
  // undefined variables not being used in app.js examples are
  //useState and uuid ==> we imported it from react
  //and posts and setPosts will be undefined as well, we can lift the error by
  //saving it as a variable in <Post /> passig it as a property <Post posts={posts}/>
  // for postList to acess whatever in the post we have render it through props
  //in the postList.js function PostList({ posts })

  const intialPost = [
    {
      id: uuid(),
      post: "The white Mountain",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      category: "ent",
      promote: "false",
      status: "p",
      photo: "null",
      likes: 0,
      dislikes: 1,
    },

    {
      id: uuid(),
      post: "Road to Somewhere",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      category: "edu",
      promote: "true",
      status: "a",
      photo: "null",
      likes: 10,
      dislikes: 1,
    },

    {
      id: uuid(),
      post: "Follow the flow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      category: "gam",
      promote: "false",
      status: "p",
      photo: "null",
      likes: 36,
      dislikes: 12,
    },
  ];
  const [posts, setPosts] = useState(intialPost);
  const handleAddPost = (
    post,
    description,
    category,
    promote,
    status,
    photo
  ) => {
    const updatedPosts = [...posts];
    updatedPosts.push({
      id: uuid(),
      post,
      description,
      category,
      promote,
      status,
      photo,
      likes: 0,
      dislikes: 0,
    });
    console.log("updated:", updatedPosts);
    setPosts(updatedPosts);
  };

  // update the number of likes
  const handlePostLike = (id) => {
    console.log("called" + id);
    const updatedPosts = [...posts];
    console.log(updatedPosts);
    updatedPosts.forEach((posts) => {
      if (posts.id === id) {
        posts.likes++;
      }
    });
    setPosts(updatedPosts);
  };

  // updating the number of dislikes
  const handlePostDislike = (id) => {
    const updatedPosts = [...posts];
    updatedPosts.forEach((posts) => {
      if (posts.id === id) {
        posts.dislikes++;
      }
    });
    setPosts(updatedPosts);
  };
  return (
    <>
      <Header />
      <PostList
        posts={posts}
        onPostLike={handlePostLike}
        onPostDislike={handlePostDislike}
      />
      <Form onAddPost={handleAddPost} />
      <Footer />

      {/* <CounterClass name="ClassComponentDemo" age={1} /> */}
      {/* <CounterFunction />
      <h2>
        {postStatus[1] + " "} {postStatus[2] + " "}
      </h2>
      <h2>{postCategories}</h2> */}
    </>
  );
}

export default App;

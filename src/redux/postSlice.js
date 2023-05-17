import { createSlice } from "@reduxjs/toolkit";
//import uuid from "react-uuid";

// const intialPost = [
//   {
//     id: uuid(),
//     post: "The white Mountain",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
//     category: "ent",
//     promote: true,
//     status: "p",
//     photo: "null",
//     likes: 0,
//     dislikes: 1,
//   },
//   {
//     id: uuid(),
//     post: "Road to Somewhere",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
//     category: "edu",
//     promote: true,
//     status: "a",
//     photo: "null",
//     likes: 10,
//     dislikes: 1,
//   },

//   {
//     id: uuid(),
//     post: "We said what we said",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
//     category: "edu",
//     promote: false,
//     status: "a",
//     photo: "null",
//     likes: 10,
//     dislikes: 1,
//   },

//   {
//     id: uuid(),
//     post: "Follow the flow",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
//     category: "gam",
//     promote: true,
//     status: "p",
//     photo: "null",
//     likes: 36,
//     dislikes: 12,
//   },
// ];

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    likePost: (state, action) => {
      const id = action.payload;
      state.posts.forEach((post) => {
        if (post.id === id) {
          post.likes++;
        }
      });
    },

    dislikePost: (state, action) => {
      const id = action.payload;
      state.posts.forEach((post) => {
        if (post.id === id) {
          post.dislikes++;
        }
      });
    },

    addPost: (state, action) => {
      const newPost = {
        //id: uuid(),
        id: action.payload.id,
        post: action.payload.post,
        description: action.payload.description,
        category: action.payload.category,
        promote: action.payload.promote,
        status: action.payload.status,
        photo: action.payload.photo,
        likes: 0,
        dislikes: 0,
      };
      state.posts.push(newPost);
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    removePost: (state, action) => {
      const updatedPosts = state.posts.filter(
        (post) => post.id !== action.payload
      );
      state.posts = updatedPosts;
    },
  },
});

export const { likePost, dislikePost, addPost, setPosts, removePost } =
  postSlice.actions;
export default postSlice.reducer;

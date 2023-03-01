import { useState } from "react";
import { categories, statuses } from "../Includes/variables";

function Form({ onAddPost }) {
  const [post, setPost] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [promote, setPromote] = useState(false);
  const [status, setStatus] = useState("");
  const [errormsg, setErrormsg] = useState([]);
  const [photo, setPhoto] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Form handler with validation

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const validateData = [];

    // Hide success message
    setShowSuccess(false);

    if (post.length < 5) {
      validateData.push("Post title has to be less that 5 characters ");
    }
    if (description === "") {
      validateData.push("Please, enter descrition");
    }
    if (category === "") {
      validateData.push("Please, Select a category");
    }
    if (status === "") {
      validateData.push("Please, select a status");
    }
    setErrormsg(validateData);
    if (validateData.length === 0) {
      // Display success message
      setShowSuccess(true);

      // Clear the form

      setPost("");
      setDescription("");
      setCategory("");
      setPromote(false);
      setStatus("");
      setPhoto("");
      // valid data
      onAddPost(post, description, category, promote, status, photo);

      console.log(post);
      console.log(description);
      console.log(category);
      console.log(promote);
      console.log(status);
      console.log("Everything is logged, form is sent!");
      // setErrormsg([]);
    }
  };

  // // list of categories for select

  // const categories = [
  //   { id: "edu", text: "Education" },
  //   { id: "ent", text: "Entertainment" },
  //   { id: "gam", text: "Gaming" },
  //   { id: "nws", text: "News" },
  //   { id: "oth", text: "Others" },
  // ];

  // list of statuses for radio button
  // const statuses = [
  //   { id: "d", text: "Draft" },
  //   { id: "p", text: "Published" },
  //   { id: "a", text: "Archived" },
  // ];

  // handling picture

  const handlePicture = (event) => {
    const file = [...event.target.files];
    file.forEach((file) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (loadEvent) => {
        setPhoto(loadEvent.target.result);
      };
      console.log("photo: ", photo);
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {showSuccess && (
          <div>
            <p>
              <strong>Form sucessfully submitted!!</strong>
            </p>
          </div>
        )}

        {/* output for error messages */}
        {errormsg.length > 0 && (
          <div>
            Invalid data:
            <ul>
              {errormsg.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* New Post with text input feild */}

        <div>
          <label>
            New Post:
            <input
              type="text"
              onChange={(event) => setPost(event.target.value)}
              value={post}
              maxLength={50}
              placeholder="Enter your post here"
              // required={true}
            />
          </label>
        </div>

        {/* Description with textarea feild */}

        <div>
          <label>
            Description:
            <textarea
              value={description}
              maxLength={500}
              placeholder="Enter your description"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </label>
        </div>

        {/* Category with select field */}

        <div>
          <label>
            Category:
            <select
              vlaue={category}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <option value=" ">- Select -</option>
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.text}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Promote with checkbox field */}

        <div>
          <label>
            Promote
            <input
              type="checkbox"
              checked={promote}
              onChange={(event) => {
                setPromote(event.target.checked);
              }}
            />
          </label>
        </div>

        {/* Status with radio field */}

        <div>
          Status
          {statuses.map((item) => (
            <label key={item.id}>
              <input
                type="radio"
                value={item.id}
                checked={status === item.id}
                onChange={(event) => {
                  setStatus(event.target.value);
                }}
              />
              {item.text}
            </label>
          ))}
        </div>
        {/* picture field */}

        <fieldset>
          <legend>Picture:</legend>
          <label>Select an Image: </label>
          <input type="file" multiple onChange={handlePicture} />
        </fieldset>
        {/* Conditional output of the picture */}
        {photo !== "" && (
          <img src={photo} alt="preview" width={300} height={250} />
        )}

        <button>Send</button>
      </form>
    </>
  );
}
export default Form;

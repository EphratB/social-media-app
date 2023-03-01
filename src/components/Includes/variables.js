const appName = "Social Media App";
const postStatus = ["Draft", "Publish", "Archve"];

/**
 *  List of available categores. This has been shared from a variable.js source for
 *  our component
 */
const categories = [
  { id: "edu", text: "Education" },
  { id: "ent", text: "Entertainment" },
  { id: "gam", text: "Gaming" },
  { id: "nws", text: "News" },
  { id: "oth", text: "Others" },
];

/**
 * Get a category based on its id
 * @param {string} id
 *  The id of the category to retrive.
 * @returns
 *  The category text
 */

const getCategory = (id) => {
  const item = categories.find((category) => category.id === id);
  return item?.text || "None";
};

const statuses = [
  { id: "d", text: "Draft" },
  { id: "p", text: "Published" },
  { id: "a", text: "Archived" },
];

export const getStatus = (id) => {
  const item = statuses.find((status) => status.id === id);
  return item?.text || "None Set";
};

export default appName;
export { postStatus };
export { categories };
export { getCategory };
export { statuses };

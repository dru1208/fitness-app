const generateUserURL = (id, path) => {
  return `/users/${id}/${path}`
}

const generateBlogURL = (id) => {
  return `http://localhost:3000/api/blogs/${id}`
}

const generateArticleURL = (id) => {
  return `http://localhost:3000/api/articles/${id}`
}

const generateEventURL = (id) => {
  return `http://localhost:3000/api/events/${id}`
}

const generateFullUserURL = (id, path) => {
  return "http://localhost:3002" + generateUserURL(id, path)
}

const generateFitnessGoalDeleteURL = (id) => {
  return `http://localhost:3000/api/fitness_goals/${id}`
}

const generateCurrentDateTime = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (month < 10) {month = "0" + month};
  if (day < 10) {day = "0" + day};
  const today = year + "-" + month + "-" + day + "T00:00";
  return today;
}

export {
  generateUserURL,
  generateEventURL,
  generateArticleURL,
  generateBlogURL,
  generateFullUserURL,
  generateCurrentDateTime,
  generateFitnessGoalDeleteURL
}


const generateUserURL = (id, path) => {
  return `/users/${id}/${path}`
}

const generateEventURL = (id) => {
  return `http://localhost:3000/api/events/${id}`
}

const generateFullUserURL = (id, path) => {
  return "http://localhost:3002" + generateUserURL(id, path)
}

export {
  generateUserURL,
  generateEventURL,
  generateFullUserURL
}


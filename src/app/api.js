export const API_URL = "http://localhost:3000"

export const FetchConfig = ({ method, data, token }) => {
  let config = {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  }
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}

import { useHistory } from "react-router-dom";

/**
 * Returns the user Object
 * @returns { id, email, userToken, createdAt, updatedAt } user Object.
 */
export function useCurrentUser() {
  const history = useHistory();
  const userData = JSON.parse(localStorage.getItem("userData"))
  if (userData === null) {
    history.push("/")
  } else {
    const { id: userId, email, created_at: createdAt, updated_at: updatedAt, jti: userToken } = userData
    return { userId, email, userToken, createdAt, updatedAt }
  }
}
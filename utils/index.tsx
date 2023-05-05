// set token in localStorage
export function setToken(token: string) {
  localStorage.setItem("token", token);
}

// get token from localStorage
export function Token() {
  if (typeof window !== "undefined") {
    let token = localStorage.getItem("token");
    if (token === "undefined") {
      return undefined;
    }

    return token;
  }
}

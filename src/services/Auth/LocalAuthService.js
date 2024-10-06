class LocalAuthService {
  login({ username, password }) {
    debugger;
    if (username === "admin@admin.com" && password === "admin") {
      const user = {
        username: "admin@admin.com",
        role: "admin",
        token: "admin",
      };
      localStorage.setItem("user", JSON.stringify(user));
      return Promise.resolve(user);
    }

    return Promise.reject("Invalid username or password");
  }
  logut = () => {
    localStorage.removeItem("user");
  };
  getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  isAuthenticated = () => {
    return !!localStorage.getItem("user");
  };
}

export default new LocalAuthService();

class LocalAuthService {
  login = async (username, password) => {
    if (username === "admin" && password === "admin") {
      const user = {
        username: "admin@gamil.com",
        role: "admin",
        token: "admin",
      };
      localStorage.setItem("user", JSON.stringify(user));
      return Promise.resolve(user);
    }

    return Promise.reject("Invalid username or password");
  };
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

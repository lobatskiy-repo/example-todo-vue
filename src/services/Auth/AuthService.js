class AuthService {
  constructor(strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  login(username, password) {
    this.strategy.login(username, password);
  }
  logut() {
    this.strategy.logout();
  }
  getUser() {
    return this.strategy.getUser();
  }
  isAuthenticated() {
    return this.strategy.isAuthenticated();
  }
}

export default AuthService;

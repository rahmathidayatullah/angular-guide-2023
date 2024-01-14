export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    console.log('isAuthenticated', this.loggedIn);
    return promise;
  }

  login() {
    this.loggedIn = true;
    console.log('login', this.loggedIn);
  }

  logout() {
    this.loggedIn = false;
    console.log('logout', this.loggedIn);
  }
}

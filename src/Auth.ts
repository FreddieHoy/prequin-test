export class Auth {
  static setAccessToken(token: string) {
    localStorage.setItem("accessToken", token);
  }

  static setRefreshToken(token: string) {
    localStorage.setItem("refreshToken", token);
  }

  static getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  static getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }
}

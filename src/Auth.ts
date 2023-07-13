import jwt from "jsonwebtoken";

export class Auth {
  static setAccessToken(token: string) {
    localStorage.setItem("accessToken", token);
  }

  static removeAccessToken() {
    localStorage.removeItem("accessToken");
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

  static getPayload() {
    const accessToken = this.getAccessToken();
    return accessToken ? jwt.decode(accessToken) : undefined;
  }

  static isAuthenticated(): boolean {
    const payload = this.getPayload();
    if (!payload) return false;

    const now = Math.round(Date.now() / 1000);
    if (!!payload && typeof payload !== "string") {
      return !!payload.exp && now < payload.exp;
    }

    return false;
  }
}

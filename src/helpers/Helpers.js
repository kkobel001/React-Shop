/* eslint-disable */

export default class Helpers {
  static generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  static validateEmail(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  }

  static showAlert(message) {
    alert(message);
  }

  //   static export const authenticateRequest = (req) => {
  //   const token = localStorage.getItem('__be_token__') || null;
  //   const userToken = req.headers.get('Authorization')?.replace('Bearer ', '');

  //   return token === userToken;
  // };
}

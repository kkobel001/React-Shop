/* eslint-disable */

export default class Helpers {
  static generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  static generateNumber() {
    return Math.floor(Math.random() * 99999999 + 1);
  }

  static showAlert(message) {
    alert(message);
  }
}

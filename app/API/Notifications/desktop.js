export default class Notifications {
  static push(title) {
    const notifier = require('electron-notifications');
    notifier.notify(title);
  }
}

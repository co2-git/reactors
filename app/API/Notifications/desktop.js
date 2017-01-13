export default class Notifications {
  static push(title) {
    const electronNotifications = 'electron-notifications';
    const notifier = require(electronNotifications);
    notifier.notify(title);
  }
}

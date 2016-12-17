import notifier from 'electron-notifications';

export default class Notifications {
  static push(title) {
    notifier.send(title);
  }
}

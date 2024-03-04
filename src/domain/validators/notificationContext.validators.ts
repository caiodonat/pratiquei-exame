export default class NotificationContext {

	public _notifications: string[] = [];

	// public hasNotifications: boolean = this._notifications.length > 0;

	// public async addNotification(newErrors: Promise<string[]>) {
	// 	console.debug(await newErrors);

	// 	this._notifications.concat(await newErrors);
	// }

	public addNotification(newErrors: string[]) {
		newErrors.map(e => this._notifications.push(e));
	}

	public hasNotifications(): boolean {
		return this._notifications.length > 0;
	}
}
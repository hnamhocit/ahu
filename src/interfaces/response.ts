export interface IResponse<T> {
	code: 0 | 1;
	msg: string;
	data: T;
}

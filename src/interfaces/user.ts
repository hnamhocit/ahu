import type { IDocument } from './document';

export enum Role {
	USER = 'USER',
	ADMIN = 'ADMIN'
}

export enum Gender {
	MALE = 'MALE',
	FEMALE = 'FEMALE',
	OTHER = 'OTHER',
	UNKNOWN = 'UNKNOWN'
}

export interface IUser extends IDocument {
	email: string;
	password: string;
	displayName: string;
	provider: string;
	role: Role;
	gender: Gender;
	username: string | null;
	refreshToken: string | null;
	bio: string | null;
	photoURL: string | null;
	backgroundURL: string | null;
	location: string | null;
	phoneNumber: string | null;
	birthday: string | null;
}

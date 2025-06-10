import { toast } from 'svelte-sonner';
import { writable } from 'svelte/store';

import { api } from '../config';

import type { IResponse, ITokens, IUser } from '../interfaces';
const initialState: {
  user: IUser | null;
  isLoading: boolean;
} = {
  user: null,
  isLoading: false
};

const { subscribe, update } = writable(initialState);

export const userStore = {
  subscribe,

  async getProfile() {
    update((state) => ({
      ...state,
      isLoading: true
    }));

    try {
      const res: IResponse<IUser> = await api.get('/users/profile');

      if (res.code === 0) {
        throw new Error(res.msg);
      }

      update((state) => ({
        ...state,
        user: res.data
      }));
    } catch (error) {
      toast.error('Get profile failed', {
        description: error instanceof Error ? error.message : 'An unknown error occurred'
      });
    } finally {
      update((state) => ({
        ...state,
        isLoading: false
      }));
    }
  },

  async login(email: string, password: string) {
    update((state) => ({
      ...state,
      isLoading: true
    }));

    try {
      const res: IResponse<ITokens> = await api.post('/auth/login', { email, password });

      console.log({ res });

      if (res.code === 0) {
        throw new Error(res.msg);
      }

      localStorage.setItem('accessToken', res.data.access_token);
      localStorage.setItem('refreshToken', res.data.refresh_token);

      const userRes: IResponse<IUser> = await api.get('/users/profile');

      if (userRes.code === 0) {
        throw new Error(userRes.msg);
      }

      update((state) => ({
        ...state,
        user: userRes.data
      }));
    } catch (error) {
      toast.error('Login failed', {
        description: error instanceof Error ? error.message : 'An unknown error occurred'
      });
    } finally {
      update((state) => ({
        ...state,
        isLoading: false
      }));
    }
  },

  async register(email: string, password: string, displayName: string) {
    update((state) => ({
      ...state,
      isLoading: true
    }));

    try {
      const res: IResponse<ITokens> = await api.post('/auth/register', {
        email,
        password,
        displayName
      });

      if (res.code === 0) {
        throw new Error(res.msg);
      }

      localStorage.setItem('accessToken', res.data.access_token);
      localStorage.setItem('refreshToken', res.data.refresh_token);

      const userRes: IResponse<IUser> = await api.get('/users/profile');

      if (userRes.code === 0) {
        throw new Error(userRes.msg);
      }

      update((state) => ({
        ...state,
        user: userRes.data
      }));
    } catch (error) {
      toast.error('Register failed', {
        description: error instanceof Error ? error.message : 'An unknown error occurred'
      });
    } finally {
      update((state) => ({
        ...state,
        isLoading: false
      }));
    }
  },

  async logout() {
    update((state) => ({
      ...state,
      isLoading: true
    }));

    try {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      await api.get('/auth/logout');
    } catch (error) {
      toast.error('Logout failed', {
        description: error instanceof Error ? error.message : 'An unknown error occurred'
      });
    } finally {
      update((state) => ({
        ...state,
        isLoading: false
      }));
    }
  }
};

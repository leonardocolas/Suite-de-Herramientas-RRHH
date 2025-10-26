import { api } from './api';

interface LoginData {
  username: string;
  password: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

export const authService = {
  async login(credentials: LoginData): Promise<{ user: User; token: string }> {
    const response = await api.post('/auth/login/', credentials);
    
    if (response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    
    return response;
  },

  async register(userData: any) {
    return await api.post('/auth/register/', userData);
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  },

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  getToken(): string | null {
    return localStorage.getItem('token');
  },
};

export const verifyToken = async (token: string): Promise<boolean> => {
  try {
    await api.get('/auth/verify/');
    return true;
  } catch (error) {
    return false;
  }
};
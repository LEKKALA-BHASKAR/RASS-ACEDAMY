import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState, LoginCredentials, RegisterData } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  register: (data: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    token: null
  });

  useEffect(() => {
    // Initialize with demo users if not exists
    const users = localStorage.getItem('users');
    if (!users) {
      const demoUsers = [
        {
          id: 'student1',
          email: 'student@demo.com',
          password: 'password123',
          fullName: 'John Doe',
          phone: '9876543210',
          role: 'student',
          createdAt: new Date().toISOString()
        },
        {
          id: 'admin1',
          email: 'admin@demo.com',
          password: 'admin123',
          fullName: 'Admin User',
          phone: '9876543211',
          role: 'admin',
          createdAt: new Date().toISOString()
        }
      ];
      localStorage.setItem('users', JSON.stringify(demoUsers));
    }

    // Load auth state from localStorage
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      try {
        const parsedAuth = JSON.parse(savedAuth);
        setAuthState(parsedAuth);
      } catch (error) {
        console.error('Error parsing saved auth:', error);
        localStorage.removeItem('auth');
      }
    }
  }, []);

  const saveAuthState = (newState: AuthState) => {
    setAuthState(newState);
    localStorage.setItem('auth', JSON.stringify(newState));
  };

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: User) => 
        u.email === credentials.email && u.password === credentials.password
      );

      if (user) {
        const token = `token_${user.id}_${Date.now()}`;
        const newAuthState = {
          user,
          isAuthenticated: true,
          token
        };
        saveAuthState(newAuthState);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (data: RegisterData): Promise<boolean> => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      if (users.find((u: User) => u.email === data.email)) {
        return false;
      }

      const newUser: User = {
        id: `user_${Date.now()}`,
        ...data,
        role: 'student',
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      const token = `token_${newUser.id}_${Date.now()}`;
      const newAuthState = {
        user: newUser,
        isAuthenticated: true,
        token
      };
      saveAuthState(newAuthState);
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    const newAuthState = {
      user: null,
      isAuthenticated: false,
      token: null
    };
    saveAuthState(newAuthState);
  };

  const updateProfile = (data: Partial<User>) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...data };
      const newAuthState = {
        ...authState,
        user: updatedUser
      };
      saveAuthState(newAuthState);

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex((u: User) => u.id === updatedUser.id);
      if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      register,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};
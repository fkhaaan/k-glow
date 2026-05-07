export type AuthUser = {
  id: string;
  name: string;
  email: string;
  skinType?: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterPayload = LoginCredentials & {
  name: string;
  confirmPassword: string;
};

export type AuthResponse = {
  user: AuthUser;
  accessToken: string;
};

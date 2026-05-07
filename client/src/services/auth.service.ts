import type {
  AuthResponse,
  AuthUser,
  LoginCredentials,
  RegisterPayload,
} from "@/types/auth";
import { removeAccessToken, setAccessToken } from "@/utils/token";

const mockUser: AuthUser = {
  id: "user-001",
  name: "Mina Park",
  email: "mina@example.com",
  skinType: "Combination",
};

function createMockToken(email: string) {
  if (typeof window !== "undefined" && typeof window.btoa === "function") {
    return `mock.jwt.${window.btoa(email)}`;
  }

  return `mock.jwt.${email}`;
}

export const authService = {
  login(credentials: LoginCredentials): AuthResponse {
    const user = { ...mockUser, email: credentials.email };
    const accessToken = createMockToken(credentials.email);
    setAccessToken(accessToken);

    return { user, accessToken };
  },

  register(payload: RegisterPayload): AuthResponse {
    const user = {
      id: "user-new",
      name: payload.name,
      email: payload.email,
      skinType: "Not selected",
    };
    const accessToken = createMockToken(payload.email);
    setAccessToken(accessToken);

    return { user, accessToken };
  },

  logout() {
    removeAccessToken();
  },

  getCurrentUser(): AuthUser {
    return mockUser;
  },
};

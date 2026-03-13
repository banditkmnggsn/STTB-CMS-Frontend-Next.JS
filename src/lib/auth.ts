const ACCESS_TOKEN_KEY = 'sttb_access_token';
const REFRESH_TOKEN_KEY = 'sttb_refresh_token';

function isBrowser() {
  return typeof window !== 'undefined';
}

function writeCookie(name: string, value: string) {
  if (!isBrowser()) {
    return;
  }

  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; samesite=lax`;
}

function clearCookie(name: string) {
  if (!isBrowser()) {
    return;
  }

  document.cookie = `${name}=; Max-Age=0; path=/; samesite=lax`;
}

export const authStorage = {
  getAccessToken(): string | null {
    if (!isBrowser()) {
      return null;
    }

    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },
  getRefreshToken(): string | null {
    if (!isBrowser()) {
      return null;
    }

    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },
  setTokens(accessToken: string, refreshToken?: string | null) {
    if (!isBrowser()) {
      return;
    }

    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    writeCookie(ACCESS_TOKEN_KEY, accessToken);

    if (refreshToken) {
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
      writeCookie(REFRESH_TOKEN_KEY, refreshToken);
    }
  },
  clearTokens() {
    if (!isBrowser()) {
      return;
    }

    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    clearCookie(ACCESS_TOKEN_KEY);
    clearCookie(REFRESH_TOKEN_KEY);
  },
};

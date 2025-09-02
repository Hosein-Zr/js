/**
 * 🍪 Cookie Utilities in TypeScript (Frontend)
 * --------------------------------------------
 * These helpers let you:
 *  - Read cookies (by name or all at once)
 *  - Set cookies with attributes (expires, path, secure, sameSite, etc.)
 *  - Delete cookies
 *
 * Note: These only work for cookies accessible via `document.cookie`.
 *       They cannot access HttpOnly cookies (server-only).
 */

// Type for cookie options
export interface CookieOptions {
  path?: string;
  domain?: string;
  maxAge?: number;
  expires?: Date;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
}

/**
 * ✅ Get cookie by name
 */
export function getCookie(name: string): string | null {
  const cookies = document.cookie
    .split("; ")
    .map((cookie) => cookie.split("="));

  for (const [key, value] of cookies) {
    if (key === decodeURIComponent(name)) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

/**
 * ✅ Get all cookies as an object
 */
export function getAllCookies(): Record<string, string> {
  return document.cookie
    .split("; ")
    .filter(Boolean)
    .map((cookie) => cookie.split("="))
    .reduce((acc, [key, value]) => {
      acc[decodeURIComponent(key)] = decodeURIComponent(value);
      return acc;
    }, {} as Record<string, string>);
}

/**
 * ✅ Set a cookie
 */
export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {}
): void {
  let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (options.expires) {
    cookieStr += `; Expires=${options.expires.toUTCString()}`;
  }
  if (options.maxAge) {
    cookieStr += `; Max-Age=${options.maxAge}`;
  }
  if (options.path) {
    cookieStr += `; Path=${options.path}`;
  } else {
    cookieStr += `; Path=/`; // default
  }
  if (options.domain) {
    cookieStr += `; Domain=${options.domain}`;
  }
  if (options.secure) {
    cookieStr += `; Secure`;
  }
  if (options.sameSite) {
    cookieStr += `; SameSite=${options.sameSite}`;
  }

  document.cookie = cookieStr;
}

/**
 * ✅ Delete a cookie
 */
export function deleteCookie(name: string, path: string = "/"): void {
  document.cookie = `${encodeURIComponent(name)}=; Path=${path}; Max-Age=0`;
}

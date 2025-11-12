/**
 * Local storage store name, this is prefixed to all async store keys.
 * @var string
 */
export const STORE_NAME = "@ERAPMS";

/**
 * List of available async store keys
 */

export const STORE_KEYS = {
  IS_AUTHENTICATED: STORE_NAME + "@IS_AUTHENTICATED",
  ROLE: STORE_NAME + "@ROLE",
  USER: STORE_NAME + "@USER",
  TOKEN: STORE_NAME + "@TOKEN",
  LAST_USERNAME: STORE_NAME + "@LAST_USERNAME",
  THEME: STORE_NAME + "@THEME",
  TEMP_EMAIL: STORE_NAME + "@TEMP_EMAIL",
  IS_SUBSCRIBED_TO_NEWSLETTER: STORE_NAME + "@IS_SUBSCRIBED_TO_NEWSLETTER",
  ADMIN_ADDITIONAL_SERVICES: STORE_NAME + "@ADMIN_ADDITIONAL_SERVICES",
};

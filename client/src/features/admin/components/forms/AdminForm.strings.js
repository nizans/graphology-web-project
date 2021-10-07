import {
  HEB_EMAIL,
  HEB_INVALID_EMAIL_ADDRESS,
  HEB_NAME,
  HEB_REQUIRED_FIELD,
  HEB_SUCCESSFUL_UPLOAD_MESSAGE,
} from 'strings/common';

export const AdminFormStrings = {
  required: HEB_REQUIRED_FIELD,
  name: HEB_NAME,
  email: HEB_EMAIL,
  password: 'בחר סיסמא',
  validatePassword: 'וודא סיסמא',
  invalidEmail: HEB_INVALID_EMAIL_ADDRESS,
  emailPlaceholder: 'הכנס אימייל',
  namePlaceholder: 'שם המנהל',
  minLength: 'סיסמא חייבת להכיל לפחות 6 תווים',
  passwordMustMatch: 'סיסמא לא תואמת',
  passwordPlaceHolder: 'סיסמא',
  success: HEB_SUCCESSFUL_UPLOAD_MESSAGE,
  defineUser: 'הגדרת מיילים למשתמש זה:',
  bookOrderMail: 'שלח מיילים לגבי הזמנת ספרים',
  contactUsMail: 'שלח מיילים לגבי בקשות ליצירת קשר',
  nameMaxLength: 'שם יכול להכיל עד 50 תווים',
  invalidPassword: 'סיסמא יכולה להכיל רק אותיות באנגלית, מספרים, ותווים',
};

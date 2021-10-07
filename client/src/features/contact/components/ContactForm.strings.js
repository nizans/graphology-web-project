import {
  HEB_EMAIL,
  HEB_INVALID_EMAIL_ADDRESS,
  HEB_INVALID_PHONE_NUMBER,
  HEB_REQUIRED_FIELD,
  HEB_SEND,
  HEB_SUCCESSFUL_UPLOAD_MESSAGE,
} from 'strings/common';

export const ContactFormStrings = {
  fullName: 'שם מלא',
  phoneNumber: 'מספר פלאפון',
  email: HEB_EMAIL,
  notes: 'הערות',
  invalidEmail: HEB_INVALID_EMAIL_ADDRESS,
  required: HEB_REQUIRED_FIELD,
  invalidPhone: HEB_INVALID_PHONE_NUMBER,
  send: HEB_SEND,
  requestSubject: 'נושא פניה',
  requestSubjects: ['הזמנת ספר', 'ייעוץ עסקי', 'הרצאות', 'קורסים וסדנאות', 'ייעוץ אישי גרפולוגי', 'גרפולוגיה משפטית'],
  success: HEB_SUCCESSFUL_UPLOAD_MESSAGE,
};

export const toDate = str => {
  const date = new Date(str);
  return date.toLocaleDateString('he-IL');
};

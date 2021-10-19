import { articlesApiCRUDRequests } from 'features/articles';
import { booksApiCRUDRequests } from 'features/books';
import { contentsApiCRUDRequests } from 'features/couch';
import { useMutateData } from 'lib/reactQuery';
import { HEB_TITLE } from 'strings/common';
import createFormData from 'utils/createFormData';
import { urlToObject } from 'utils/urlToObject';

function randomDate(start = new Date(2012, 0, 1), end = new Date()) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

async function randomImagesArray() {
  const numberOfImgs = Math.floor(Math.random() * 5 + 1);
  let images = [];
  for (let i = 0; i < numberOfImgs; i++) {
    const random1 = Math.floor(Math.random() * 9) * 100 + 300;
    const random2 = Math.floor(Math.random() * 9) * 100 + 300;
    const url = `https://picsum.photos/${random1}/${random2}`;
    const imageFile = await urlToObject(url);
    images.push(imageFile);
  }
  return images;
}

const randomArticle = async () => {
  const publishDate = randomDate();
  const values = {
    title: HEB_TITLE,
    text: `<p style=direction: rtl;>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך.</p>`,
    sourceFrom: 'לורם לורם',
    sourceURL: 'https://www.ynet.co.il/news/article/hy1ogqsmy#autoplay',
    publishDate: publishDate,
  };
  const images = await randomImagesArray();
  const formData = createFormData(values, images);
  return formData;
};

const randomContent = async () => {
  const publishDate = randomDate();
  const values = {
    title: HEB_TITLE,
    text: `<p style=direction: rtl;>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך.</p>`,
    subtitle:
      'שגם רשמי ענף אות אחר אדם בגרפולוגיה ובחינה למחצה יסוד, האבחון בדיקה את בשנים מחקרים של שימוש האחרונות לבד כך. מסמכים מספר אחוזים כאשר איטליה לעבור את אבחון לשנות אינו, משפט שלו כתב על אך וחתימות בשיטות תורה תעסוקתי בתחומים.',
    publishDate: publishDate,
  };
  const images = await randomImagesArray();
  const formData = createFormData(values, images);
  return formData;
};

const randomBook = async () => {
  const publishDate = randomDate();
  const values = {
    description: `לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
    `,
    title: 'שם של ספר',
    author: 'מיכל דורון',
    publishDate: publishDate,
  };
  const images = await randomImagesArray();
  const formData = createFormData(values, images);
  return formData;
};

export const usePostRandomArticles = (n = 10) => {
  const { mutate, isLoading, isSuccess, error } = useMutateData(articlesApiCRUDRequests.create);
  const post = async () => {
    for (let i = 0; i < n; i++) {
      const data = await randomArticle();
      mutate({ body: data });
    }
  };
  return { post, isLoading, isSuccess, error };
};

export const usePostRandomContents = (n = 10) => {
  const { mutate, isLoading, isSuccess, error } = useMutateData(contentsApiCRUDRequests.create);
  const post = async () => {
    for (let i = 0; i < n; i++) {
      const data = await randomContent();
      mutate({ body: data });
    }
  };
  return { post, isLoading, isSuccess, error };
};

export const usePostRandomBooks = (n = 10) => {
  const { mutate, isLoading, isSuccess, error } = useMutateData(booksApiCRUDRequests.create);
  const post = async () => {
    for (let i = 0; i < n; i++) {
      const data = await randomBook();
      mutate({ body: data });
    }
  };
  return { post, isLoading, isSuccess, error };
};

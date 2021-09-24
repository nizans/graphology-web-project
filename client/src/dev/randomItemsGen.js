import { ApiRequests } from 'ApiRequest';
import { articlesApiCRUDRequests } from 'features/articles';
import { booksApiCRUDRequests } from 'features/books';
import { contentsApiCRUDRequests } from 'features/couch';
import { useMutateData } from 'lib/reactQuery';
import createFormData from 'utils/createFormData';

function randomDate(start = new Date(2012, 0, 1), end = new Date()) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const urlToObject = async imgSrc => {
  const response = await fetch(imgSrc);
  const blob = await response.blob();
  const file = new File([blob], 'randomImage + ' + (Math.random() * 100).toString() + '.jpg', { type: blob.type });
  return file;
};

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
    title: 'כותרת',
    text: `<p style=direction: rtl;>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך.</p>`,
    sourceFrom: 'לורם לורם',
    sourceURL: 'https://www.ynet.co.il/news/article/hy1ogqsmy#autoplay',
    publishDate: publishDate,
    uploadDate: randomDate(publishDate, new Date()),
  };
  const images = await randomImagesArray();
  const formData = createFormData(values, images);
  return formData;
};

const randomContent = async () => {
  const publishDate = randomDate();
  const values = {
    title: 'כותרת',
    text: `<p style=direction: rtl;>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</p>\n<p style=direction: rtl;>&nbsp;</p>\n<p style=direction: rtl;>להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך.</p>`,
    subtitle:
      'שגם רשמי ענף אות אחר אדם בגרפולוגיה ובחינה למחצה יסוד, האבחון בדיקה את בשנים מחקרים של שימוש האחרונות לבד כך. מסמכים מספר אחוזים כאשר איטליה לעבור את אבחון לשנות אינו, משפט שלו כתב על אך וחתימות בשיטות תורה תעסוקתי בתחומים.',
    publishDate: publishDate,
    uploadDate: randomDate(publishDate, new Date()),
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
    uploadDate: randomDate(publishDate, new Date()),
  };
  const images = await randomImagesArray();
  const formData = createFormData(values, images);
  return formData;
};

export const usePostRandomArticles = (n = 10) => {
  const { mutate } = useMutateData(articlesApiCRUDRequests.create);

  const post = async () => {
    for (let i = 0; i < n; i++) {
      const data = await randomArticle();
      mutate({ body: data });
    }
  };
  return post;
};

export const usePostRandomContents = (n = 10) => {
  const apiReq = new ApiRequests('contens');
  const { mutate } = useMutateData(contentsApiCRUDRequests.create);
  const post = async () => {
    for (let i = 0; i < n; i++) {
      const data = await randomContent();
      mutate({ body: data });
    }
  };
  return post;
};

export const usePostRandomBooks = (n = 10) => {
  const apiReq = new ApiRequests('books');
  const { mutate } = useMutateData(booksApiCRUDRequests.create);
  const post = async () => {
    for (let i = 0; i < n; i++) {
      const data = await randomBook();
      mutate({ body: data });
    }
  };
  return post;
};

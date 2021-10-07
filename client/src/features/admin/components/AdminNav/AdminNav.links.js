import {
  HEB_ARTICLES,
  HEB_BOOKS,
  HEB_CERTIFICATIONS,
  HEB_GRAPHOLOGY_SERVICE,
  HEB_ON_THE_COUCH,
  HEB_RECOMMENDATIONS,
  HEB_VIDEOS,
} from 'strings/common';

export const AdminNavLinks = [
  { name: HEB_ARTICLES, to: 'view/articles' },
  { name: HEB_ON_THE_COUCH, to: 'view/contents' },
  { name: HEB_VIDEOS, to: 'view/videos' },
  { name: HEB_GRAPHOLOGY_SERVICE, to: 'view/services' },
  { name: HEB_BOOKS, to: 'view/books' },
  { name: HEB_CERTIFICATIONS, to: 'view/certifications' },
  { name: HEB_RECOMMENDATIONS, to: 'view/recommendations' },
];

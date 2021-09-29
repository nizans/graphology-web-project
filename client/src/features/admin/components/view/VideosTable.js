import { videosApiCRUDRequests } from 'features/videos/api';
import truncate from 'lodash.truncate';
import React from 'react';
import { toDate } from 'utils/toDate';
import Table from './Table';

const strings = {
  title: 'שם',
  link: 'לינק',
  image: 'תמונה',
  uploadDate: 'תאריך העלאה',
  description: 'תיאור',
};

const VideosTable = () => {
  const headers = () => {
    return (
      <>
        <th>{strings.image}</th>
        <th>{strings.title}</th>
        <th>{strings.description}</th>
        <th>{strings.link}</th>
        <th>{strings.uploadDate}</th>
      </>
    );
  };

  const generateCell = item => {
    return (
      <>
        <td>
          <img
            loading="lazy"
            width="100px"
            className="h-full object-fit m-2 rounded-md border-2 border-p-gray"
            src={item.thumbnail ? item.thumbnail : 'http://placehold.jp/150x150.png'}
            alt=""
          />
        </td>
        <td>{item.title}</td>
        <td>{truncate(item.description, { length: 75, separator: ' ' })}</td>
        <td>
          <a className="hover:font-bold" href={item.url}>
            {strings.link}
          </a>
        </td>
        <td>{toDate(item.uploadDate)}</td>
      </>
    );
  };
  return <Table generateCell={generateCell} headers={headers} type="videos" apiRequests={videosApiCRUDRequests} />;
};

export default VideosTable;

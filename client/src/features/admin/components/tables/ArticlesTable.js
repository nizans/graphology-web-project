import { articlesApiCRUDRequests } from 'features/articles';
import React from 'react';
import { toDate } from 'utils/toDate';
import TableItemImage from '../../../../components/UI/TableItemImage';
import Table from './Table';
const strings = {
  title: 'שם',
  souceFrom: 'מקור הכתבה',
  link: 'לינק',
  image: 'תמונה',
  uploadDate: 'תאריך העלאה',
};
const ArticlesTable = () => {
  const headers = () => {
    return (
      <>
        <th className="flex justify-center">{strings.image}</th>
        <th>{strings.title}</th>
        <th>{strings.souceFrom}</th>
        <th>{strings.link}</th>
        <th>{strings.uploadDate}</th>
      </>
    );
  };
  const generateCell = item => {
    return (
      <>
        <td>
          <div className="overflow-hidden">
            <TableItemImage image={item.images} />
          </div>
        </td>
        <td>{item.title}</td>
        <td>{item.sourceFrom}</td>
        <td>
          <a className="hover:font-bold" href={item.sourceURL}>
            {strings.link}
          </a>
        </td>
        <td>{toDate(item.uploadDate)}</td>
      </>
    );
  };
  return <Table type="articles" headers={headers} generateCell={generateCell} apiRequests={articlesApiCRUDRequests} />;
};

export default ArticlesTable;

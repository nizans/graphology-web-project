import { booksApiCRUDRequests } from 'features/books';
import truncate from 'lodash.truncate';
import React from 'react';
import { toDate } from 'utils/toDate';
import MultiSourceImageParse from 'components/common/MultiSourceImageParse';
import Table from './Table';
import { BooksTableStrings as strings } from './BooksTable.strings';

const BooksTable = () => {
  const headers = () => {
    return (
      <>
        <th>{strings.image}</th>
        <th>{strings.title}</th>
        <th>{strings.author}</th>
        <th>{strings.description}</th>
        <th>{strings.publishDate}</th>
        <th>{strings.uploadDate}</th>
      </>
    );
  };
  const generateCell = item => {
    const description = truncate(item.description, { separator: ' ', length: 50 });
    return (
      <>
        <td className="max-h-40 h-40">
          <MultiSourceImageParse image={item.images} />
        </td>
        <td>{item.title}</td>
        <td>{item.author}</td>
        <td>{description}</td>
        <td>{toDate(item.publishDate)}</td>
        <td>{toDate(item.uploadDate)}</td>
      </>
    );
  };

  return <Table type="books" headers={headers} generateCell={generateCell} apiRequests={booksApiCRUDRequests} />;
};

export default BooksTable;

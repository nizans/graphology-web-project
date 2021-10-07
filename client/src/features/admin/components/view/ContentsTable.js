import { contentsApiCRUDRequests } from 'features/couch';
import truncate from 'lodash.truncate';
import React from 'react';
import { toDate } from 'utils/toDate';
import MultiSourceImageParse from 'components/common/MultiSourceImageParse';
import Table from './Table';
import { ContentsTableStrings as strings } from './ContentsTable.strings';

const ContentsTable = () => {
  const headers = () => {
    return (
      <>
        <th>{strings.image}</th>
        <th>{strings.title}</th>
        <th>{strings.subtitle}</th>
        <th>{strings.publishDate}</th>
        <th>{strings.uploadDate}</th>
      </>
    );
  };
  const generateCell = item => {
    return (
      <>
        <td>
          <MultiSourceImageParse image={item.images} />
        </td>
        <td>{item.title}</td>
        <td>
          <p>{truncate(item.subtitle, { length: 100, separator: ' ' })}</p>
        </td>
        <td>{toDate(item.publishDate)}</td>
        <td>{toDate(item.uploadDate)}</td>
      </>
    );
  };
  return <Table type="contents" headers={headers} generateCell={generateCell} apiRequests={contentsApiCRUDRequests} />;
};

export default ContentsTable;

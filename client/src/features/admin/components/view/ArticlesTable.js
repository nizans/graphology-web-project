import { articlesApiCRUDRequests } from 'features/articles';
import React from 'react';
import { toDate } from 'utils/toDate';
import MultiSourceImageParse from 'components/common/MultiSourceImageParse';
import Table from './Table';
import { ArticlesTableStrings as strings } from './ArticlesTable.strings';

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
            <MultiSourceImageParse image={item.images} />
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

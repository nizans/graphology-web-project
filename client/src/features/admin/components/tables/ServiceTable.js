import { servicesApiCRUDRequests } from 'features/services';
import truncate from 'lodash.truncate';
import React from 'react';
import { toDate } from 'utils/toDate';
import TableItemImage from '../../../../components/UI/TableItemImage';
import Table from './Table';

const strings = {
  title: 'שם השירות',
  description: 'תיאור',
  image: 'תמונה',
  uploadDate: 'תאריך העלאה',
};
const ServiceTable = () => {
  const headers = () => {
    <>
      <th>{strings.image}</th>
      <th>{strings.title}</th>
      <th>{strings.description}</th>
      <th>{strings.uploadDate}</th>
    </>;
  };
  const generateCell = item => {
    return (
      <>
        <td>
          <TableItemImage image={item.images} />
        </td>
        <td>{item.title}</td>
        <td>
          <p>{truncate(item.description, { length: 75, separator: ' ' })}</p>
        </td>
        <td>{toDate(item.uploadDate)}</td>
      </>
    );
  };

  return <Table type="services" apiRequests={servicesApiCRUDRequests} generateCell={generateCell} headers={headers} />;
};

export default ServiceTable;

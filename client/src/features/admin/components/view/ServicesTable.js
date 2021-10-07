import { servicesApiCRUDRequests } from 'features/services';
import truncate from 'lodash.truncate';
import React from 'react';
import { toDate } from 'utils/toDate';
import MultiSourceImageParse from 'components/common/MultiSourceImageParse';
import Table from './Table';
import { ServicesTableStrings as strings } from './ServicesTable.strings';

const ServicesTable = () => {
  const headers = () => (
    <>
      <th className="flex justify-center">{strings.image}</th>
      <th>{strings.title}</th>
      <th>{strings.description}</th>
      <th>{strings.uploadDate}</th>
    </>
  );
  const generateCell = item => {
    console.log(item);
    return (
      <>
        <td>
          <MultiSourceImageParse objectFit="contain" image={item.image.full} />
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

export default ServicesTable;

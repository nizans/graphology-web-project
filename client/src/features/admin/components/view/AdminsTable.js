import { AuthContext } from 'context/AuthContext';
import { adminApiCRUDRequests } from 'features/admin';
import React, { useContext } from 'react';
import { AdminsTableStrings as strings } from './AdminsTable.strings';
import Table from './Table';

const AdminsTable = () => {
  const { user } = useContext(AuthContext);

  const headers = () => {
    return (
      <>
        <th>{strings.name}</th>
        <th>{strings.email}</th>
        <th></th>
      </>
    );
  };
  const generateCell = admin => (
    <>
      <td>{admin.name}</td>
      <td>{admin.email}</td>
      <td className="flex items-center">
        {user.email === admin.email && (
          <span
            style={{ borderRadius: '2rem', border: '1px solid' }}
            className="h-4 w-4 inline-block bg-green-500 ml-2"
          ></span>
        )}
        {user.email === admin.email && strings.connected}
      </td>
    </>
  );
  return <Table type="admins" headers={headers} generateCell={generateCell} apiRequests={adminApiCRUDRequests} />;
};

export default AdminsTable;

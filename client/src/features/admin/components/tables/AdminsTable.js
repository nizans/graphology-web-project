import { AuthContext } from 'context/authContext';
import { adminApiCRUDRequests } from 'features/admin';
import React from 'react';
import { useContext } from 'react/cjs/react.development';
import Table from './Table';

const strings = {
  name: 'שם',
  email: 'אימייל',
  connected: 'הנך מחובר ממשתמש זה',
};
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
        <span
          style={{ borderRadius: '2rem', border: '1px solid' }}
          className="h-4 w-4 inline-block bg-green-500 ml-2"></span>
        {user.email === admin.email ? strings.connected : ''}
      </td>
    </>
  );
  return <Table type="admins" headers={headers} generateCell={generateCell} apiRequests={adminApiCRUDRequests} />;
};

export default AdminsTable;

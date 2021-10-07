import { AuthContext } from 'context/AuthContext';
import { AdminTopNavStrings as strings } from 'features/admin/components/AdminNav/AdminTopNav.strings';
import { useContext } from 'react';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import AdminNavRandomData from './AdminNavRandomData';

const AdminTopNav = () => {
  const { path } = useRouteMatch();
  const { logout } = useContext(AuthContext);
  const { push } = useHistory();

  const handleLogout = async () => {
    logout();
    push('/home');
  };

  return (
    <nav>
      <NavLink className="_text text-xl px-4" to="/home">
        {strings.backHome}
      </NavLink>
      <NavLink className="_text text-xl px-4" to={`${path}/view`}>
        {strings.viewContents}
      </NavLink>
      <NavLink activeClassName="font-bold" className="_text text-xl px-4" to={`${path}/view/admins`}>
        {strings.admins}
      </NavLink>
      <button className="_text text-xl px-4" onClick={handleLogout}>
        {strings.logout}
      </button>
      <AdminNavRandomData />
    </nav>
  );
};

export default AdminTopNav;

import LoadingButton from 'components/UI/LoadingButton';
import { AuthContext } from 'context/AuthContext';
import { useContext } from 'react';
import { NavLink, useRouteMatch, useHistory } from 'react-router-dom';
import AdminNavRandomData from './AdminNavRandomData';

const strings = {
  admins: 'מנהלים',
  logout: 'התנתקות',
  viewContents: 'צפייה בתכנים',
  backHome: 'חזרה לעמוד הבית',
};
const AdminTopNav = () => {
  const { path } = useRouteMatch();
  const { logout, isLoggingOutLoading } = useContext(AuthContext);
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

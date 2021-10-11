import Underline from 'components/UI/Underline';
import { AuthContext } from 'context/AuthContext';
import { DimensionsContext } from 'context/DimensionsContext';
import { AdminNavStrings as strings } from './AdminNav.strings';
import { AdminNavLinks as links } from './AdminNav.links';
import useDimensions from 'hooks/useDimensions';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useRouteMatch, useHistory } from 'react-router-dom';
import AdminTopNav from './AdminTopNav';

const AdminNav = () => {
  const { goBack, location } = useHistory();
  const { path } = useRouteMatch();
  const viewPage = useRouteMatch('/admin/view');
  const [headerRef, headerDimension] = useDimensions();
  const { setHeaderHeight } = useContext(DimensionsContext);
  const [title, setTitle] = useState(viewPage ? strings.viewTitle : strings.addtitle);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (headerDimension) setHeaderHeight(headerDimension.height);
  }, [headerDimension, setHeaderHeight]);

  useEffect(() => {
    setTitle(viewPage ? strings.viewTitle : strings.addtitle(location.pathname.split('/')[3]));
  }, [viewPage, location.pathname]);

  return (
    <header>
      <div ref={headerRef} className="top-0 bg-background">
        <div className="flex justify-between items-center w-full">
          <div>
            <h5 className="_text text-3xl">{strings.hello + user?.name}</h5>
            <h1 className="_text-bold-dark text-8xl">{title}</h1>
            {!viewPage && (
              <button type="button" className="_text text-3xl hover:font-bold" onClick={goBack}>
                &lt; {strings.goBack}
              </button>
            )}
          </div>
          <AdminTopNav />
        </div>
        {viewPage && (
          <nav className="flex items-center divide-x-2 divide-p-brown divide-x-reverse mb-2">
            {links.map((link, i) => (
              <NavLink
                key={i}
                className={`_text text-3xl ${i === 0 ? 'pl-4' : 'px-4'}`}
                activeClassName="font-bold"
                to={`${path}/${link.to}`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        )}
        <Underline thickness={2} />
      </div>
    </header>
  );
};

export default AdminNav;

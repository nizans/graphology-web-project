import Underline from 'components/UI/Underline';
import { AuthContext } from 'context/AuthContext';
import { DimensionsContext } from 'context/DimensionsContext';
import useDimensions from 'hooks/useDimensions';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useRouteMatch, useHistory } from 'react-router-dom';
import typesDictionary from 'utils/typesDictionary';
import AdminTopNav from './AdminTopNav';

const strings = {
  backToMain: 'חזרה לתפריט ראשי',
  addtitle: type => `הוספת ${typesDictionary[type]}`,
  viewTitle: 'תכנים באתר',
  hello: 'שלום ',
  goBack: 'חזור',
};

const links = [
  { name: 'כתבות', to: 'view/articles' },
  { name: 'תכנים מספת הגרפולוג', to: 'view/contents' },
  { name: 'סרטונים', to: 'view/videos' },
  { name: 'שירותים', to: 'view/services' },
  { name: 'ספרים', to: 'view/books' },
  { name: 'תעודות', to: 'view/certifications' },
];

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
      <div ref={headerRef} className=" top-0 bg-background">
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
                to={`${path}/${link.to}`}>
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

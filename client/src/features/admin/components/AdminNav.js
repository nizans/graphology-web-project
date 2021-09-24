import LoadingButton from 'components/UI/LoadingButton';
import Underline from 'components/UI/Underline';
import { AuthContext } from 'context/authContext';
import { SectionHeightContext } from 'context/sectionHeightContext';
import { usePostRandomArticles, usePostRandomBooks, usePostRandomContents } from 'dev/randomItemsGen';
import useDimensions from 'hooks/useDimensions';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useRouteMatch, useHistory } from 'react-router-dom';
import typesDictionary from 'utils/typesDictionary';

const strings = {
  backToMain: 'חזרה לתפריט ראשי',
  addtitle: type => `הוספת ${typesDictionary[type]}`,
  viewTitle: 'תכנים באתר',
  logout: 'התנתקות',
  hello: 'שלום ',
  goBack: 'חזור',
  admins: 'מנהלים',
  viewContents: 'צפייה בתכנים',
};

const links = [
  { name: 'כתבות', to: 'view/articles' },
  { name: 'תכנים מספת הגרפולוג', to: 'view/contents' },
  { name: 'סרטונים', to: 'view/videos' },
  { name: 'שירותים', to: 'view/services' },
  { name: 'ספרים', to: 'view/books' },
];

const AdminNav = () => {
  ///DEV///
  const postA = usePostRandomArticles(10);
  const postC = usePostRandomContents(10);
  const postB = usePostRandomBooks(10);

  const { goBack } = useHistory();
  const { path } = useRouteMatch();
  const viewPage = useRouteMatch('/admin/view');
  const [headerRef, headerDimension] = useDimensions();
  const { setHeaderHeight } = useContext(SectionHeightContext);
  const { logout, user, isLoggingOutLoading } = useContext(AuthContext);
  const [title, setTitle] = useState(viewPage ? strings.viewTitle : strings.addtitle);
  const { push, location } = useHistory();

  useEffect(() => {
    if (headerDimension) setHeaderHeight(headerDimension.height);
  }, [headerDimension]);

  useEffect(() => {
    setTitle(viewPage ? strings.viewTitle : strings.addtitle(location.pathname.split('/')[3]));
  }, [viewPage]);

  const handleLogout = async () => {
    logout();
    push('/home');
  };

  return (
    <>
      <div ref={headerRef} className=" top-0 bg-background">
        <div className="flex justify-between items-center w-full">
          <div>
            <h5 className="_text-3xl">{strings.hello + user?.name}</h5>
            <h1 className="_text-bold-dark-8xl">{title}</h1>
            {!viewPage && (
              <button type="button" className="_text-3xl hover:font-bold" onClick={goBack}>
                &lt; {strings.goBack}
              </button>
            )}
          </div>
          <div>
            <nav>
              <NavLink className="_text-xl px-4" to={`${path}/view`}>
                {strings.viewContents}
              </NavLink>
              <NavLink activeClassName="font-bold" className="_text-xl px-4" to={`${path}/view/admins`}>
                {strings.admins}
              </NavLink>

              <LoadingButton
                isLoading={isLoggingOutLoading}
                value={strings.logout}
                type="button"
                onClick={handleLogout}
                className="button p-0 _text-xl px-4">
                {strings.logout}
              </LoadingButton>

              {process.env.NODE_ENV === 'development' && (
                <ul className="flex justify-between">
                  <li>
                    <button onClick={postA}>10 Articles</button>
                  </li>
                  <li>
                    <button onClick={postC}>10 Contents</button>
                  </li>
                  <li>
                    <button onClick={postB}>10 Books</button>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        </div>
        {viewPage && (
          <nav className="flex items-center divide-x-2 divide-p-brown divide-x-reverse mb-2">
            {links.map((link, i) => (
              <NavLink
                key={i}
                className={`_text-3xl ${i === 0 ? 'pl-4' : 'px-4'}`}
                activeClassName="font-bold"
                to={`${path}/${link.to}`}>
                {link.name}
              </NavLink>
            ))}
          </nav>
        )}

        <Underline thickness={2} />
      </div>
    </>
  );
};

export default AdminNav;

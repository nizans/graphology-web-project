import { SORT_BY } from 'ApiRequest';
import LoadingSection from 'components/UI/LoadingSection';
import Underline from 'components/UI/Underline';
import { contentsApiCRUDRequests } from 'features/couch';
import { useFetchData } from 'lib/reactQuery';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Notebook from '../../../../assets/icons/notebook.svg';
import OnTheCouchItem from './OnTheCouchItem';

const strings = {
  title: 'על ספת הגרפולוג',
  subTitle: 'זוהי פינה בה נחקור ונגלה על אישיותם של אשויות מוכורות',
  recentlyAdded: 'הועלו לאחרונה:',
  moreReadings: 'לעוד מאמרים',
};
const OnTheCouch = () => {
  const { isLoading, data, error } = useFetchData(
    contentsApiCRUDRequests.read(null, { page: 0, limit: 3, sortby: SORT_BY.UPLOAD_DATE_DESC })
  );
  if (isLoading) return <LoadingSection />;

  return (
    <>
      <div className="mx-auto flex flex-col text-center items-center mb-10 md:mb-20">
        <h1 className="_text-bold-dark-8xl">{strings.title}</h1>
        <h3 className="_text-bold-3xl">{strings.subTitle}</h3>
      </div>
      <div className="w-full">
        <h4 className="_text-bold-4xl">{strings.recentlyAdded}</h4>
        <Underline className="w-2/3" />
      </div>
      <OnTheCouchItem data={!error && data.payload[0]} />
      <Underline className="w-2/3 mr-auto" />
      <div className="flex items-center flex-col md:flex-row">
        <img loading="lazy" src={Notebook} width="240px" className="mt-8 md:ml-24" alt="" />
        <OnTheCouchItem data={!error && data.payload[1]} />
      </div>
      <Underline className="w-2/3 ml-auto" />
      <div className="flex flex-col md:flex-row items-center">
        <OnTheCouchItem data={!error && data.payload[2]} />
        <NavLink to="/home/couch" className="_text-6xl md:w-1/2 flex hover:font-bold">
          {strings.moreReadings} &gt;
        </NavLink>
      </div>
    </>
  );
};

export default OnTheCouch;

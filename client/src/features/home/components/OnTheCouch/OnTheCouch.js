import { SORT_BY } from 'lib/ApiRequest';
import LoadingSection from 'components/UI/LoadingSection';
import Underline from 'components/UI/Underline';
import { contentsApiCRUDRequests } from 'features/couch';
import { useFetchData } from 'lib/reactQuery';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Notebook from 'assets/icons/notebook.svg';
import OnTheCouchItem from './OnTheCouchItem';
import { DimensionsContext } from 'context/DimensionsContext';
import { OnTheCouchStrings as strings } from './OnTheCouch.strings';

const OnTheCouch = () => {
  const { windowWidth } = useContext(DimensionsContext);

  const { isLoading, data, error } = useFetchData(
    contentsApiCRUDRequests.read(null, { page: 0, limit: 3, sortby: SORT_BY.UPLOAD_DATE_DESC })
  );

  if (isLoading) return <LoadingSection />;

  return (
    <>
      <div className="mx-auto flex flex-col text-center items-center mb-10 md:mb-20">
        <h1 className="_title" style={{ minInlineSize: 'max-content' }}>
          {strings.title}
        </h1>
        <h3 className="_text text-2xl">{strings.subTitle}</h3>
      </div>

      <div className="w-full">
        <h4 className="_text-bold text-4xl">{strings.recentlyAdded}</h4>
      </div>

      <Underline className="w-2/3 my-8" />

      <div>
        <OnTheCouchItem data={!error && data.payload[0]} />
      </div>

      <Underline className="w-2/3 mr-auto my-8" thickness={2} />

      <div className="flex items-center flex-col md:flex-row ">
        {windowWidth >= 1024 && <img loading="lazy" src={Notebook} width="240px" className="ml-24" alt="" />}
        <OnTheCouchItem data={!error && data.payload[1]} />
      </div>

      <Underline className="w-2/3 ml-auto my-8" thickness={2} />

      <div className="flex flex-col lg:flex-row items-center ">
        <OnTheCouchItem data={!error && data.payload[2]} />
        <NavLink to="/home/couch" className="_text text-3xl sm:text-6xl mr-auto lg:mr-0 flex hover:font-bold">
          {strings.moreReadings} &gt;
        </NavLink>
      </div>
    </>
  );
};

export default OnTheCouch;

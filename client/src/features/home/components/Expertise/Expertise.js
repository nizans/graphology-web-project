import { servicesApiCRUDRequests } from 'features/services';
import { useFetchData } from 'lib/reactQuery';
import React from 'react';
import ResponsiveSlider from '../../../../components/common/ResponsiveSlider/ResponsiveSlider';
import ExpertiseContainer from './ExpertiseContainer';

const strings = {
  title: 'תחומי התמחות',
  subTitle: 'שירותים ואבחונים גרפולוגים',
};

const Expertise = () => {
  const { data, isSuccess, error } = useFetchData(servicesApiCRUDRequests.read());

  if (error) return null;
  return (
    isSuccess && (
      <>
        <div className="flex flex-col w-full items-center mb-2">
          <h1 className="_text-bold-dark _title px-4">{strings.title}</h1>
          <h3 className="_text text-2xl">{strings.subTitle}</h3>
        </div>
        <div className="lg:px-12">
          {data.payload.length > 3 ? (
            <ResponsiveSlider>
              {data.payload.map((item, i) => (
                <ExpertiseContainer data={item} key={item._id} />
              ))}
            </ResponsiveSlider>
          ) : (
            <div className="grid grid-cols-3">
              {data.payload.map((item, i) => (
                <ExpertiseContainer data={item} key={item._id} />
              ))}
            </div>
          )}
        </div>
      </>
    )
  );
};

export default Expertise;

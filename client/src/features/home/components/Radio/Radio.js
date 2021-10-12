import ResponsivePlayer from 'components/common/ResponsivePlayer';
import Spinner from 'components/UI/Spinner';
import TitleUnderline from 'components/UI/TitleUnderline';
import useFirstRender from 'hooks/useFirstRender';
import React, { useEffect, useState } from 'react';
import { RadioStrings as strings } from './Radio.strings';
import SuggestionContainer from './SuggestionContainer';

const fallbackURL = 'https://www.facebook.com/100003098510659/videos/pcb.3997212253725352/3997187820394462';

const Radio = () => {
  const [videoUrl, setVideoUrl] = useState(fallbackURL);

  return (
    <>
      <TitleUnderline title={strings.title} />
      <div className="grid grid-cols-6 w-full gap-x-3 mt-4 ">
        <div className=" col-span-6 lg:col-span-4 lg:col-start-2 border-p-brown border-4 rounded-3xl relative overflow-hidden">
          <ResponsivePlayer url={videoUrl} controls={true} />
        </div>
        <div className="col-span-6 lg:col-span-1 my-auto  grid-cols-3 gap-x-6 lg:block">
          <SuggestionContainer setVideoUrl={setVideoUrl} />
        </div>
      </div>
    </>
  );
};

export default Radio;

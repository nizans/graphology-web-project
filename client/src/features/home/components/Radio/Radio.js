import ResponsivePlayer from 'components/common/ResponsivePlayer';
import Spinner from 'components/UI/Spinner';
import TitleUnderline from 'components/UI/TitleUnderline';
import useFirstRender from 'hooks/useFirstRender';
import React, { useEffect, useState } from 'react';
import SuggestionContainer from './SuggestionContainer';

const strings = {
  title: 'מיכל ברדיו',
};

const fallbackURL = 'https://www.facebook.com/100003098510659/videos/pcb.3997212253725352/3997187820394462';

const Radio = () => {
  const [videoUrl, setVideoUrl] = useState(fallbackURL);
  const [isReady, setIsReady] = useState(false);
  const isFirstRender = useFirstRender();
  const [firstRender, setFirstRender] = useState();
  const handleReady = () => {
    setIsReady(true);
  };
  useEffect(() => {
    if (isFirstRender.current) setFirstRender(true);
    else setFirstRender(false);
  }, []);
  useEffect(() => {
    setIsReady(false);
  }, [videoUrl]);

  return (
    <div className="flex flex-col">
      <TitleUnderline title={strings.title} />
      <div className="grid grid-cols-6 w-full h-full gap-x-3 mt-4">
        <div className=" col-span-6 md:col-span-4 md:col-start-2 border-p-brown bg-p-brown border-4  rounded-lg relative">
          {!isReady && firstRender && <Spinner />}
          <ResponsivePlayer url={videoUrl} controls={true} onReady={handleReady} />
        </div>
        <div className="col-span-6 md:col-span-1 flex flex-col items-center justify-center">
          <SuggestionContainer setVideoUrl={setVideoUrl} />
        </div>
      </div>
    </div>
  );
};

export default Radio;

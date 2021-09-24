import Arrow from 'assets/icons/down_arrow.png';
import { LeftArrow, RightArrow } from 'components/UI/Arrows';
import { videosApiCRUDRequests } from 'features/videos/api';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { useFetchData } from 'lib/reactQuery';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import VideoThumbnail from './VideoThumbnail';

function UpArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={
        className +
        ` transform -translate-x-1/2 translate-y-5 transition-all scale-300 hover:scale-350 hover:translate-y-7 `
      }
      style={{ ...style, left: '50%', right: 0, top: '100%' }}
      onClick={onClick}
      alt=""
      src={Arrow}
    />
  );
}
function DownArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={
        className +
        ` transform -translate-x-1/2 transition-all -translate-y-8 rotate-180 scale-300 hover:scale-350 hover:-translate-y-10   `
      }
      style={{ ...style, left: '50%', right: 0, bottom: 0, top: 0 }}
      onClick={onClick}
      alt=""
      src={Arrow}
    />
  );
}

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  nextArrow: <DownArrow />,
  prevArrow: <UpArrow />,
};

const SuggestionContainer = ({ setVideoUrl }) => {
  const { data, isLoading, error } = useFetchData(videosApiCRUDRequests.read(null, { page: 0, limit: 5 }));
  const [currentVideo, setCurrentVideo] = useState();

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 640) {
      sliderSettings.slidesToShow = 1;
      sliderSettings.nextArrow = <LeftArrow />;
      sliderSettings.prevArrow = <RightArrow />;
      sliderSettings.vertical = false;
    }
  }, [width]);

  useEffect(() => {
    if (data)
      if (data.payload.length > 0) {
        setVideoUrl(data.payload[0].url);
        setCurrentVideo(data.payload[0]);
      }
  }, [data, setVideoUrl]);

  const handleThumbnailClick = item => {
    setVideoUrl(item.url);
    setCurrentVideo(item);
  };
  return (
    <div className="px-16 w-full sm:px-0">
      <Slider {...sliderSettings}>
        {data &&
          data.payload &&
          data.payload
            .filter(vid => vid !== currentVideo)
            .map((item, i) => <VideoThumbnail data={item} key={item._id} onClick={handleThumbnailClick} />)}
      </Slider>
    </div>
  );
};

export default SuggestionContainer;

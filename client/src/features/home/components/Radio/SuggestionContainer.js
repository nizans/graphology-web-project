import ResponsiveSlider from 'components/common/ResponsiveSlider/ResponsiveSlider';
import { DimensionsContext } from 'context/DimensionsContext';
import { videosApiCRUDRequests } from 'features/videos/api';
import { useFetchData } from 'lib/reactQuery';
import React, { useContext, useEffect, useState } from 'react';
import VideoThumbnail from './VideoThumbnail';

const SuggestionContainer = ({ setVideoUrl }) => {
  const { data, isLoading, error, isSuccess } = useFetchData(videosApiCRUDRequests.read(null, { page: 0, limit: 8 }));
  const [currentVideo, setCurrentVideo] = useState();
  const { windowWidth: width } = useContext(DimensionsContext);

  useEffect(() => {
    if (data?.payload.length > 0) {
      setVideoUrl(data.payload[0].url);
      setCurrentVideo(data.payload[0]);
    }
  }, [data, setVideoUrl]);

  const handleThumbnailClick = item => {
    setVideoUrl(item.url);
    setCurrentVideo(item);
  };

  if (error) return '';
  if (isLoading) return '';
  if (isSuccess) {
    if (isSuccess && data.payload.length <= 4)
      return data.payload
        .filter(vid => vid !== currentVideo)
        .map(item => (
          <div className="col-span-1 lg:col-span-3">
            <VideoThumbnail
              playButtonSize={width < 1024 ? 25 : 50}
              withTitle={width < 1024 ? false : true}
              data={item}
              key={item._id}
              onClick={handleThumbnailClick}
            />
          </div>
        ));

    return (
      <ResponsiveSlider verticalOnLargeScreen={true}>
        {data.payload
          .filter(vid => vid !== currentVideo)
          .map(item => (
            <div class="px-4 sm:px-12 mx-auto lg:px-0">
              <VideoThumbnail withTitle={false} data={item} key={item._id} onClick={handleThumbnailClick} />
            </div>
          ))}
      </ResponsiveSlider>
    );
  }
};

export default SuggestionContainer;

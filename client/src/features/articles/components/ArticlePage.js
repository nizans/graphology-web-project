import ImageBox from 'components/common/ImageBox';
import Section from 'components/common/Section';
import Underline from 'components/UI/Underline';
import { BreadCrumbsTitleContext } from 'context/breadCrumbsTitleContext';
import parse from 'html-react-parser';
import React, { useContext, useEffect } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { useFetchData, useMutateData } from 'lib/reactQuery';
import { toDate } from 'utils/toDate';
import { articlesApiCRUDRequests } from '..';
import ErrorSection from 'components/UI/ErrorSection';
import LoadingSection from 'components/UI/LoadingSection';
import useWindowDimensions from 'hooks/useWindowDimensions';
import ButtonsCell from 'components/UI/ButtonsCell';
import { AuthContext } from 'context/authContext';

const strings = { articleFrom: 'כתבה מתוך: ', publishedAt: 'פורסם בתאריך: ', originalLink: 'לכתבה המקורית' };

const ArticlePage = () => {
  const { id } = useParams();
  const { data: item, isLoading, error } = useFetchData(articlesApiCRUDRequests.read(id));
  const { setTitle } = useContext(BreadCrumbsTitleContext);
  const { height } = useWindowDimensions();
  const { isAuth } = useContext(AuthContext);
  const { mutate, isLoading: isMutating, isSuccess: isDeleteSuccess } = useMutateData(articlesApiCRUDRequests.delete);

  useEffect(() => {
    if (!isLoading && item) setTitle(item._id, item.title);
  }, [item]);

  const handleDelete = () => {
    mutate({ uri: id });
  };

  if (error) return <ErrorSection error={error} />;
  if (item) {
    const { title, text, publishDate, images, sourceFrom, sourceURL } = item;
    const date = strings.publishedAt + toDate(publishDate);
    const pNodes = parse(text);

    return isLoading || isMutating ? (
      <LoadingSection />
    ) : isDeleteSuccess ? (
      <Redirect to="/home/articles" />
    ) : (
      <Section className="flex flex-col items-center mb-9">
        {isAuth && <ButtonsCell onDelete={handleDelete} withPreview={false} _id={id} type={'articles'} />}
        <div className="text-center">
          <h1 className="_text-bold-dark-7xl">{title}</h1>
          <h3 className="_text-3xl font-light">{strings.articleFrom + sourceFrom}</h3>
          <Underline thickness={4} />
        </div>
        <div className="w-10/12 my-4">
          <ImageBox
            sliderWrapperClassName="lg:px-8"
            imgStyle={{ objectFit: 'contain' }}
            images={images}
            height={height < 600 ? height - 120 : 600}
          />
        </div>

        <div className="my-4 _text-3xl">{pNodes}</div>
        <div className="_text-3xl font-light mr-auto mt-8">
          <h3>{date}</h3>
          <a className="underline" href={sourceURL}>
            {strings.originalLink}
          </a>
        </div>
      </Section>
    );
  }

  return <Section>Loading</Section>;
};

export default ArticlePage;

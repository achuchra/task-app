import React, { ReactElement, useState, useEffect, useRef, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { animateScroll } from 'react-scroll';
import { getUsersAction } from '../store/actions/user-actions';
import setSeedAction from '../store/actions/seed-actions';
import useDebounce from '../hooks/useDebounce';
import useVisible from '../hooks/useVisible';
import useScrollPosition from '../hooks/useScrollPosition';

import Warning from '../components/atoms/warning/Warning';
import Heading from '../components/atoms/heading/Heading';
import Header from '../components/molecules/header/Header';
import Caption from '../components/atoms/caption/Caption';
import Input from '../components/atoms/input/Input';
import Button from '../components/atoms/button/Button';
import Card from '../components/molecules/card/Card';
import GridTemplate from '../templates/GridTemplate';

import { ReactComponent as ArrowUpIcon } from '../assets/svg/arrow-up.svg';
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';
import { ActionWithPayload } from '../store/action-with-payload.interface';
import placeholder from '../assets/icon-placeholder.png';
import { APP_HEADING, SEARCH_BY_SEED, CURRENT_SEED, ERROR_OCCURED, LOADING_DATA } from '../constants';
import './main.scss';

const Main = (): ReactElement => {
  const dispatch = useDispatch();
  const currState = useSelector((state: TAppState) => state);
  const {
    users: {
      users: { results, fetched, error, page },
    },
    seed: { currentSeed },
  } = currState;
  const [searchValue, setSearchValue] = useState<string>(currentSeed);
  const scrollReached = useScrollPosition(1000);
  const searchedValue = useDebounce(searchValue, 1000);
  const [setRef, visible] = useVisible();

  const getUsersCallback = (): ActionWithPayload<IUserActionPayload> => {
    return dispatch(getUsersAction(currentSeed, page + 1, true));
  };

  const savedCallback = useRef<typeof getUsersCallback>(getUsersCallback);

  useEffect(() => {
    savedCallback.current = getUsersCallback;
  });

  useEffect(() => {
    if (visible) {
      savedCallback.current();
    }
  }, [visible]);

  useEffect(() => {
    dispatch(getUsersAction(currentSeed, 1));
  }, [currentSeed, dispatch]);

  useEffect(() => {
    dispatch(setSeedAction(searchedValue));
  }, [searchedValue, dispatch]);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const userCard = ({ name: { title, first, last }, location, picture }: IUser, index: number) => {
    return (
      <Card
        key={index}
        src={picture.large}
        alt={`${first}-${last}`}
        title={title}
        first={first}
        last={last}
        location={location.country}
      />
    );
  };

  const placeholderCard = (item: undefined, index: number) => {
    return <Card key={index} src={placeholder} title={LOADING_DATA} location="-" />;
  };

  return (
    <>
      <Header>
        <Heading text={APP_HEADING} />
      </Header>
      <main className="content">
        <div className="search">
          <div className="search__input-wrapper">
            <Input name="search" type="text" placeholder={SEARCH_BY_SEED} onChange={handleSearchInputChange} />
            <SearchIcon />
          </div>
          <Caption variant="big" text={`${CURRENT_SEED} ${currentSeed}`} />
        </div>
        {error && <Warning text={ERROR_OCCURED} />}
        {!error && !fetched && <GridTemplate>{Array.from(Array(15)).map(placeholderCard)}</GridTemplate>}
        {fetched && results.length && (
          <>
            <GridTemplate>{results.map(userCard)}</GridTemplate>
            <div ref={setRef} className="loader" />
          </>
        )}
      </main>
      <Button show={scrollReached} fixed onClick={() => animateScroll.scrollToTop()}>
        <ArrowUpIcon />
      </Button>
    </>
  );
};

export default Main;

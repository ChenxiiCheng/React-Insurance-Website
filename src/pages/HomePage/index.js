import React, { Fragment } from 'react';
import { Header } from '../../components/Header';
import { FirstRowShow } from '../../components/FirstRowShow';
import { SecondPanel } from '../../components/SecondPanel';
import { ThirdRowCard } from '../../components/ThirdRowCard';
import { FourRow } from '../../components/FourRow';
import { FooterCom } from '../../components/Footer';

export const HomePage = () => {
  return (
    <Fragment>
      <Header logo={'home'} />
      <FirstRowShow type={'home'} />
      <SecondPanel />
      <ThirdRowCard type={'Home'} />
      <FourRow />
      <FooterCom />
    </Fragment>
  );
};

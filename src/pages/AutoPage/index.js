import React, { Fragment } from 'react';
import { Header } from '../../components/Header';
import { FirstRowShow } from '../../components/FirstRowShow';
import { PicPanel } from '../../components/PicPanel';
import { FifthRow } from '../../components/FifthRow';
import { FooterCom } from '../../components/Footer';

export const AutoPage = () => {
  return (
    <Fragment>
      <Header logo={'auto'} />
      <FirstRowShow type={'auto'} />
      <PicPanel />
      <FifthRow />
      <FooterCom />
    </Fragment>
  );
};

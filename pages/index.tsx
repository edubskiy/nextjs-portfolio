import Head from 'next/head';
import React from 'react';
import { Layout } from '../components/layout/layout.component';
import { SectionIntro } from '../sections/intro/section-intro.component';

import * as S from './index.styles';

export default function Home() {
  return (
    <S.App>
      <Head>
        <link
          href='http://fonts.googleapis.com/css?family=Lato:400,700'
          rel='stylesheet'
          type='text/css'
        />
      </Head>
      <Layout>
        <SectionIntro />
      </Layout>
    </S.App>
  );
}

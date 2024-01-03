import React, { FC } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import Account from '@/components/pages/account';


const Component: FC = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Account />
    </>
  )
}

const Page: NextPage = () => {
  return <Component />;
};

export default Page;


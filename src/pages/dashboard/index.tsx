import React, { FC } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Dashboard } from '@/components/pages/dashboard';


const Component: FC = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Dashboard />
    </>
  )
}

const Page: NextPage = () => {
  return <Component />;
};

export default Page;


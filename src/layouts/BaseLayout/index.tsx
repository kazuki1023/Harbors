import React, { ReactNode } from 'react';
import Header from '@/layouts/BaseLayout/Header';
import Footer from '@/layouts/BaseLayout/Footer';

interface BaseLayoutProps {
    children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
    return (
        <>
            <Header />
            <main className="bg-gray-100 dark:bg-gray-900">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default BaseLayout;

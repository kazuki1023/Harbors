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
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default BaseLayout;

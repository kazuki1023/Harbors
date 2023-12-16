import React, { ReactNode } from 'react';

interface BaseLayoutProps {
    children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
    return <div>{children}</div>;
}

export default BaseLayout;

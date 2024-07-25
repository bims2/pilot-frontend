import React from 'react';
import Header from '@layouts/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="flex gap-5 max-w-7xl w-full mx-auto">
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    );
};

export default Layout;
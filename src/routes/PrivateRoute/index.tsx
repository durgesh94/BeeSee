import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { Dashboard } from '../../pages/Dashboard';
import { About } from '../../pages/About';
import { NotFound } from '../../components/shared/NotFound';
import { Layout } from '../../components/layout';

export const PrivateRoutes: React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route path="" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Outlet />
        </Layout>
    );
};
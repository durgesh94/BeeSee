import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound } from '../../components/shared/NotFound';
import { SignIn } from '../../pages/SignIn';
import { SignUp } from '../../pages/SignUp';

export const PublicRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};
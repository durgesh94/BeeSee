import React, { useEffect, useState } from 'react';
import { PublicRoutes } from './PublicRoute';
import { PrivateRoutes } from './PrivateRoute';

export const Routes: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(true);
    });

    if (isLoggedIn) {
        return <PrivateRoutes />
    }
    return (
        <PublicRoutes />
    );
};
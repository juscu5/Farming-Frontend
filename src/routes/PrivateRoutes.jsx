import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserList } from '../redux/auth/selectors';

const rolesConfig = {
  ADMIN: [
    '/ph-farming/dashboard',
    '/ph-farming/submit-form',
    '/ph-farming/tracker',
    '/ph-farming/rfp',
    '/ph-farming/cost-savings',
    '/ph-farming/client',
    '/ph-farming/user',
  ],
  OWNER: [
    '/ph-farming/dashboard',
    '/ph-farming/submit-form',
    '/ph-farming/tracker',
    '/ph-farming/rfp',
    '/ph-farming/cost-savings',
  ]
}

const PrivateRoutes = ({ element }) => {
  const location = useLocation();
  const userRole = useSelector(selectUserList);

  const isAuthenticated = () => {
    const allowedRoutes = rolesConfig[userRole] || [];
    return allowedRoutes.includes(location.pathname);
  };

  return isAuthenticated() ? (
    element
  ) : (
    <Navigate
      to="/ph-farming/"
      replace
      state={{ from: location.pathname }}
    />
  );
}

export default PrivateRoutes;
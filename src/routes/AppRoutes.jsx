import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../components/atoms/Loading';
import RootLayout from './RootLayout';
import { getCsrf, rehydrate } from '../redux/auth/effects';
import { useDispatch } from 'react-redux';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes'

const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const SubmitForm = lazy(() => import('../pages/SubmitForm/SubmitForm'));
const Tracker = lazy(() => import('../pages/Tracker/Tracker'));
const Rfp = lazy(() => import('../pages/RFP/Rfp'));
const CostSavings = lazy(() => import('../pages/CostSavings/CostSavings'));
const Client = lazy(() => import ('../pages/Client/Client'));
const User = lazy(() => import ('../pages/User/User'));
const Login = lazy(() => import ('../pages/Login/Login'));

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCsrf());
    dispatch(rehydrate());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/ph-farming/login" element={<PublicRoutes element={<Login/>}/>}/>
        <Route path="/ph-farming" element={<PublicRoutes element={<Login/>}/>}/>
        <Route path="/ph-farming" element={<RootLayout/>}>
          <Route path="dashboard" element={<PrivateRoutes element={<Dashboard/>}/>}/>
          <Route path="submit-form" element={<PrivateRoutes element={<SubmitForm/>}/>}/>
          <Route path="tracker" element={<PrivateRoutes element={<Tracker/>}/>}/>
          <Route path="rfp" element={<PrivateRoutes element={<Rfp/>}/>}/>
          <Route path="cost-savings" element={<PrivateRoutes element={<CostSavings/>}/>}/>
          <Route path="client" element={<PrivateRoutes element={<Client/>}/>}/>
          <Route path="user" element={<PrivateRoutes element={<User/>}/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
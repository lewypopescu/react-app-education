import React, { Suspense, lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import LoadingPage from '../pages/LoadingPage/LoadingPage';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

// import data from '../utils/data.json';

import { fetchUniversities, fetchTutors } from '../redux/operations';

import { refreshUser } from '../api/authAPI';

const LazyHomePage = lazy(() => import('../pages/HomePage/HomePage'));

const LazyUniversitiesPage = lazy(() =>
  import('../pages/UniversitiesPage/UniversitiesPage')
);

const LazyTutorsPage = lazy(() => import('../pages/TutorsPage/TutorsPage'));

const LazyLoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

const LazyRegisterPage = lazy(() =>
  import('../pages/RegisterPage/RegisterPage')
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUniversities());
    dispatch(fetchTutors());
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Sidebar />
      <main className="main">
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  component={<LazyLoginPage />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  component={<LazyRegisterPage />}
                />
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyHomePage />}
                />
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyHomePage />}
                />
              }
            />
            <Route
              path="/tutors"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyTutorsPage />}
                />
              }
            />
            <Route
              path="/universities"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyUniversitiesPage />}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

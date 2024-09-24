import React, { Suspense, lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import HistoryContent from '../components/HistoryContent/HistoryContent';
import DescriptionContent from '../components/DescriptionContent/DescriptionContent';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import LoadingPage from '../pages/LoadingPage/LoadingPage';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

// import data from '../utils/data.json';

import { fetchFaculties, fetchTutors } from '../redux/operations';

const LazyUniversityPage = lazy(() =>
  import('../pages/UniversityPage/UniversityPage')
);

const LazyFacultiesPage = lazy(() =>
  import('../pages/FacultiesPage/FacultiesPage')
);

const LazyFacultyContent = lazy(() =>
  import('./FacultyContent/FacultyContent')
);

const LazyLoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

const LazyRegisterPage = lazy(() =>
  import('../pages/RegisterPage/RegisterPage')
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFaculties());
    dispatch(fetchTutors());
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
                  redirectTo="/university"
                  component={<LazyLoginPage />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/university"
                  component={<LazyRegisterPage />}
                />
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyUniversityPage />}
                />
              }
            />
            <Route
              path="/university"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyUniversityPage />}
                />
              }
            />
            <Route
              path="/faculties"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyFacultiesPage />}
                />
              }
            />
            <Route
              path="/faculties/:facultyName"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyFacultyContent />}
                />
              }
            >
              <Route path="" element={<DescriptionContent />} />
              <Route path="description" element={<DescriptionContent />} />
              <Route path="history" element={<HistoryContent />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

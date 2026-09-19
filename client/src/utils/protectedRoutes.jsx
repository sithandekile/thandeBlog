import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

export const ProtectedRoutes = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return <div className="flex min-h-[40vh] items-center justify-center text-slate-500">Checking your session...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace state={{ from: location.pathname }} />;
  }

  return children;
};
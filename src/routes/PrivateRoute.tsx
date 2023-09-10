import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const token = localStorage.getItem('accessToken');
  const { pathname } = useLocation();

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  if (!token) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  } else {
    return children;
  }
}

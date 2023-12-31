// components/ProtectedRoute.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../services/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login'); // Use replace instead of push to avoid the NextRouter error
    }
  }, [router]);

  // Render the children if the user is authenticated
  return isAuthenticated() ? <>{children}</> : null;
};

export default ProtectedRoute;

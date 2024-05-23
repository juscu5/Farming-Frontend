import { selectUserList } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ element }) => {
  const userRole = useSelector(selectUserList);

  if (!userRole) {
    return element;
  } else {
    return <Navigate to="/ph-farming/dashboard" replace />;
  }
};

export default PublicRoute;
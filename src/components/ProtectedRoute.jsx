import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth.curUser)

  useEffect(() => {
    if (!auth) {navigate('/login')}
  }, [auth, navigate]);

  return <>{children}</>
};
export default ProtectedRoute
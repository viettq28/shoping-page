import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// Chuyển hướng người dùng đến LoginPage nếu người dùng truy cập vào các Route không cho phép
const ProtectedRoute = () => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth.curUser)

  useEffect(() => {
    if (!auth) {navigate('/login')}
  }, [auth, navigate]);

  return <Outlet />
};
export default ProtectedRoute
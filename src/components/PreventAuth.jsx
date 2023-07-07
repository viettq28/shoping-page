import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// Ngăn người dùng truy cập trang Login hoặc Regíter nếu người dùng đã đăng nhập
const PreventAuth = () => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth.curUser)

  useEffect(() => {
    if (auth) {navigate('/')}
  }, [auth, navigate]);

  return <Outlet />
};
export default PreventAuth
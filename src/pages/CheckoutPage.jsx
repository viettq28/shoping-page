import { useSelector } from "react-redux";
import { useRouteLoaderData } from "react-router-dom";

const CheckoutPage = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart);
  return <>
    
  </>
};
export default CheckoutPage
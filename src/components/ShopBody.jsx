import { useParams } from "react-router-dom";

import SideMenu from "./SideMenu";
import ProductList from "./ProductList";

const ShopBody = () => {
  const { category: curCat } = useParams();

  return <div className="flex my-6 gap-6">
    <SideMenu />
    <ProductList curCat={curCat}/>
  </div>
};
export default ShopBody
import { useParams, useRouteLoaderData } from "react-router-dom";

import DetailMain from "../components/DetailMain";
import DetailDescription from "../components/DetailDescription";
import DetailRelatedList from "../components/DetailRelatedList";
import ScrollToTop from "../utilComponents/ScrollToTop";

// Lấy productId để truyền product tương ứng, và array các product cùng category cho component
const DetailPage = () => {
  const { productId } = useParams();
  const products = useRouteLoaderData('root');
  const foundProduct = products.find(product => product.id === productId);
  const relatedList = products.filter(product => product.category === foundProduct.category & product !== foundProduct)

  return <>
    <DetailMain product={foundProduct}/>
    <DetailDescription desc={foundProduct.long_desc}/>
    <DetailRelatedList list={relatedList}/>
    <ScrollToTop />
  </>
};
export default DetailPage
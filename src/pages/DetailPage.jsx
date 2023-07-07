import { useParams, useRouteLoaderData } from "react-router-dom";

import DetailMain from "../components/DetailMain";
import DetailDescription from "../components/DetailDescription";
import DetailRelatedList from "../components/DetailRelatedList";

const DetailPage = () => {
  const { productId } = useParams();
  const products = useRouteLoaderData('root');
  const foundProduct = products.find(product => product.id === productId);
  const relatedList = products.filter(product => product.category === foundProduct.category & product !== foundProduct)

  return <>
    <DetailMain product={foundProduct}/>
    <DetailDescription desc={foundProduct.long_desc}/>
    <DetailRelatedList list={relatedList}/>
  </>
};
export default DetailPage
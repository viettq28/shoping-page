import { useParams, useRouteLoaderData } from "react-router-dom";

import MainDetail from "../components/MainDetail";
import Description from "../components/Description";
import RelatedList from "../components/RelatedList";

const DetailPage = () => {
  const { productId } = useParams();
  const products = useRouteLoaderData('root');
  const foundProduct = products.find(product => product.id === productId);
  const relatedList = products.filter(product => product.category === foundProduct.category & product !== foundProduct)

  return <>
    <MainDetail product={foundProduct}/>
    <Description desc={foundProduct.long_desc}/>
    <RelatedList list={relatedList}/>
  </>
};
export default DetailPage
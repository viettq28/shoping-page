import { useParams, useRouteLoaderData } from "react-router-dom";
import getPrice from "../tools/getPriceFromString";

import MainDetail from "../components/MainDetail";
import Description from "../components/Description";
import RelatedList from "../components/RelatedList";

const DetailPage = () => {
  const { productId } = useParams();
  const products = useRouteLoaderData('root');
  const foundProduct = products.find(product => product.id === productId);
  const finProduct = {...foundProduct, price: getPrice(foundProduct.price)}
  const relatedList = products.filter(product => product.category === finProduct.category & product !== foundProduct)

  return <>
    <MainDetail product={finProduct}/>
    <Description desc={finProduct.long_desc}/>
    <RelatedList list={relatedList}/>
  </>
};
export default DetailPage
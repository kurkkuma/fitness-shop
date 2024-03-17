import { useParams } from "react-router-dom";
import "./product_page.scss";
import data from "../../../../data.json";
import Header from "../../header/Header";
import ProductInfo from "./productInfo/ProductInfo";
import Footer from "../../footer/Footer";
import ProductsOffered from "./productsOffered/ProductsOffered";
import ProductReviews from "./productReviews/ProductReviews";

type ReviewType = {
  id: number;
  avatar: string;
  stars: number;
  name: string;
  review: string;
};
export type ProductType = {
  id: number;
  title: string;
  preview: string;
  images: string[];
  price: number;
  division?: string;
  type: string;
  number_of_colors?: number;
  colors?: string[];
  sizes?: string[];
  weight?: number;
  descriptions: string[];
  reviews: ReviewType[];
};

function ProductPage() {
  const { id } = useParams();
  let product: ProductType | undefined;

  if (id) {
    product = data.products.find((item) => item.id === +id);
  }
  if (product) {
    return (
      <div className="conatiner-product-page">
        <Header />
        <p className="path">
          головна - чоловіки - одяг - {product.division} - {product.title}
        </p>
        <ProductInfo product={product} />
        <ProductReviews product={product} />
        <ProductsOffered />
        <Footer />
      </div>
    );
  }
}

export default ProductPage;

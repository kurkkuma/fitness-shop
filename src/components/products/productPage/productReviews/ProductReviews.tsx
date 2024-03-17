import Carousel from "../../../carousel/Carousel";
import "./product_reviews.scss";
import { ProductType } from "../ProductPage";
import ReviewCard from "../../../reviews/reviewCard/ReviewCard";

type ProductInfoProps = {
  product: ProductType;
};

function ProductReviews({ product }: ProductInfoProps) {
  return (
    <div className="container-product-reviews">
      <Carousel
        itemWidth={270}
        itemGap={80}
        elementsPerGroup={4}
        title={`Відгуки про товар (${product.reviews.length})`}
      >
        <div className="add-review">
          <img src="icons/plus.png" alt="add review icon" />
        </div>
        {product.reviews.map((item) => {
          return (
            <ReviewCard
              key={item.id}
              avatar={item.avatar}
              stars={item.stars}
              name={item.name}
              review={item.review}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default ProductReviews;

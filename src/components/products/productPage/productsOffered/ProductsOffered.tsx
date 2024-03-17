import ProductCard from "../../productCard/ProductCard";
import "./products_offered.scss";
import data from "../../../../../data.json";
import { useState } from "react";

function ProductsOffered() {
  const [visibleProducts, setVisibleProducts] = useState(3);

  const handleShowMore = () => {
    setVisibleProducts(data.products.length);
  };

  return (
    <div className="container-offered">
      <h1 className="section-title">Ще може сподобатись</h1>
      <div>
        <div className="offered">
          {data.products.slice(0, visibleProducts).map((item) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                preview={item.preview}
                title={item.title}
                type={item.type}
                number_of_colors={item.number_of_colors}
                weight={item.weight}
                price={item.price}
              />
            );
          })}
        </div>

        {visibleProducts < data.products.length && (
          <div className="show-more">
            <p>дивитись більше</p>
            <img
              onClick={handleShowMore}
              src="icons/down.png"
              alt="show more icon"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsOffered;

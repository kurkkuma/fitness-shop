import Carousel from "../carousel/Carousel";
import ProductCard from "./productCard/ProductCard";
import "./products.scss";
import data from "../../../data.json";

function Products() {
  return (
    <div className="container-products">
      <Carousel
        itemWidth={369}
        itemGap={80}
        elementsPerGroup={3}
        title="Найгарячіші товари"
      >
        {data.products.map((item) => {
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
      </Carousel>
    </div>
  );
}

export default Products;

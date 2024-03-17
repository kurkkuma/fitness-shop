import { Link } from "react-router-dom";
import "./product_card.scss";

type ProductProps = {
  id: number;
  preview: string;
  title: string;
  type: string;
  number_of_colors?: number;
  weight?: number;
  price: number;
};

function ProductCard({
  id,
  preview,
  title,
  type,
  number_of_colors,
  weight,
  price,
}: ProductProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      to={`/${id}`}
      style={{
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
      }}
      onClick={scrollToTop}
    >
      <div className="container-card">
        <div className="container-img">
          <img
            className="heart"
            src="icons/heart-circle.png"
            alt="heart icon"
          />
          <img
            className="card-img"
            src={preview}
            alt={`photo of ${title} product`}
          />
        </div>
        <h1>{title}</h1>
        <p>{type}</p>
        {number_of_colors && <p>{number_of_colors} кольори</p>}
        {weight && <p>{weight} кг</p>}
        <p className="price">{price} грн.</p>
      </div>
    </Link>
  );
}

export default ProductCard;

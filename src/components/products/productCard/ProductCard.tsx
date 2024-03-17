import "./product_card.scss";

type ProductProps = {
  preview: string;
  title: string;
  type: string;
  number_of_colors?: number;
  price: number;
};

function ProductCard({
  preview,
  title,
  type,
  number_of_colors,
  price,
}: ProductProps) {
  return (
    <div className="container-card">
      <div className="container-img">
        <img className="heart" src="icons/heart-circle.png" alt="heart icon" />
        <img
          className="card-img"
          src={preview}
          alt={`photo of ${title} product`}
        />
      </div>
      <h1>{title}</h1>
      <p>{type}</p>
      <p>{number_of_colors} кольори</p>
      <p className="price">{price} грн.</p>
    </div>
  );
}

export default ProductCard;

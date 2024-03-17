import { useParams } from "react-router-dom";
import "./product_page.scss";
import data from "../../../../data.json";
import Header from "../../header/Header";

type ProductType = {
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
        <div className="product-full-info">
          <div className="images">
            <img
              className="main-img"
              src={product.images[0]}
              alt={`product image ${product.title}`}
            />
            <div className="group-img">
              <img
                src={product.images[0]}
                alt={`product image ${product.title}`}
              />
              <img
                src={product.images[1]}
                alt={`product image ${product.title}`}
              />
              <img
                src={product.images[2]}
                alt={`product image ${product.title}`}
              />
            </div>
          </div>

          <div className="container-info">
            <div className="info">
              <h1 className="product-name">{product.title}</h1>
              <p className="product-division">{product.division}</p>
              <p className="product-price">{product.price} грн.</p>

              {product.sizes && (
                <div>
                  <p className="choice">оберіть розмір</p>
                  <div className="sizes">
                    {product.sizes.map((item) => {
                      return (
                        <div className="size" key={item}>
                          <p>{item}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {product.colors && (
                <div>
                  <p className="choice">оберіть колір</p>
                  <div className="colors">
                    {product.colors.map((item) => {
                      return (
                        <div
                          className="color"
                          style={{ backgroundColor: `${item}` }}
                          key={item}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              )}

              <p className="info-title">інформація про товар</p>

              <div className="description">
                {product.descriptions.map((item, index) => {
                  const splitText = item.split(". ");
                  const title = splitText[0] + ".";
                  const text = splitText.slice(1).join(". ");

                  return (
                    <div key={index}>
                      <p className="title">{title}</p>
                      <p className="text">{text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="purchase">
              <div className="buttons">
                <button>оформити замовлення</button>
                <button>купити у кредит</button>
              </div>
              <div className="icons">
                <img src="icons/heart.svg" alt="heart icon" />
                <img src="icons/bag.svg" alt="bag icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;

import Carousel from "../carousel/Carousel";
import ReviewCard from "./reviewCard/ReviewCard";
import "./reviews.scss";
import data from "../../../data.json";

function Reviews() {
  return (
    <div className="container-reviews">
      <Carousel
        itemWidth={270}
        itemGap={80}
        elementsPerGroup={4}
        title="Відгуги наших клієнтів"
      >
        {data.reviews.map((item) => {
          return (
            <ReviewCard
              key={item.id}
              avatar={item.avatar}
              stars={item.stas}
              name={item.name}
              review={item.review}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default Reviews;

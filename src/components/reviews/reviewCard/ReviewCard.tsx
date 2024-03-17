import "./review_card.scss";

type ReviewProps = {
  avatar: string;
  stars: number;
  name: string;
  review: string;
};

function ReviewCard({ avatar, stars, name, review }: ReviewProps) {
  return (
    <div className="container-review">
      <header>
        <img src={avatar} alt="user avatar" />
        <div className="review-info">
          <p className="stars">{"★".repeat(stars) + "☆".repeat(5 - stars)}</p>
          <p className="user-name">{name}</p>
        </div>
      </header>
      <p className="review-text">{review}</p>
    </div>
  );
}

export default ReviewCard;

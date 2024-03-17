import "./hero.scss";

function Hero() {
  return (
    <div className="container-hero">
      <div className="info">
        <h1>Ми знаємо, що сподобається вашим “великим” друзям!</h1>
        <p>
          Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
          термобілизни “Big warm”
        </p>
        <button>До каталогу</button>
      </div>
      <img src="hero.jpeg" alt="hero photo" />
    </div>
  );
}

export default Hero;

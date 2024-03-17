import "./header.scss";

function Header() {
  return (
    <header>
      <div className="container-balck">
        <div className="info">
          <p>098 900 09 09</p>
          <p className="help">Допомога</p>
        </div>
        <div className="auth">
          <p>
            <span>Увійти</span> / <span>Зареєструватися</span>
          </p>
        </div>
      </div>

      <div className="container-white">
        <p className="logo">Ignat</p>
        <ul className="categories">
          <li>Новинки</li>
          <li>Чоловіки</li>
          <li>Жінки</li>
          <li>Аксесуари</li>
          <li>Акції</li>
        </ul>

        <div className="container-search">
          <div className="search">
            <div>
              <img src="icons/search-vector.svg" alt="search icon" />
            </div>
            <input type="text" />
          </div>
          <img src="icons/bag.svg" alt="bag icon" />
          <img src="icons/heart.svg" alt="heart icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;

import "./footer.scss";

function Footer() {
  return (
    <div className="container-footer">
      <div className="white">
        <div className="section contacts">
          <h1>Контакт - центр</h1>
          <ul>
            <li>098 900 09 09 </li>
            <li>Пн - Пт 09:00 - 21:00</li>
            <li>Пн - Пт 09:00 - 21:00</li>
          </ul>
        </div>

        <div className="section">
          <h1>Покупцям</h1>
          <ul>
            <li>Оплата і доставка</li>
            <li>Повернення</li>
            <li>Питання та відповіді</li>
          </ul>
        </div>

        <div className="section">
          <h1>Особистий кабінет</h1>
          <ul>
            <li>Мої дані</li>
            <li>Історія замовлень</li>
            <li>Улюблені</li>
            <li>Розсилки</li>
          </ul>
        </div>

        <div className="section">
          <h1>Про компанію</h1>
          <ul>
            <li>Про нас</li>
            <li>Новини</li>
            <li>Стати партнером</li>
            <li>Угода користувача</li>
          </ul>
        </div>
      </div>

      <div className="black">
        <ul className="categories">
          <li>новинки</li>
          <li>чоловіки</li>
          <li>жінки</li>
          <li>аксесуари</li>
          <li>акції</li>
        </ul>
        <p>© 2022 — 2023 IGNAT. Усі права захищені.</p>
      </div>
    </div>
  );
}

export default Footer;

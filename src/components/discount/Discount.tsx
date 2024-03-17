import "./discount.scss";

function Discount() {
  return (
    <div className="container-discount">
      <div className="phtoto"></div>
      <div className="container-info">
        <div className="info-1">
          <ul className="titles">
            <li>Швидше.</li>
            <li>Вище.</li>
            <li>Сильніше.</li>
          </ul>
          <h3>Разом із Nike</h3>
        </div>
        <div className="info-2">
          <p className="discount">Знижки до 40%</p>
          <p>Залишився лише тиждень</p>
        </div>
      </div>
    </div>
  );
}

export default Discount;

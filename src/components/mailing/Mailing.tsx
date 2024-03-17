import "./mailing.scss";

function Mailing() {
  return (
    <div className="conatiner-mailing">
      <h1>Спіймай всі акції!</h1>
      <p>
        Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
        будуть з`влятись у нашому магазині. А у нас їх багато :D
      </p>
      <div className="container-input">
        <input type="text" placeholder="введіть" />
        <button>Підписатись</button>
      </div>
    </div>
  );
}

export default Mailing;

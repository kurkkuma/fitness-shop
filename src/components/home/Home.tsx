import Header from "../header/Header";
import Discount from "../discount/Discount";
import Hero from "../hero/Hero";
import Products from "../products/Products";
import Mailing from "../mailing/Mailing";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Discount />
      <Hero />
      <Products />
      <Mailing />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;

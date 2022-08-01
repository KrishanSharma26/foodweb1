import MobNavbar from '../components/Navbar/MobNavbar';
import Offers from '../components/Offers/Offers';
import ProductsDiv from '../components/Products/ProductsDiv';
import Salebox from '../components/Sale/Salebox';
import ServiceBlock from '../components/ServiceBlock/ServiceBlock';
import Slider from '../components/Slider/Slider';
export default function HomePage() {
  return (
    <>
      <MobNavbar />
      <Slider />
      <ProductsDiv category={'Deals Of The Day'} />
      <ServiceBlock />
      <ProductsDiv category={'Best Trends'} />
      <Offers />
      <ProductsDiv category={'Best Offers'} />
      <Salebox />
      <ProductsDiv category={'Best Deals'} />
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Item1 from '../../public/assets/images/1.jpg';
import Item2 from '../../public/assets/images/2.jpg';
import Item3 from '../../public/assets/images/3.jpg';
import styleSlider from './css/slider.module.css';

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className={styleSlider.container}>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        dotListClass="styleSlider.custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className={styleSlider.carouselDiv}
      >
        <Link href="#">
          <a>
            <div className={styleSlider.imageDiv}>
              <span className={styleSlider.description}>
                <h2>BIG</h2>
                <h2>DISCOUNT</h2>
                <h2>30% OFF</h2>
                <p>
                  Lorem ipsum dolor sit, amet
                  <br /> consectetur adipisicing elit. Iste, hic.
                </p>
              </span>
              <Image src={Item1} alt="Slider Image" layout="fill" />
            </div>
          </a>
        </Link>
        <Link href="#">
          <a>
            <div className={styleSlider.imageDiv}>
              <span className={styleSlider.description}>
                <h2>BIG</h2>
                <h2>DISCOUNT</h2>
                <h2>20% OFF</h2>
                <p>
                  Lorem ipsum dolor sit, amet
                  <br /> consectetur adipisicing elit. Iste, hic.
                </p>
              </span>
              <Image src={Item2} alt="Slider Image" layout="fill" />
            </div>
          </a>
        </Link>
        <Link href="#">
          <a>
            <div className={styleSlider.imageDiv}>
              <span className={styleSlider.description}>
                <h2>BIG</h2>
                <h2>DISCOUNT</h2>
                <h2>25% OFF</h2>
                <p>
                  Lorem ipsum dolor sit, amet
                  <br /> consectetur adipisicing elit. Iste, hic.
                </p>
              </span>
              <Image src={Item3} alt="Slider Image" layout="fill" />
            </div>
          </a>
        </Link>
      </Carousel>
    </div>
  );
};

export default Slider;

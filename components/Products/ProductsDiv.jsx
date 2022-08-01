import Image from 'next/image';
import Link from 'next/link';
import products from '../../constants/product';
import styleProducts from './css/productsDiv.module.css';

const productsDiv = props => {
  return (
    <div className={styleProducts.productsContainer}>
      <div className={styleProducts.productsTitle}>
        <p>{props.category}</p>
        <p>view more</p>
      </div>
      <div className={styleProducts.productsDiv}>
        {products.slice(0, 7).map(product => (
          <div key={product.id} className={styleProducts.product}>
            <span className={styleProducts.svgBlock}>
              <Link href="">
                <a>
                  <Image
                    src="/assets/svg/addWishList.svg"
                    alt="Add to Wishlist"
                    width={18}
                    height={18}
                  />
                </a>
              </Link>
              <Link href="">
                <a>
                  <Image
                    src="/assets/svg/addCart.svg"
                    alt="Add to Cart"
                    width={18}
                    height={18}
                  />
                </a>
              </Link>
            </span>
            <Image
              src={product.images[0].url}
              alt="Product Image"
              height={220}
              width={250}
            />
            <div className={styleProducts.productInfo}>
              <div className={styleProducts.info}>
                <div className={styleProducts.info1}>
                  2.4
                  <Image
                    src="/assets/svg/icons/star.svg"
                    alt="rate"
                    width={12}
                    height={12}
                  />
                </div>
                <div className={styleProducts.info2}>1.3k</div>
              </div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

productsDiv.defaultProps = {
  category: 'Best Deals',
};

export default productsDiv;

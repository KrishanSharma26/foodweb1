import Image from 'next/image';
import Link from 'next/link';
import styleFooter from './css/footer.module.css';

const Footer = () => {
  return (
    <div className={styleFooter.footer}>
      <span className={styleFooter.upperSpan}>
        <Image
          src="/assets/svg/logo.svg"
          alt="sharmastore logo"
          width={30}
          height={30}
        />
        <Link href={'/'}>
          <h2>SharmaStore</h2>
        </Link>
      </span>
      <span className={styleFooter.lowerSpan}>
        <div>
          <h3>Shop</h3>
          <Link href="#">
            <li>Mens</li>
          </Link>
          <Link href="#">
            <li>Womens</li>
          </Link>
          <Link href="#">
            <li>Boys</li>
          </Link>
          <Link href="#">
            <li>Girls</li>
          </Link>
        </div>
        <div>
          <h3>Info</h3>

          <Link href="#">
            <li>Payment Methods</li>
          </Link>
          <Link href="#">
            <li>Shipping & Return</li>
          </Link>
          <Link href="#">
            <li>Refund Policy</li>
          </Link>
          <Link href="#">
            <li>FAQs</li>
          </Link>
          <Link href="#">
            <li>Contact Us</li>
          </Link>
          <Link href="#">
            <li>Privacy Policy</li>
          </Link>
          <Link href="#">
            <li>Terms of Use</li>
          </Link>
        </div>
        <div>
          <h3>About Us</h3>
          <Link href="#">
            <li>Our Story</li>
          </Link>
          <Link href="#">
            <li>Location</li>
          </Link>
          <Link href="#">
            <li>Collaborations</li>
          </Link>
          <Link href="#">
            <li>Careers</li>
          </Link>
          <Link href="#">
            <li>Affiliate Program</li>
          </Link>
        </div>
        <div>
          <h3>Social Handles</h3>
          <span className={styleFooter.socialHandles}>
            <Link href="https://www.instagram.com/sharmastore05/">
              <a>
                <Image
                  src="/assets/svg/social-Icons/instagram.svg"
                  alt="Instagram logo"
                  width={20}
                  height={20}
                />
              </a>
            </Link>
            <Link href="#">
              <a>
                <Image
                  src="/assets/svg/social-Icons/facebook.svg"
                  alt="Facebook logo"
                  width={20}
                  height={20}
                />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/sharmastore/">
              <a>
                <Image
                  src="/assets/svg/social-Icons/twitter.svg"
                  alt="Twitter logo"
                  width={20}
                  height={20}
                />
              </a>
            </Link>
          </span>
        </div>
      </span>
    </div>
  );
};

export default Footer;

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styleNav from './css/navbar.module.css';

export default function Navbar() {
  const [showMe, setShowMe] = useState(true);
  const router = useRouter();
  const [isLoggedOrUser, setIsLoggedOrUser] = useState();
  useEffect(() => {
    const stringifiedUser = localStorage.getItem('user');
    if (stringifiedUser) setIsLoggedOrUser(JSON.parse(stringifiedUser));
  }, []);

  return (
    <div className={styleNav.Navbar}>
      <div className={styleNav.container}>
        <div className={styleNav.upperCont}>
          <span className={styleNav.title}>
            <Image
              src="/assets/svg/logo.svg"
              alt="sharmastore logo"
              width={40}
              height={40}
            />
            <Link href={'/'}>
              <h1>SharmaStore</h1>
            </Link>
          </span>
          <span className={styleNav.searchBar}>
            <div
              className={styleNav.dropdown}
              onClick={() => setShowMe(!showMe)}
            >
              <ArrowDropDownIcon
                style={{ display: showMe ? 'block' : 'none' }}
              />
              <ArrowDropUpIcon style={{ display: showMe ? 'none' : 'block' }} />
              All
            </div>
            <div
              className={styleNav.categories}
              style={{ display: showMe ? 'none' : 'flex' }}
            >
              <li>
                <Link href="#">
                  <a>Man</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Man</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Man</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Man</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Man</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Man</a>
                </Link>
              </li>
            </div>
            <input type="search" placeholder="search..." />
            <button>
              <SearchOutlinedIcon
                style={{ color: `white` }}
                sx={{ fontSize: 30 }}
              />
            </button>
          </span>

          {isLoggedOrUser ? (
            <div className={styleNav.profileContainer}>
              <AccountCircleIcon alt="profile" />
              <p>{isLoggedOrUser.fullName || isLoggedOrUser.fullname}</p>
            </div>
          ) : (
            <span className={styleNav.btn}>
              <Link href="/auth">
                <p>Login</p>
              </Link>
            </span>
          )}
        </div>
        <div className={styleNav.downCont}>
          <ul>
            <li>
              <Link href="/">
                <a
                  className={
                    router.pathname == '/'
                      ? styleNav.active
                      : styleNav.underline
                  }
                >
                  Home
                </a>
              </Link>
            </li>

            <li>
              <Link href="/newrelease">
                <a
                  className={
                    router.pathname == '/newrelease'
                      ? styleNav.active
                      : styleNav.underline
                  }
                >
                  New Releases
                </a>
              </Link>
            </li>
            <li>
              <Link href="/mens">
                <a
                  className={
                    router.pathname == '/mens'
                      ? styleNav.active
                      : styleNav.underline
                  }
                >
                  Mens
                </a>
              </Link>
            </li>
            <li>
              <Link href="/womens">
                <a
                  className={
                    router.pathname == '/womens'
                      ? styleNav.active
                      : styleNav.underline
                  }
                >
                  Womens
                </a>
              </Link>
            </li>
            <li>
              <Link href="/kids">
                <a
                  className={
                    router.pathname == '/kids'
                      ? styleNav.active
                      : styleNav.underline
                  }
                >
                  Kids
                </a>
              </Link>
            </li>
            <li>
              <Link href="/bestdeals">
                <a
                  className={
                    router.pathname == '/bestdeals'
                      ? styleNav.active
                      : styleNav.underline
                  }
                >
                  Best Deals
                </a>
              </Link>
            </li>
            <li>
              <Link href="/besttrends">
                <a
                  className={
                    router.pathname == '/besttrends'
                      ? styleNav.active
                      : styleNav.underline
                  }
                >
                  Best Trends
                </a>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link href="/myfavourite">
                <a
                  className={
                    router.pathname == '/myfavourite'
                      ? styleNav.active
                      : styleNav.underline
                  }
                >
                  My Favourite
                </a>
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <a
                  className={
                    router.pathname == '/cart'
                      ? styleNav.active
                      : styleNav.underline
                  }
                >
                  Add to cart
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shops">
                <a
                  className={
                    router.pathname == '/shops'
                      ? styleNav.active
                      : styleNav.underline
                  }
                >
                  Shops
                </a>
              </Link>
            </li>
            <li>
              <Link href="/About">
                <a
                  className={
                    router.pathname == '/About'
                      ? styleNav.active
                      : styleNav.underline
                  }
                >
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={
                    router.pathname == '/contact'
                      ? styleNav.active
                      : styleNav.underline
                  }
                >
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

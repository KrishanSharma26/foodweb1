import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styleNav from './css/navbar.module.css';
import Drawer from './Drawer';

const MobNavbar = () => {
  return (
    <div className={styleNav.mobNavbar}>
      <div className={styleNav.container}>
        <div className={styleNav.upperCont}>
          <Drawer />
          <span className={styleNav.title}>
            <Image
              src="/assets/svg/logo.svg"
              alt="sharmastore logo"
              width={60}
              height={60}
            />
            <Link href={'/'}>
              <h1>SharmaStore</h1>
            </Link>
          </span>

          <span className={styleNav.cart}>
            <Link href="/auth">
              <Image
                src="/assets/svg/icons/cart.svg"
                alt="cart"
                width={60}
                height={60}
              />
            </Link>
          </span>
        </div>
        <div className="downCont">
          <span className={styleNav.searchBar}>
            <input type="search" placeholder="search..." />
            <button>
              <SearchOutlinedIcon
                style={{ color: `white` }}
                sx={{ fontSize: 40 }}
              />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobNavbar;

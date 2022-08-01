import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styleNav from './css/navbar.module.css';

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div className={styleNav.maindrawer}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <span className={styleNav.navIcon}>
          <Image
            src="/assets/svg/icons/navicon.svg"
            alt="Navicon"
            width={60}
            height={60}
          />
        </span>
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <div className={styleNav.drawer}>
          <Box>
            <div className={styleNav.info}>
              <Image
                src="/assets/svg/logo.svg"
                alt="logo"
                width={50}
                height={50}
              />
              <p>Hello,</p>
              <p>UserName</p>
            </div>
          </Box>
          <Divider />
          <List>
            <ListItem button onClick={() => router.push('/')}>
              <ListItemText primary={'Home'} />
            </ListItem>
            <ListItem button onClick={() => router.push('/newreases')}>
              <ListItemText primary={'New Releases'} />
            </ListItem>
            <ListItem button onClick={() => router.push('/mens')}>
              <ListItemText primary={'Mens'} />
            </ListItem>
            <ListItem button onClick={() => router.push('/womens')}>
              <ListItemText primary={'Womens'} />
            </ListItem>
            <ListItem button onClick={() => router.push('/kids')}>
              <ListItemText primary={'Kids'} />
            </ListItem>
            <ListItem button onClick={() => router.push('/bestdeals')}>
              <ListItemText primary={'Best Deals'} />
            </ListItem>
            <ListItem button onClick={() => router.push('/besttrends')}>
              <ListItemText primary={'Best Trends'} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={() => router.push('/myfavourite')}>
              <ListItemText primary={'My Favourite'} />
            </ListItem>
            <ListItem button onClick={() => router.push('/shops')}>
              <ListItemText primary={'Shops'} />
            </ListItem>
            <ListItem button onClick={() => router.push('/about')}>
              <ListItemText primary={'About Us'} />
            </ListItem>
            <ListItem button onClick={() => router.push('/contact')}>
              <ListItemText primary={'Contact Us'} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;

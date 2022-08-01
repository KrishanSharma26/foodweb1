import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import styleSaleBox from './css/styleSaleBox.module.css';

const Salebox = () => {
  return (
    <MainContainer>
      <ChildContainer1 className={styleSaleBox.ChildContainer1}>
        <h2>Seasional Sale</h2>
        <p>Starting On</p>
        <p>June 19 - June 30</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi
          numquam labore, voluptatem amet soluta?
        </p>
        <button>Shop now</button>
      </ChildContainer1>
      <ChildContainer2 className={styleSaleBox.ChildContainer2}>
        <Image
          src="/assets/svg/salebox/saleImage.svg"
          alt="seasional sale"
          width={450}
          height={450}
        />
      </ChildContainer2>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 330px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(145px);
  border-radius: 8px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChildContainer1 = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 40px;
  justify-content: center;
`;
const ChildContainer2 = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  padding-top: 55px;
  align-items: center;
  justify-content: flex-end;
`;

export default Salebox;

import Image from 'next/image';
import styled from 'styled-components';
import styleOffer from './css/offers.module.css';

const Offers = () => {
  return (
    <MainContainer>
      <ChildContainer1 className={styleOffer.ChildContainer1}>
        <h2>OFFERS</h2>
        <h3>Get</h3>
        <h1>10% OFF</h1>
        <p>On your first Order</p>
        <button>Shop now</button>
      </ChildContainer1>
      <ChildContainer2 className={styleOffer.ChildContainer2}>
        <span>
          <Image
            src="/assets/svg/offer-images/first.svg"
            alt="best offer"
            width={400}
            height={350}
          />
        </span>
        <span>
          <Image
            src="/assets/svg/offer-images/second.svg"
            alt="best offer"
            width={400}
            height={350}
          />
        </span>
        <span>
          <Image
            src="/assets/svg/offer-images/third.svg"
            alt="best offer"
            width={400}
            height={350}
          />
        </span>
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
  height: 80%;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 40px;
  justify-content: center;
`;
const ChildContainer2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Offers;

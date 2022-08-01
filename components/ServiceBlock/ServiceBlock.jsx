import Image from 'next/image';
import styled from 'styled-components';
import styleService from './css/serviceblock.module.css';

const ServiceBlock = () => {
  return (
    <Maincontainer>
      <Container className={styleService.container}>
        <Cont1 className={styleService.cont1}>
          <h3>Available</h3>
          <h3>Cash on delivery</h3>
          <p>
            Pay when product arrives
            <br /> at your doorstep
          </p>
        </Cont1>
        <Cont2>
          <Image
            src="/assets/svg/servicesSvg/cod.svg"
            alt="cash on delivery"
            width={400}
            height={400}
          />
        </Cont2>
      </Container>
      <Container className={styleService.container}>
        <Cont1 className={styleService.cont1}>
          <h3>7 Day Return</h3>
          <h3>No Damage</h3>
          <p>
            Can be returned in 7 days of
            <br /> purchase only if there’s no damage
          </p>
        </Cont1>
        <Cont2>
          <Image
            src="/assets/svg/servicesSvg/return.svg"
            alt="30 day return"
            width={400}
            height={400}
          />
        </Cont2>
      </Container>
      <Container>
        <Cont1 className={styleService.cont1}>
          <h3>100% Secure Payment</h3>
          <h3>Multiple Options</h3>
          <p>
            Your info will be 100% safe and <br />
            there are multiple payment options
          </p>
        </Cont1>
        <Cont2>
          <Image
            src="/assets/svg/servicesSvg/securepay.svg"
            alt="secure payment"
            width={400}
            height={400}
          />
        </Cont2>
      </Container>
    </Maincontainer>
  );
};

const Maincontainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 70%;
  height: auto;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(145px);
  border-radius: 8px;
  margin: 10px auto;
  justify-content: space-evenly;
`;

const Container = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  padding: 10px;
`;

const Cont1 = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Cont2 = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ServiceBlock;

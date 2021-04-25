import styled from "styled-components";

const Front = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 32px;
  width: 325px;
  height: 205px;
  background: #222222;
  transition: all 0.6s cubic-bezier(0.275, 0.885, 0.32, 1.275);
  transform: rotateY(0);
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 32px;
  width: 325px;
  height: 205px;
  background: #222222;
  transition: all 0.6s cubic-bezier(0.275, 0.885, 0.32, 1.275);
  transform: rotateY(-180deg);
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const CreditCard = styled.div`
  display: block;
  width: 325px;
  height: 205px;
  border-radius: 32px;
  margin-top: 45px;
  position: relative;
  perspective: 600px;
  z-index: 2;

  &::before {
    display: block;
    border-radius: 32px;
    width: 290px;
    height: 205px;
    background: #222222;
    opacity: 0.2;
    margin: 0 auto;
    top: 10px;
    left: 18px;
    position: absolute;
    content: " ";
    z-index: 0;
  }

  &::after {
    display: block;
    border-radius: 32px;
    width: 240px;
    height: 205px;
    background: #222222;
    opacity: 0.1;
    margin: 0 auto;
    top: 20px;
    left: 40px;
    position: absolute;
    content: " ";
    z-index: 0;
  }

  &:hover {
    ${Front} {
      transform: rotateY(180deg);
    }

    ${Back} {
      transform: rotateY(0deg);
    }
  }
`;

const Chip = styled.div`
  position: absolute;
  top: 27px;
  left: 26px;
`;

const Sign = styled.div`
  position: absolute;
  top: 22px;
  left: 72px;
`;

const CardNumber = styled.div`
  position: absolute;
  top: 78px;
  left: 26px;
  color: #fff;
`;

const CardHolderLabel = styled.div`
  position: absolute;
  font-size: 6px;
  text-transform: uppercase;
  top: 146px;
  left: 26px;
  color: #fff;
`;

const CardHolder = styled.div`
  position: absolute;
  font-size: 12px;
  top: 163px;
  left: 26px;
  color: #fff;
`;

const CardBrand = styled.div`
  position: absolute;
  font-size: 12px;
  top: 113px;
  left: 236px;
  z-index: 2;
`;

const CardBrandText = styled.div`
  position: absolute;
  font-size: 9px;
  top: 166px;
  left: 236px;
  color: #fff;
  z-index: 2;
`;

const BlackBar = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  top: 50px;
  background-color: #000;

  span {
    background: #fff;
  }
`;

const SecretBar = styled.div`
  position: absolute;
  border-radius: 4px;
  width: 80%;
  top: 126px;
  left: 20px;
  height: 20px;
  background-color: #ededed;
  background-size: 20px 20px;
  background-image: repeating-linear-gradient(
    45deg,
    #ededed 0,
    #ededed 5px,
    #fff 0,
    #fff 50%
  );
  font-size: 12px;
  line-height: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default {
  CreditCard,
  Front,
  Back,
  Chip,
  Sign,
  CardNumber,
  CardHolderLabel,
  CardHolder,
  CardBrand,
  CardBrandText,
  SecretBar,
  BlackBar,
};

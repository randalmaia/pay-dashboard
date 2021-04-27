import styled from "styled-components";
import Theme from "../../styles/Theme";

const PlanShadow = styled.div`
  background: RGBA(19, 18, 28, 0.3);
  margin: 74px auto 0;
  height: 15px;
  width: 280px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  &:after {
    content: " ";
    display: block;
    position: relative;
    top: -60px;
    left: 15px;
    background: RGBA(19, 18, 28, 0.3);
    opacity: 0.2;
    height: 45px;
    width: 250px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }
  &::before {
    content: " ";
    display: block;
    position: relative;
    top: -30px;
    left: 45px;
    background: RGBA(19, 18, 28, 0.3);
    opacity: 0.1;
    height: 45px;
    width: 200px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }
`;

const Plan = styled.div`
  background: ${Theme.colors.primary};
  margin: 0px auto;
  height: 145px;
  width: 330px;
  border-radius: 30px;
  color: #fff;
  font-weight: 400;
  display: flex;
  align-items: center;
  box-shadow: 3px 18px 21px -8px rgba(0, 0, 0, 0.4);
`;

const PlanText = styled.div`
  width: 150px;
  margin: 30px 15px 30px 35px;
  font-size: 20px;

  span {
    font-size: 16px;
    color: #909090;
    margin-bottom: 8px;
    display: block;
  }
`;

const Pie = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(to right, black 0%, white 50%);
  font-size: 22px;
  font-weight: 800;
  text-align: center;
  display: flex;
  align-items: center;
  z-index: 2;
  position: relative;
  top: -3px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -21px;
    left: -14px;
    width: 140px;
    height: 140px;
    border-radius: 100%;
    clip: rect(0px, 70px, 70px, 0px);
    background: linear-gradient(20deg, #212121 0%, #d3d8da 100%);
    transform: rotate(-90deg);
  }

  span {
    width: 70px;
    height: 48px;
    padding-top: 22px;
    display: block;
    background: black;
    text-align: center;
    margin: auto;
    border-radius: 50%;
    z-index: 2;
  }
`;

export default {
  Plan,
  PlanShadow,
  PlanText,
  Pie,
};

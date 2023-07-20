import styled from "styled-components";
interface FlexBoxProps {
  direction?: string;
}
interface MediaBoxProps {
  pcWidth?: string;
  phoneWidth?: string;
}
// 设置主题色变量
const themeColor = "#4C9540";
export const Container = styled.div`
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
`;
export const Header = styled.header`
  background-color: ${themeColor};
  height: 150px;
  width: 100%;
`;
export const HomeBox = styled.main`
  width: 100%;
  padding: 160px 0 100px;
`;
export const CardBox = styled.div`
  width: 100%;
  border-radius: 0px 30px 0px 30px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 254, 248, 0.9);
  padding: 20px 0;
  @media (max-width: 800px) {
    margin: 10px 0;
  }
`;
export const HomeTitle = styled.h2`
  color: #fff;
  font-size: 36px;
`;
export const FlexBox = styled.div<FlexBoxProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.direction || "row"};
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const HomeText = styled.p`
  color: #fff;
  font-size: 28px;
  font-weight: 400;
  font-family: "myFont2";
  @media (max-width: 800px) {
    font-size: 16px;
  }
  text-shadow: rgba(0, 0, 0, 0.498039) -1px -1px 0px,
    rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px,
    rgba(0, 0, 0, 0.498039) 1px -1px 0px;
`;
export const HomeImgs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  a {
    width: 100px;
    height: 100px;
  }
`;
export const HomeImg = styled.img`
  width: 80px;
  height: 80px;
`;
export const HomeImg2 = styled.img`
  width: 480px;
  height: 480px;
  @media (max-width: 800px) {
    width: 300px;
    height: 300px;
  }
`;
export const Title = styled.h2`
  text-shadow: rgba(0, 0, 0, 0.498039) -1px -1px 0px,
    rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px,
    rgba(0, 0, 0, 0.498039) 1px -1px 0px;
  color: #fff;
  font-size: 56px;
  @media (max-width: 800px) {
    font-size: 34px;
  }
`;
export const MyText = styled.div`
  width: 100%;
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  font-family: "myFont2";
  margin: 20px 0;
  text-shadow: rgba(0, 0, 0, 0.498039) -1px -1px 0px,
    rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px,
    rgba(0, 0, 0, 0.498039) 1px -1px 0px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;
export const HowToBuyCard = styled.div``;
export const HowToBuyCardImgBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HowToBuyCardBody = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const HowToBuyCardTitle = styled.h3`
  text-shadow: rgba(0, 0, 0, 0.498039) -1px -1px 0px,
    rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px,
    rgba(0, 0, 0, 0.498039) 1px -1px 0px;
  color: #fff;
  font-size: 23px;
`;
export const HowToBuyCardText = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  font-family: "myFont2";
  @media (max-width: 800px) {
    font-size: 16px;
  }
  text-shadow: rgba(0, 0, 0, 0.498039) -1px -1px 0px,
    rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px,
    rgba(0, 0, 0, 0.498039) 1px -1px 0px;
`;
export const RoadmapImg = styled.img`
  width: 293px;
  height: 297px;
  object-fit: cover;
  object-position: 50% 50%;
`;
export const RoadmapText = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  font-family: "myFont2";
  @media (max-width: 800px) {
    font-size: 16px;
  }
  text-shadow: rgba(0, 0, 0, 0.498039) -1px -1px 0px,
    rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px,
    rgba(0, 0, 0, 0.498039) 1px -1px 0px;
`;
export const RoadmapLi = styled.div`
  width: 80%;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  font-family: "myFont2";
  @media (max-width: 800px) {
    font-size: 16px;
  }
  text-shadow: rgba(0, 0, 0, 0.498039) -1px -1px 0px,
    rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px,
    rgba(0, 0, 0, 0.498039) 1px -1px 0px;
  text-align: left;
  margin: 0 auto;
  &::before {
    content: "•";
    color: #000;
    margin-right: 10px;
  }
`;

export const ColumnImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 85px;
    height: 85px;
    margin: 20px;
  }
`;
export const ColumnText = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 20px 0;
  text-align: center;
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  font-family: "myFont2";
  @media (max-width: 800px) {
    font-size: 16px;
  }
  text-shadow: rgba(0, 0, 0, 0.498039) -1px -1px 0px,
    rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px,
    rgba(0, 0, 0, 0.498039) 1px -1px 0px;
`;
export const MediaBox = styled.div<MediaBoxProps>`
  width: ${(props) => props.pcWidth || "50%"};
  @media (max-width: 800px) {
    width: ${(props) => props.phoneWidth || "100%"};
  }
`;

export const CardListBox = styled.div<FlexBoxProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.direction || "row"};
`;

import Container from "./Container";
import {
  CardBox,
  // CardListBox,
  FlexBox,
  HowToBuyCardText,
  // HowToBuyCardTitle,
  RoadmapImg,
  RoadmapText,
  Title,
} from "./style";
import leftImg from "../assets/img/img7.jpg";
import rightImg from "../assets/img/img2.png";
// import styled from "styled-components";
// const cardList = [
//   {
//     title: "Phase 1",
//     textList: ["Launch", "CoinGecko/Coinmarketcap Listings"],
//   },
//   {
//     title: "Phase 2",
//     textList: ["Launch", "CoinGecko/Coinmarketcap Listings"],
//   },
//   {
//     title: "Phase 3",
//     textList: ["Launch", "CoinGecko/Coinmarketcap Listings"],
//   },
// ];
// const RoadmapLiText = styled.div`
//   width: 85%;
//   color: #fff;
//   font-size: 20px;
//   font-weight: 400;
//   font-family: "Microsoft YaHei";
//   text-align: left;
//   margin: 0 auto;
// `;
// const RoadmapLi = ({ children }: any) => {
//   return (
//     <CardListBox
//       style={{
//         width: "80%",
//         alignItems: "flex-start",
//         justifyContent: "flex-start",
//       }}
//     >
//       <div
//         style={{
//           color: "#000",
//           fontSize: "20px",
//           marginRight: "0px",
//           width: "20px",
//         }}
//       >
//         •
//       </div>
//       <RoadmapLiText>{children}</RoadmapLiText>
//     </CardListBox>
//   );
// };
const Roadmap = () => {
  return (
    <div id="roadmap">
      <Container
        style={{
          padding: "50px 0",
        }}
      >
        <FlexBox
          style={{
            padding: "50px 0",
          }}
        >
          <RoadmapImg src={leftImg} alt="" />
          <FlexBox
            direction="column"
            style={{
              justifyContent: "space-between",
              height: "297px",
            }}
          >
            <Title>ROADMAP</Title>
            <CardBox
              style={{
                padding: "20px 0",
                width: "350px",
              }}
            >
              <FlexBox direction="column">
                <RoadmapText>Phase 1: Meme</RoadmapText>
                <RoadmapText>Phase 2: Vibe and HODL</RoadmapText>
                <RoadmapText>Phase 3: Meme Takeover</RoadmapText>
              </FlexBox>
            </CardBox>
          </FlexBox>
          <RoadmapImg src={rightImg} alt="" />
        </FlexBox>
        <HowToBuyCardText
          style={{
            textAlign: "center",
          }}
        >
          All jokes aside, here is a rough sketch of $OVERPEPE path ahead.
        </HowToBuyCardText>
        <HowToBuyCardText
          style={{
            textAlign: "center",
          }}
        >
          We dont wan’t to give everything away on day 1, Expect surprises along
          the way ;)
        </HowToBuyCardText>
        {/* <FlexBox
          style={{
            justifyContent: "space-between",
          }}
        >
          {cardList.map((item, index) => {
            return (
              <CardBox
                key={index}
                style={{
                  width: "350px",
                }}
              >
                <FlexBox direction="column">
                  <HowToBuyCardTitle>{item.title}</HowToBuyCardTitle>

                  <FlexBox direction="column">
                    {item.textList.map((text, index2) => {
                      return <RoadmapLi key={index2}>{text}</RoadmapLi>;
                    })}
                  </FlexBox>
                </FlexBox>
              </CardBox>
            );
          })}
        </FlexBox> */}
      </Container>
    </div>
  );
};
export default Roadmap;

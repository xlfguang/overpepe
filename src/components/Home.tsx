import Container from "./Container";
import {
  FlexBox,
  HomeBox,
  HomeImg,
  HomeImg2,
  HomeImgs,
  HomeText,
  HomeTitle,
  MediaBox,
} from "./style";
// import cmc from "../assets/img/cmc.webp";
// import dextools from "../assets/img/dextools.webp";
// import etherscan from "../assets/img/etherscan.webp";
import telgrrgrgrgr from "../assets/img/telgrrgrgrgr.webp";
import twitter from "../assets/img/twitter.webp";
// import uniswap from "../assets/img/uniswap.webp";
import img2 from "../assets/img/img2.png";

const HomeImgList = [
  {
    src: twitter,
    url: "https://twitter.com/OverBabyDoge",
  },
  {
    src: telgrrgrgrgr,
    url: "https://t.me/OVERPEPE",
  },
  // {
  //   src: dextools,
  //   url: "",
  // },
  // {
  //   src: etherscan,
  //   url: "",
  // },
  // {
  //   src: cmc,
  //   url: "",
  // },
  // {
  //   src: uniswap,
  //   url: "",
  // },
];

const Home = () => (
  <div id="home">
    <Container>
      <HomeBox>
        <FlexBox
          style={{
            justifyContent: "space-between",
          }}
        >
          <MediaBox pcWidth="50%" phoneWidth="100%">
            <HomeTitle>OVERPEPE</HomeTitle>
            <HomeText>
              The most memeable memecoin in existence. The PEPE have had their
              day, it's time for OVERPEPE to take reign.
            </HomeText>
            <HomeImgs>
              {HomeImgList.map((item, index) => {
                return (
                  <a href={item.url} key={index} target="_blank">
                    <HomeImg src={item.src} />
                  </a>
                );
              })}
            </HomeImgs>
          </MediaBox>
          <HomeImg2 src={img2} />
        </FlexBox>
      </HomeBox>
    </Container>
  </div>
);
export default Home;

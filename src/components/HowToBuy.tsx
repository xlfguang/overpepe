import Container from "./Container";
import {
  CardBox,
  FlexBox,
  HowToBuyCardBody,
  HowToBuyCardImgBox,
  HowToBuyCardText,
  HowToBuyCardTitle,
  MediaBox,
  Title,
} from "./style";
import img1 from "../assets/img/card1.webp";
import img2 from "../assets/img/card2.webp";
import img3 from "../assets/img/card3.webp";
import img4 from "../assets/img/card4.png";
import img5 from "../assets/img/img8.jpg";
const cardList = [
  {
    img: img1,
    title: "Create a Wallet",
    content:
      "download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.",
  },
  {
    img: img2,
    title: "Get Some ETH",
    content:
      "have ETH in your wallet to switch to $OVERPEPE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
  },
  {
    img: img3,
    title: "Go to Uniswap",
    content:
      "connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $OVERPEPE token address into Uniswap, select OVERPEPE, and confirm. When Metamask prompts you for a wallet signature, sign.",
  },
  {
    img: img4,
    title: "Switch ETH for $OVERPEPE",
    content:
      "switch ETH for $OVERPEPE. We have 1% taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
  },
];

const HowToBuy = () => {
  return (
    <div id="howtobuy">
      <Container
        style={{
          padding: "50px 0",
        }}
      >
        <FlexBox direction="column">
          <Title>HOW TO BUY</Title>
          <FlexBox direction="column" style={{ width: "100%" }}>
            {cardList.map((item, index) => {
              return (
                <CardBox
                  key={index}
                  style={{
                    margin: "20px 0",
                  }}
                >
                  <FlexBox>
                    <HowToBuyCardImgBox>
                      <img
                        style={{
                          height: "100px",
                        }}
                        src={item.img}
                        alt=""
                      />
                    </HowToBuyCardImgBox>
                    <HowToBuyCardBody>
                      <HowToBuyCardTitle>{item.title}</HowToBuyCardTitle>
                      <HowToBuyCardText>{item.content}</HowToBuyCardText>
                    </HowToBuyCardBody>
                  </FlexBox>
                </CardBox>
              );
            })}
          </FlexBox>
          <FlexBox
            style={{
              justifyContent: "space-between",
              margin: "50px 0",
            }}
          >
            <MediaBox>
              {/* <iframe
                src="https://www-pepe-vip.filesusr.com/html/1f3f2b_d97dc6210ef477f566aeee9b168830b1.html"
                frameBorder="0"
                style={{
                  width: "100%",
                  height: "455px",
                }}
              ></iframe> */}
            </MediaBox>
            <MediaBox pcWidth="40%">
              <img
                src={img5}
                style={{
                  width: "100%",
                }}
                alt=""
              />
            </MediaBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </div>
  );
};
export default HowToBuy;

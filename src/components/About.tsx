import aboutImg from "../assets/img/img3.png";
import Container from "./Container";
import { FlexBox, MediaBox, MyText, Title } from "./style";

const About = () => {
  return (
    <div id="about">
      <Container>
        <FlexBox
          style={{
            padding: "100px 0 100px",
          }}
        >
          <MediaBox>
            <img
              src={aboutImg}
              style={{
                width: "100%",
              }}
              alt=""
            />
          </MediaBox>
          <MediaBox>
            <FlexBox
              style={{
                padding: "0 20px",
              }}
              direction="column"
            >
              <Title>About</Title>
              <MyText>
                OVERPEPE is tired of watching everyone play hot potato with the
                endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu
                coins. The PEPE have had their day. It’s time for the most
                recognizable meme in the world to take his reign as king of the
                memes.
              </MyText>
              <MyText>
                OVERPEPE is here to make memecoin great again. $OVERPEPE will
                adopt the latest presale mechanism, a 1% tax, and renounced
                contract, making it truly the people's coin. Driven by the pure
                power of memes, let $OVERPEPE show you the way.
              </MyText>
            </FlexBox>
          </MediaBox>
        </FlexBox>
      </Container>
    </div>
  );
};
export default About;

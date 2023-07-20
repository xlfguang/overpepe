import Container from "./Container";
import { ColumnImgBox, ColumnText, FlexBox, Title } from "./style";
import tw from "../assets/img/twttttee2.webp";
import tw2 from "../assets/img/twtttt.webp";
// import tw3 from "../assets/img/twttttee234.webp";
import logo from "../assets/img/img1.png";
import { Flex, Logo } from "./Header";

function Contact() {
  return (
    <Container>
      <FlexBox direction="column">
        <Title> CONTACT</Title>
        <ColumnImgBox>
          <a href="">
            <img src={tw} alt="" />
          </a>
          <a href="">
            <img src={tw2} alt="" />
          </a>
          {/* <a href="">
            <img src={tw3} alt="" />
          </a> */}
        </ColumnImgBox>
        <Flex>
          <Logo src={logo} />
          <Title
            style={{
              fontSize: "30px",
            }}
          >
            OVERPEPE
          </Title>
        </Flex>
        <ColumnText>
          $OVERPEPE coin has no association with Matt Furie or his creation Pepe
          the Frog. This token is simply paying homage to a meme we all love and
          recognize.
        </ColumnText>
        <ColumnText>
          $OVERPEPE is a meme coin with no intrinsic value or expectation of
          financial return. There is no formal team or roadmap. the coin is
          completely useless and for entertainment purposes only.
        </ColumnText>
      </FlexBox>
    </Container>
  );
}

export default Contact;

import styled from "styled-components";
import Container from "./Container";
import logo from "../assets/img/img1.png";
// 定义Logo、Nav和Button的样式
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  /* 800px以下 */
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const NavList = styled.nav`
  flex: 1;
  margin: 0 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;

// 为 a 标签添加样式
const NavLink = styled.a`
  color: white;
  margin: 0 10px;
  font-size: 12px;

  &:hover {
    color: white;
  }
`;

const Button = styled.button`
  transition: all 0.2s ease, visibility 0s;
  border-radius: 60px;
  border: 1px solid #ffffff;
  background: rgba(229, 235, 250, 0);
  color: #ffffff;
`;
const Title = styled.h1`
  color: white;
  font-size: 30px;
  margin: 0 10px;
  font-weight: 600;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 定义 Header 组件
const Header = () => (
  <Container
    style={{
      boxShadow: "0 4px 2px 0 rgba(0, 0, 0, 0.2)",
    }}
  >
    <HeaderWrapper>
      <Flex>
        <Logo src={logo} />
        <Title>OVERPEPE</Title>
      </Flex>
      <NavList>
        {/* 使用 NavLink 替代原来的 a 标签 */}
        <NavLink href="#home">HOME</NavLink>
        <NavLink href="#about">ABOUT</NavLink>
        <NavLink href="#howtobuy">HOW TO BUY</NavLink>
        <NavLink href="#tokenomics">TOKENOMICS</NavLink>
        <NavLink href="#roadmap">ROADMAP</NavLink>
      </NavList>
      <Button>Buy Now</Button>
    </HeaderWrapper>
  </Container>
);

export default Header;

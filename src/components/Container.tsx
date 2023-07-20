import React from "react";
import styled from "styled-components";

const ContainerBox = styled.div`
  width: 100%;
`;
const ContainerContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  @media (max-width: 800px) {
    padding: 0 20px;
  }
`;

// 定义 Header 组件
const Container = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
  style?: React.CSSProperties | undefined;
}) => (
  <ContainerBox style={props.style}>
    <ContainerContent>{props.children}</ContainerContent>
  </ContainerBox>
);

export default Container;

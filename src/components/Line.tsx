import styled from "styled-components";
import line from "../assets/img/download.svg";
const LineImg = styled.div`
  width: 100%;
  height: 20px;
  background: url(${line}) repeat;
  background-size: 100%;
  background-position: 0 -12px;
`;
const Line = () => {
  return (
    <>
      <LineImg></LineImg>
    </>
  );
};
export default Line;

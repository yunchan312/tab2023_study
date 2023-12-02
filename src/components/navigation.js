import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  height: 4em;
  width: 100vw;
  padding: 1em;
  position: fixed;
  background-color: #385170;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  z-index: 90;
`;
const Title = styled.span`
  font-size: 2em;
  font-weight: 700;
`;
const Items = styled.div``;
const Item = styled.span``;

export function Nav() {
  const navigate = useNavigate();
  const onClick = (r) => {
    navigate(`/${r}`);
  };
  return (
    <NavWrapper>
      <Title>99Study </Title>
      <Items>
        <Item onClick={() => onClick("")}> Home</Item>
        <Item onClick={() => onClick("movies")}> Movies</Item>
        <Item onClick={() => onClick("tv")}> TvProgram</Item>
      </Items>
    </NavWrapper>
  );
}

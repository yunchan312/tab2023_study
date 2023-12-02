import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Title = styled.div`
  width: 90%;
`;

const Items = styled.div`
  min-height: 70px;
  padding: 0.3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 90;
  background-color: #385170;
`;

const Average = styled.div`
  width: 90%;
`;

const CardContainer = styled.div`
  margin: 1em;
  background-color: #385170;
  width: 200px;
  z-index: 80;
`;

const Poster = styled.img``;

const Overlay = styled.div`
  padding: 0.2em;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 200px;
  height: 300px;
  overflow-y: scroll;
  z-index: 80;
`;

const Overview = styled.div``;

export default function Card(props) {
  const [isOver, setIsOver] = useState(false);
  const navigate = useNavigate();
  const onMouseHover = () => {
    setIsOver(true);
  };
  const onMouseLeave = () => {
    setIsOver(false);
  };
  const onCardClick = () => {
    navigate(`${props.id}`);
  };

  return (
    <CardContainer
      onMouseOver={onMouseHover}
      onMouseLeave={onMouseLeave}
      onClick={onCardClick}
    >
      {isOver ? (
        <Overlay>
          <Overview>{props.overview}</Overview>
        </Overlay>
      ) : null}
      <Poster src={`https://image.tmdb.org/t/p/w200/${props.poster}`}></Poster>
      <Items>
        <Title>{props.title}</Title>
        <Average>⭐{props.average}</Average>
      </Items>
    </CardContainer>
  );
}

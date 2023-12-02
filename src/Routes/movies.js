import styled from "styled-components";
import { movies } from "../api";
import Card from "../components/card";
import { useMatch } from "react-router-dom";
import { Modal } from "../components/modal";

const Wrapper = styled.div`
  padding-top: 5em;
  display: flex;
  flex-wrap: wrap;
  background-color: #142d4c;
  justify-content: center;
  z-index: 80;
`;

export function Movies() {
  const isMatch = useMatch("movies/:id");
  const theId =
    isMatch?.params.id &&
    movies.results.find((movie) => movie.id + "" === isMatch.params.id);
  return (
    <>
      {isMatch ? (
        <Modal
          title={theId.title}
          overview={theId.overview}
          average={theId.vote_average}
        />
      ) : null}
      <Wrapper>
        {movies.results.map((movie, key) => (
          <Card
            id={movie.id}
            overview={movie.overview}
            poster={movie.poster_path}
            key={key}
            title={movie.title}
            average={movie.vote_average}
          />
        ))}
      </Wrapper>
    </>
  );
}

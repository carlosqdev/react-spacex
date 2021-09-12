import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.main`
  display: grid;
  grid-auto-flow: row;
  gap: 5px;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1em;
`;

const InputButton = styled.input`
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  font-size: var(--font-primary);
  font-weight: 700;
  padding: 1em 2em;
  outline: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    font-weight: 400;
  }

  &:active {
    transform: scale(.9);
  }
`;

const Error404 = () => {
  return (
    <Main>
      <section>
        <Title>Not found 404.</Title>
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <InputButton type="button" value="Ir al inicio" />
        </Link>
      </section>
    </Main>
  );
};

export default Error404;

import styled from "styled-components";

export const Container = styled.div`
  background: #282a36;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 120px;
  color: #50fa7b;

  animation: shake 100ms linear;
  animation-iteration-count: 3;

  @keyframes shake {
    from {
      transform: rotate(-2deg);
    }

    to {
      transform: rotate(2deg);
    }
  }
`;

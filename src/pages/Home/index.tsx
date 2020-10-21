import React from "react";
import { FiBookOpen } from "react-icons/fi";

import { Container, Title } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <FiBookOpen color="#bd93f9	" size={108} />
      <Title>
        {"<"}Livrim {"/>"}
      </Title>
    </Container>
  );
};

export default Home;

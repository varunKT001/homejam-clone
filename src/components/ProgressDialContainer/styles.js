import styled from 'styled-components';

const Wrapper = styled.section`
  width: 80vw;
  margin: 0 auto;
  margin-top: 15rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-x: auto;
  @media screen and (max-width: 425px) {
  }
`;

export default Wrapper;

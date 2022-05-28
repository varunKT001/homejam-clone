import styled from 'styled-components';

const Wrapper = styled.section`
  width: 80vw;
  margin: 0 auto;
  margin-top: 15rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  @media screen and (max-width: 480px) {
    height: 250px;
    margin-top: 5rem;
    overflow-x: auto;
  }
  @media screen and (max-width: 1465px) {
    overflow-x: auto;
  }
`;

export default Wrapper;

import styled from 'styled-components';

const Wrapper = styled.section`
  width: 80vw;
  margin: 125px auto;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 425px) {
    width: 90vw;
  }
  .side {
    font-size: 16px;
    text-transform: capitalize;
    color: rgba(229, 197, 88, 1);
    @media only screen and (max-width: 425px) {
      font-size: 14px;
    }
  }
  .shows {
    height: 500px;
    margin: 2.5rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1335px) {
      overflow-x: auto;
    }
  }
`;

export default Wrapper;

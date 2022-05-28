import styled from 'styled-components';

const Wrapper = styled.section`
  width: 80vw;
  margin: 0 auto;
  padding-top: 12rem;
  .hero-header {
    h1 {
      font-family: 'Libre Baskerville', serif;
      font-size: 80px;
      font-weight: 500;
      color: var(--clr-white);
      @media screen and (max-width: 425px) {
        font-size: 40px;
      }
    }
    p {
      width: 50%;
      font-family: 'Nunito', sans-serif;
      font-weight: 100;
      font-size: 24px;
      color: var(--clr-white);
      opacity: 0.6;
      @media screen and (max-width: 425px) {
        width: 100%;
        font-size: 16px;
      }
    }
  }
  .hero-cirles {
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow-x: auto;
  }
`;

export default Wrapper;

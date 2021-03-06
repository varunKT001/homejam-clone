import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .section-heading {
    h3 {
      font-family: 'Libre Baskerville', sans-serif;
      color: var(--clr-white);
      @media only screen and (max-width: 425px) {
        font-size: 20px;
      }
    }
    .underline {
      width: 50px;
      height: 3px;
      background-color: var(--clr-primary-2);
    }
  }
`;

export default Wrapper;

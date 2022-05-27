import styled from 'styled-components';

const Wrapper = styled.section`
  width: 80vw;
  margin: 125px auto;
  display: flex;
  .side {
    font-size: 16px;
    text-transform: capitalize;
    color: rgba(229, 197, 88, 1);
    @media only screen and (max-width: 425px) {
      font-size: 12px;
    }
  }
`;

export default Wrapper;

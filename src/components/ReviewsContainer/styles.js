import styled from 'styled-components';

const Wrapper = styled.section`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .side {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--clr-grey);
    .page {
      margin: 0 1rem;
      font-size: 16px;
      .active-page {
        color: var(--clr-white);
      }
    }
    .arrow-btn-container {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin: 0 0.5rem;
        width: 18px;
        height: 18px;
        transition: var(--transition);
        &:hover {
          color: var(--clr-white);
        }
      }
    }
  }
  .reviews {
    height: 300px;
    margin: 2.5rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1465px) {
      overflow-x: auto;
    }
  }
`;

export default Wrapper;

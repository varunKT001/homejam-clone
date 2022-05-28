import styled from 'styled-components';

const Wrapper = styled.article`
  position: relative;
  top: 10px;
  padding: 36px 24px;
  min-width: 275px;
  min-height: 200px;
  height: fit-content;
  background-color: var(--clr-primary-1);
  border: 2px solid rgba(229, 175, 86, 1);
  border-radius: 16px;
  color: var(--clr-white);
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: -10px;
    right: -10px;
    z-index: -10;
    background-image: linear-gradient(143.63deg, #276c73 5.43%, #5293e8 110.6%);
    border-radius: 8px;
  }
  .user-info {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .user-image {
    grid-area: 1 / 1 / 3 / 2;
    img {
      width: 50px;
      border-radius: 50%;
    }
  }
  .user-name {
    grid-area: 1 / 2 / 1 / 5;
    font-family: 'Quattrocento', serif;
    font-style: normal;
    font-weight: 700;
  }
  .user-address {
    display: flex;
    align-items: center;
    grid-area: 2 / 2 / 2 / 5;
    font-family: 'Rubik', sans-serif;
    font-size: 11px;
    font-weight: 200;
    text-transform: uppercase;
    color: rgba(229, 197, 88, 1);
    img {
      width: 24px;
      margin-right: 8px;
    }
  }
  .user-review {
    margin-top: 1rem;
  }
`;

export default Wrapper;

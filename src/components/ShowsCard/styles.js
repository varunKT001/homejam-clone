import styled from 'styled-components';

const Wrapper = styled.article`
  position: relative;
  top: 10px;
  min-width: 250px;
  min-height: 400px;
  height: fit-content;
  background-color: var(--clr-primary-3);
  border-radius: 8px;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: -10px;
    right: -10px;
    z-index: -10;
    background-image: linear-gradient(
      163.41deg,
      #301a68 0.11%,
      #234c97 170.69%
    );
    border-radius: 8px;
  }
  .image {
    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
  .info {
    margin: 1rem;
    .genre {
      padding: 0.125rem 0.5rem;
      background-color: rgba(229, 197, 88, 1);
      border-radius: 1px;
      color: rgba(104, 47, 38, 1);
      text-transform: capitalize;
      font-size: 12px;
      font-weight: 600;
    }
    .name {
      margin: 0.5rem 0;
      color: var(--clr-white);
      font-family: 'Libre Baskerville', sans-serif;
      font-size: 20px;
      text-transform: capitalize;
    }
    .actions {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .more-info-btn {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: transparent;
        color: var(--clr-primary-2);
        border: none;
        outline: none;
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
        font-weight: 500;
        text-transform: capitalize;
        svg {
          margin-left: 5px;
        }
        &:hover {
          svg {
            transform: translateX(10px);
            transition: transform 150ms linear;
          }
        }
      }
      .book {
        display: flex;
        .vertical-divider {
          width: 1px;
          height: auto;
          margin-right: 10px;
          background: rgba(255, 255, 255, 0.1);
        }
        svg {
          width: 25px;
          height: 25px;
          color: var(--clr-pink);
          transform: rotate(-45deg);
        }
      }
    }
  }
`;

export default Wrapper;

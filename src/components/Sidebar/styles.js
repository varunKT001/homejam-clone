import styled from 'styled-components';

const Wrapper = styled.div`
  .links-container {
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 100;
    width: 80%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--clr-grey);
    transition: var(--transition);
    .close-btn {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: none;
      border: none;
      outline: none;
      svg {
        width: 25px;
        height: 25px;
        color: var(--clr-white);
      }
    }
    .nav-links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      li {
        margin: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--clr-white);
        text-transform: capitalize;
        span {
          margin-left: 0.25rem;
        }
      }
    }
  }
  .show {
    right: 0;
    transition: var(--transition);
  }
`;

export default Wrapper;

import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 80vw;
  margin: 0 auto;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 100px;
    }

    .btn-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav-toggle {
      margin: 0 0.25rem;
      display: none;
      background: none;
      border: none;
      outline: none;
      color: white;

      svg {
        width: 25px;
      }

      @media screen and (max-width: 425px) {
        display: block;
      }
    }
  }

  .nav-links {
    display: flex;
    justify-content: center;

    li {
      margin: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--clr-white);
      text-transform: capitalize;
    }

    span {
      margin-left: 0.25rem;
    }
  }

  .links-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .close-btn {
      position: absolute;
      top: 1rem;
      left: 1rem;
      display: none;
    }

    @media screen and (max-width: 425px) {
      position: fixed;
      right: -100%;
      top: 0;
      z-index: 100;
      width: 80%;
      height: 100vh;
      background-color: var(--clr-grey);
      transition: var(--transition);

      .nav-links {
        flex-direction: column;
      }

      .close-btn {
        margin: 0 0.25rem;
        display: flex;
        background: none;
        border: none;
        outline: none;
        color: var(--clr-white);

        svg {
          width: 25px;
          height: 25px;
          color: var(--clr-white);
        }
      }
    }
  }

  .show {
    flex-direction: column;
    right: 0;
    transition: var(--transition);
  }
`;

export default Wrapper;

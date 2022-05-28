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
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        color: rgba(221, 76, 172, 1);
      }
      span {
        margin-left: 0.25rem;
      }
    }
  }
  .links-container {
    @media screen and (max-width: 425px) {
      display: none;
    }
  }
`;

export default Wrapper;

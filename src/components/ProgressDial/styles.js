import styled from 'styled-components';

const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100%;
  color: white;
  margin: 40px;
  @media only screen and (max-width: 425px) {
    width: 145px;
    height: 145px;
    margin: 10px;
  }

  .progress-dial-icon {
    font-size: 24px;
    @media only screen and (max-width: 425px) {
      font-size: 16px;
    }
  }

  .progress-dial-count {
    margin: 12px 0;
    font-size: 24px;
    font-family: Libre Baskerville;
    @media only screen and (max-width: 425px) {
      margin: 5px 0;
      font-size: 16px;
    }
  }

  .progress-dial-label {
    font-family: Nunito;
    font-size: 16px;
    font-weight: 100;
    opacity: 0.5;
    @media only screen and (max-width: 425px) {
      font-size: 10px;
    }
  }

  &:hover {
    .progress-dial-icon {
      color: blue;
      transition: var(--transition);
    }
  }
`;

export default Wrapper;

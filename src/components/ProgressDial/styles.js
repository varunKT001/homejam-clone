import styled from 'styled-components';

const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right: ${(prop) => prop.active && '2px solid var(--clr-pink)'};
  border-bottom: ${(prop) => prop.active && '2px solid var(--clr-pink)'};
  border-left: ${(prop) => prop.active && '2px solid var(--clr-pink)'};
  border-radius: 100%;
  color: white;
  transform: rotate(-35deg);
  @media only screen and (max-width: 425px) {
    width: 145px;
    height: 145px;
    margin: 10px;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: rotate(35deg);
    .progress-dial-icon {
      font-size: 24px;
      color: ${(prop) => prop.active && 'rgba(2, 89, 235, 1)'};
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
      text-transform: capitalize;
      opacity: 0.5;
      @media only screen and (max-width: 425px) {
        font-size: 10px;
      }
    }
  }
`;

export default Wrapper;

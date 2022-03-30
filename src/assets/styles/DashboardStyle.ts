import styled from 'styled-components';

const Container = styled.div`
  margin: 80px 80px;
  margin: 0 auto;
  max-width: 1130px;
  @media screen and (max-width: 1180px) {
    max-width: 800px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  /* place-items: center; */
  margin: 32px 0;
  @media screen and (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const DashboardStyle = {
  Container,
  Grid,
};

export default DashboardStyle;

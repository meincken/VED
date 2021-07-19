import styled from 'styled-components'

const GlobalFooter = () => {
  return (
  <Footer>
    <div>
      <a href="#">Terms &amp; Conditions</a>
      <a href="#">Privacy Policy</a>
    </div>
    <small>&copy; Brand 2021</small>
  </Footer>
  );
};

export default GlobalFooter;

const Footer = styled.footer`
  text-align: center;
  margin-top: auto;

  > div {
    margin-bottom: 16px;
  }

  a {
    color: inherit;
    padding: 0 8px;
  }
`;
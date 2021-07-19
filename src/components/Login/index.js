import styled from 'styled-components'

const Login = () => {
  return (
    <LoginBlock>
      Already have an account? <a href="#">Login Now</a>
    </LoginBlock>
  );
};

export default Login;

const LoginBlock = styled.div`
  text-align: right;
  margin-bottom: 8px;
`;
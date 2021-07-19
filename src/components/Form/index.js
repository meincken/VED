import styled from 'styled-components'
import GoogleIcon from '../../public/google.svg'
import FacebookIcon from '../../public/facebook.svg'

const Form = () => {
  return (
    <FormWrap>
      <Title>
        Create an account
      </Title>
      <p>Enter your details below to create your account</p>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter email address" />
      </div>
      <div>
        <Label htmlFor="first-name">First Name</Label>
        <Input id="first-name" type="text" placeholder="First" />
      </div>
      <div>
        <Label htmlFor="last-name">Last Name</Label>
        <Input id="last-name" type="text" placeholder="Last" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <small>8+ characters, containing upper and lowercase characters and a number</small>
        <Input id="password" type="password" placeholder="Password" />
      </div>
      <div>
        <Label htmlFor="confirm-password">Confirm your Password</Label>
        <Input id="confirm-password" type="password" placeholder="Password" />
      </div>
      <div>
        <LabelCheckbox>
          <input type="checkbox" /> 
          I’d like to receive offers, promotions, and other information from the brand
        </LabelCheckbox>
      </div>
      <div>
        <LabelCheckbox>
          <input type="checkbox" /> 
          Accept our <a href="#">Terms &amp; Conditions</a>
        </LabelCheckbox>
      </div>
      <button className="btn btn-primary">Create an account</button>
      <hr />
      <div>
        <p className="text-center">Or sign in with...</p>
        <div>
          <a className="btn btn-icon" href="#"><FacebookIcon /> Facebook</a>
          <a className="btn btn-icon" href="#"><GoogleIcon /> Google</a>
        </div>
      </div>
    </FormWrap>
  );
};

export default Form;

const FormWrap = styled.form`
  display: grid;

  > div {
    margin-bottom: 8px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  margin: 0;

  a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border: 1px solid #B3B6B9;
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 16px;
  width: 100%;
`;

const LabelCheckbox = styled.label`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;

  input {
    padding-bottom: 20px;
  }
`;
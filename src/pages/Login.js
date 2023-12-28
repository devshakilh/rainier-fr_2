import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;




const Login = () => {

  
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange  = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://raineritb.vercel.app/api/user/login', formData);
      const accessToken = response.data.accessToken;

      // Save the access token to local storage
      localStorage.setItem('accessToken', accessToken);

      
       console.log(accessToken)
      console.log('Login successful');
      toast.success('Login successful')
      window.location = "/";      
    } catch (error) {
      toast.error(' error')
      console.error('Login failed:', error.response.data.message);
    }
  };






  return (
    <Container>
      <Wrapper>
        <Title>Login AN ACCOUNT</Title>
        <Form onSubmit={handleLogin}>
        
         
          <Input placeholder="email" type="email"  id="email" name="email" value={formData.email}
          onChange={handleChange}
/>
          <Input placeholder="password"   type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <Link className="font-bold hover:underline" to='/register'>Register </Link>
          </Agreement>
        
          <Button >Login</Button>
         
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;




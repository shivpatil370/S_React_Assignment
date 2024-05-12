import { render, screen } from '@testing-library/react';
import SignUp from './SignUp.jsx';
import { BrowserRouter } from 'react-router-dom';
// import { Router } from 'react-router-dom';
// import { RouterProvider } from 'react-router-dom';
// import appRouter from './router-dom/AppRouter.jsx';

describe("Signup page testing...",()=>{
  test('checking signUp heading', () => {
    render(<BrowserRouter><SignUp /></BrowserRouter>);
    const linkElement = screen.getByText("SignUp",{exact:false});
    expect(linkElement).toBeInTheDocument();
  });
  
  test('checking email address button text', () => {
      render(<BrowserRouter><SignUp /></BrowserRouter>);
      const emailtext = screen.getByText("Email address",{exact:false});
      expect(emailtext).toBeInTheDocument();
    });
  
    test('checking password button text', () => {
      render(<BrowserRouter><SignUp /></BrowserRouter>);
      const passwordltext = screen.getByText("Password");
      expect(passwordltext).toBeInTheDocument();
    });
  
    test('checking conform password button text', () => {
      render(<BrowserRouter><SignUp /></BrowserRouter>);
      const emailtext = screen.getByText("Conform Password",{exact:false});
      expect(emailtext).toBeInTheDocument();
    });
  
    // test('checking submit button text', () => {
    //   render(<BrowserRouter><SignUp /></BrowserRouter>);
    //   const emailtext = screen.getByText("Sign up",{exact:false});
    //   expect(emailtext).toBeInTheDocument();
    // });
})
import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';

test('checking signUp heading', () => {
  render(<SignUp />);
  const linkElement = screen.getByText("SignUp",{exact:false});
  expect(linkElement).toBeInTheDocument();
});

test('checking email address button text', () => {
    render(<SignUp />);
    const emailtext = screen.getByText("Email address",{exact:false});
    expect(emailtext).toBeInTheDocument();
  });

  test('checking password button text', () => {
    render(<SignUp />);
    const passwordltext = screen.getByText("Password");
    expect(passwordltext).toBeInTheDocument();
  });

  test('checking conform password button text', () => {
    render(<SignUp />);
    const emailtext = screen.getByText("Conform Passwor",{exact:false});
    expect(emailtext).toBeInTheDocument();
  });

  test('checking submit button text', () => {
    render(<SignUp />);
    const emailtext = screen.getByText("Sign up");
    expect(emailtext).toBeInTheDocument();
  });
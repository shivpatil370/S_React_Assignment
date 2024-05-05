import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

test('checking signUp heading', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText("SignUp",{exact:false});
  expect(linkElement).toBeInTheDocument();
});

test('checking email address button text', () => {
    render(<LoginPage />);
    const emailtext = screen.getByText("Email address",{exact:false});
    expect(emailtext).toBeInTheDocument();
  });

  test('checking password button text', () => {
    render(<LoginPage />);
    const passwordltext = screen.getByText("Password");
    expect(passwordltext).toBeInTheDocument();
  });

  test('checking conform password button text', () => {
    render(<LoginPage />);
    const emailtext = screen.getByText("Conform Passwor",{exact:false});
    expect(emailtext).toBeInTheDocument();
  });

  test('checking submit button text', () => {
    render(<LoginPage />);
    const emailtext = screen.getByText("Sign up");
    expect(emailtext).toBeInTheDocument();
  });
import { render, screen } from '@testing-library/react';
import ComposeMail from './ComposeMail.jsx';
import { BrowserRouter } from 'react-router-dom';

describe("ComposeMail page testing...",()=>{

  test('checking composeMail heading', () => {
    render(<BrowserRouter><ComposeMail /></BrowserRouter>);
    const linkElement = screen.getByText("new message",{exact:false});
    expect(linkElement).toBeInTheDocument();
  });
  
  test('checking input email text To..', () => {
      render(<BrowserRouter><ComposeMail /></BrowserRouter>);
      const emailtext = screen.getByText("To",{exact:false});
      expect(emailtext).toBeInTheDocument();
    });
  
    test('checking send button text', () => {
      render(<BrowserRouter><ComposeMail /></BrowserRouter>);
      const passwordltext = screen.getByText("send");
      expect(passwordltext).toBeInTheDocument();
    });
  

})
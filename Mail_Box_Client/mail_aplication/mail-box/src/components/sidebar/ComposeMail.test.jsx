// import { render, screen } from '@testing-library/react';
// import ComposeMail from './ComposeMail.jsx';
// import { BrowserRouter } from 'react-router-dom';
// // import { Router } from 'react-router-dom';
// import { Provider } from 'react-redux';

// describe("ComposeMail page testing...",()=>{

//   test('checking composeMail heading', () => {
//     render(<Provider><BrowserRouter><ComposeMail /></BrowserRouter></Provider>);
//     const linkElement = screen.getByText("new message",{exact:false});
//     expect(linkElement).toBeInTheDocument();
//   });
  
//   test('checking input email text To..', () => {
//       render(<Provider><BrowserRouter><ComposeMail /></BrowserRouter></Provider>);
//       const emailtext = screen.getByText("To",{exact:false});
//       expect(emailtext).toBeInTheDocument();
//     });
  
//     test('checking send button text', () => {
//       render(<Provider><BrowserRouter><ComposeMail /></BrowserRouter></Provider>);
//       const passwordltext = screen.getByText("send");
//       expect(passwordltext).toBeInTheDocument();
//     });
  

// })
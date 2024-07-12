import {screen, render, fireEvent} from "@testing-library/react"
import App from "../App";
import "@testing-library/jest-dom"

test('renders Vite and React logos and the count button', () => {
    render(<App />);
    
    // Check if Vite logo is present
    const viteLogo = screen.getByAltText('Vite logo');
    expect(viteLogo).toBeInTheDocument();
    expect(viteLogo.closest('a')).toHaveAttribute('href', 'https://vitejs.dev');
  
    // Check if React logo is present
    const reactLogo = screen.getByAltText('React logo');
    expect(reactLogo).toBeInTheDocument();
    expect(reactLogo.closest('a')).toHaveAttribute('href', 'https://react.dev');
    
    // Check if the button is present
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });
  
  test('increments count when button is clicked', () => {
    render(<App />);
    
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
  });
  
  test('renders instructional text and links', () => {
    render(<App />);
  
    // Check for instructional text
    const instructionText = screen.getByText(/Edit src\/App.tsx and save to test HMR/i);
    expect(instructionText).toBeInTheDocument();
  
    const learnMoreText = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(learnMoreText).toBeInTheDocument();
  });

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe("Contact is rendering", () => {
    it("renders", () => {
      render(<Contact />);
    });
  
    it('matches snapshot', () => {
      const { asFragment } = render(<Contact />)
      expect(asFragment()).toMatchSnapshot()
    });

    it('renders contact header', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    })

    it('renders submit buttom', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('submit-btn')).toHaveTextContent('Submit');
    })

});
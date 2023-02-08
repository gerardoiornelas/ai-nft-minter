
  import React from 'react';
  import { render } from '@testing-library/react';
  import Home from './Home';

  describe('<Home/> spec', () => {
   
    test('should render <Home/>', () => {
      render(<Home/>);
    });

  });

  
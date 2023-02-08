
  import React from 'react';
  import { render } from '@testing-library/react';
  import Title from './Title';

  describe('<Title/> spec', () => {
    test('should match <Title/> snapshot', () => {
      const container = render(Title);
      expect(container.firstChild).toMatchSnapshot();
    });
    test('should render <Title/>', () => {
      render(<Title/>);
    });

  });

  
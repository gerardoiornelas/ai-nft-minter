module.exports = componentName => ({
  content: `
  import React from 'react';
  import { render } from '@testing-library/react';
  import ${componentName} from './${componentName}';

  describe('<${componentName}/> spec', () => {
   
    test('should render <${componentName}/>', () => {
      render(<${componentName}/>);
    });

  });

  `,
  extension: `.test.ts`,
})

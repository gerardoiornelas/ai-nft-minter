module.exports = componentName => ({
  content: `
import React from 'react';

import { Styled${componentName} } from './${componentName}.styled';

interface Props {
  children: React.ReactNode
}

const ${componentName} = ({children} : Props) => {
    return (
        <Styled${componentName}>
            {children}
        </Styled${componentName}>
    )
}

export default ${componentName}
  `,
  extension: `.tsx`,
})

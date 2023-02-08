module.exports = componentName => ({
  content: `
  import { rem } from 'polished';

  import { Box } from '@mui/material';
  import { styled } from '@mui/material/styles';

  const Styled${componentName} = styled(Box)(({
    theme
  }) => ({
    padding: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      padding: \`$\{rem(16)}\`,
    }
  }));
  
  export { Styled${componentName} };
  
      
      `,
  extension: `.styled.ts`,
})

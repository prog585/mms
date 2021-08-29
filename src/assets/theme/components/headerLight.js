const componentStyles = (theme) => ({
  header: {
    position: 'relative',
    background: 'linear-gradient(87deg,#C3D62D,#C3D62D)',
    paddingBottom: '3rem',
    paddingTop: '2rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: '2rem',
    },
  },
  containerRoot: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '39px',
      paddingRight: '39px',
    },
  },
});

export default componentStyles;

const componentStyles = (theme) => ({
  listItemRoot: {
    color: theme.palette.gray[400],
    width: 'auto',
    fontSize: '0.875rem',
    '&:hover': {
      color: 'white',
    },
  },
  copyrightWrapper: {
    color: 'white',
    fontSize: '1rem',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  copyrightLink: {
    fontWeight: '600',
    marginLeft: '.25rem',
    color: 'white',
    backgroundColor: 'initial',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  footerLinks: {
    color: theme.palette.gray[400],
    textDecoration: 'none',
  },
  justifyContentCenter: {
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center!important',
    },
  },
  flexDirectionColumn: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column!important',
    },
  },
});

export default componentStyles;

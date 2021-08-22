const componentStyles = (theme) => ({
  listItemRoot: {
    width: "auto",
    fontSize: "0.875rem",
    "&:hover": {
      color: 'black',
    },
  },
  copyrightWrapper: {
    color: 'black',
    fontSize: "1rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  copyrightLink: {
    fontWeight: "600",
    marginLeft: ".25rem",
    color: '#000000',
    backgroundColor: "initial",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  justifyContentCenter: {
    [theme.breakpoints.down("lg")]: {
      justifyContent: "center!important",
    },
  },
  flexDirectionColumn: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column!important",
    },
  },
});

export default componentStyles;

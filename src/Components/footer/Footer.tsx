import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: '#3f51b5',
    height:'8vh',
    // marginTop:'10vh',
    paddingTop: '2vh',
    width:'100%'
  },
}));

const Footer = () => {
  let copyrightInfo = " Copyright \u00A9 StackRoute 2020"
  const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Typography id="footer1" variant="subtitle1" color="textSecondary" align="center" component="p" gutterBottom>
             {copyrightInfo}
            </Typography>
        </div>
      );
}

export default Footer;
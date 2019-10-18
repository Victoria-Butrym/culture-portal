import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';

const useStyles = makeStyles(() => ({
  button: {
    marginTop: '20px',
    fontSize: '2rem',
    border: '3px solid var(--color-white)',
    color: 'var(--color-white)',
    background: 'var(--color-pale-red)',
    textTransform: 'none',
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedButtons(props) {
  const classes = useStyles();
  const { to, css, text } = props;
  return (
    <Button variant="outlined" className={classes.button}>
      <Link to={to} className={css}>
        {text}
      </Link>
    </Button>
  );
}

OutlinedButtons.propTypes = {
  to: PropTypes.string,
  css: PropTypes.string,
  text: PropTypes.string,
};
OutlinedButtons.defaultProps = {
  to: '',
  css: '',
  text: '',
};

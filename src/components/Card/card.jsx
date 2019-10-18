import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import githubIcon from '../../images/social/GitHub-white.png';
import '../layout.css';
import '../variables.css';
import './card.css';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 'none',
  },
  cardName: {
    textAlign: 'center',
    height: '3em',
    fontSize: '2rem',
    lineHeight: '1.2',
  },
  cardMedia: {
    paddingTop: '100%',
  },
  cardContent: {
    flexGrow: 1,
    backgroundColor: 'var(--color-dark-red)',
    color: 'white',
  },
}));

export default function Exposition({
  cardNumber,
  cardName,
  cardGithub,
  cardPhoto,
}) {
  const classes = useStyles();
  return (
    <Grid key={cardNumber} id="card" item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          className={classes.cardMedia}
          image={cardPhoto}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.cardName}
            gutterBottom
            variant="h6"
            component="h2"
          >
            {cardName}
          </Typography>
          <Typography>
            <a
              href={cardGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="social__link"
            >
              <img src={githubIcon} alt="github" className="footer__img" />
            </a>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

Exposition.propTypes = {
  cardNumber: PropTypes.number.isRequired,
  cardPhoto: PropTypes.string,
  cardName: PropTypes.string,
  cardGithub: PropTypes.string,
};

Exposition.defaultProps = {
  cardPhoto: '',
  cardName: '',
  cardGithub: '',
};

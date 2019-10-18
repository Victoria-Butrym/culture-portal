import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '../Card/card';
import '../layout.css';
import '../variables.css';
import './developers.css';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(3, 0, 0),
    color: 'white',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    maxWidth: '100%',
  },
}));

export default function Exposition({ edges, developersTitle }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <section className="section section__developers">
        <div className={classes.heroContent}>
          <Container className="title container__title" maxWidth="md">
            <h1>{developersTitle}</h1>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid
            className="container__card"
            container
            justify="center"
            alignItems="center"
            spacing={4}
          >
            {edges.map(edge => (
              <Card
                key={edge.node.frontmatter.number}
                cardNumber={edge.node.frontmatter.number}
                cardName={edge.node.frontmatter.name}
                cardGithub={edge.node.frontmatter.github}
                cardPhoto={edge.node.frontmatter.photo}
              />
            ))}
          </Grid>
        </Container>
      </section>
    </React.Fragment>
  );
}

Exposition.propTypes = {
  developersTitle: PropTypes.string,
  edges: PropTypes.arrayOf(PropTypes.object),
};

Exposition.defaultProps = {
  edges: [],
  developersTitle: '',
};

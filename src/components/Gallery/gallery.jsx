import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './gallery.css';

const Gallery = ({ edges }) => (
  <React.Fragment>
    <Container className="gallery__container">
      <Carousel>
        {edges.map(item => (
          <img src={item.node.publicURL} alt={item.node.name} key={item.node.name} />
        ))}
      </Carousel>
    </Container>
  </React.Fragment>
);

export default Gallery;

Gallery.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object),
};
Gallery.defaultProps = {
  edges: '',
};

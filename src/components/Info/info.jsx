// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../variables.css';
import './info.css';
import bg from '../../images/Lovepik_com-400459210-hand-painted-camera.png';


const Exposition = ({ infoText, infoTitle }) => (
  <section className="section section--info">
    <div className="container info__container">
      <h3 className="title title__info">{infoTitle}</h3>
      <div className="description__wrapper">
        <p className="info__description">{infoText}</p>
      </div>
      <img className="info__image" src={bg} alt="camera" />
    </div>
  </section>
);

Exposition.propTypes = {
  infoText: PropTypes.string,
  infoTitle: PropTypes.string,
};

Exposition.defaultProps = {
  infoText: '',
  infoTitle: '',
};

export default Exposition;

import PropTypes from 'prop-types';
import React from 'react';
import '../variables.css';
import './exposition.css';
import OutlineButton from '../OutlinedButton/OutlineButton';

const Exposition = ({
  mainTitle,
  buttonText,
  descLine1, descLine2, descLine3, descLine4, descLine5, descLine6, descLine7,
}) => (
  <section className="section section--exposition">
    <div className="container exposition__container">
      <h1 className="title exposition__title">
        {mainTitle}
      </h1>
      <div>
        <p>
          {descLine1}
          <br />
          {descLine2}
          <br />
          -&nbsp;
          {descLine3}
          <br />
          -&nbsp;
          {descLine4}
          <br />
          -&nbsp;
          {descLine5}
          <br />
          -&nbsp;
          {descLine6}
          <br />
          -&nbsp;
          {descLine7}
        </p>
      </div>
      <OutlineButton
        to="/AuthorsPage"
        css="link navigation__link"
        text={buttonText}
      />
    </div>
  </section>
);

Exposition.propTypes = {
  mainTitle: PropTypes.string,
  buttonText: PropTypes.string,
  descLine1: PropTypes.string,
  descLine2: PropTypes.string,
  descLine3: PropTypes.string,
  descLine4: PropTypes.string,
  descLine5: PropTypes.string,
  descLine6: PropTypes.string,
  descLine7: PropTypes.string,
};

Exposition.defaultProps = {
  mainTitle: '',
  buttonText: '',
  descLine1: '',
  descLine2: '',
  descLine3: '',
  descLine4: '',
  descLine5: '',
  descLine6: '',
  descLine7: '',
};

export default Exposition;

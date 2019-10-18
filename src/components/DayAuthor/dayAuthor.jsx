import PropTypes from 'prop-types';
import React from 'react';
import '../variables.css';
import './dayAuthor.css';
import OutlineButton from '../OutlinedButton/OutlineButton';
import authorImage from '../../images/Authors/KorshSablin/KorshSablin.jpg';

const Exposition = ({
  dayAuthorTitle,
  dayAuthorInfo,
  dayAuthorName,
  dayAuthorYearsLife,
  buttonText,
}) => (
  <section className="section section__dayauthor">
    <div className=" container container__dayauthor">
      <h3 className="title dayauthor__title">
        {dayAuthorTitle}
      </h3>
      <div className="wrapper__dayauthor">
        <div className="photoAuthor__wrapper">
          <img src={authorImage} style={{ width: '320px' }} alt="photoAuthor__image" className="photoAuthor__image" />
        </div>
        <div className="wrapper__column wrapper__column--authorday">
          <h3 className="dayauthor__name">
            {dayAuthorName}
          </h3>
          <span className="dayauthor__years">
            {dayAuthorYearsLife}
          </span>
          <p className="dayauthor__description">
            {dayAuthorInfo}
          </p>
          <div className="button__wrapper">
            <OutlineButton
              to="/directors/ru/KorshSablin"
              css="link navigation__link"
              text={buttonText}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

Exposition.propTypes = {
  dayAuthorTitle: PropTypes.string,
  dayAuthorInfo: PropTypes.string,
  dayAuthorName: PropTypes.string,
  dayAuthorYearsLife: PropTypes.string,
  buttonText: PropTypes.string,
};

Exposition.defaultProps = {
  dayAuthorTitle: '',
  dayAuthorInfo: '',
  dayAuthorName: '',
  dayAuthorYearsLife: '',
  buttonText: '',
};

export default Exposition;

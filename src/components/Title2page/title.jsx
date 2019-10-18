/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import PropTypes from 'prop-types';
import './title.css';
import authorImage from '../../images/Authors/KorshSablin/KorshSablin.jpg';

export default function TitleTwoPage(props) {
  return (
    <React.Fragment>
      <div className="data">

        <div className="image-title"><img src={authorImage} alt="1" /></div>
        <div className="name-title">
          {props.author.name}
          {' '}

          {' '}
          {props.author.surname}
        </div>
        <div className="age-title">
(
          {props.author.birthDate}
          {' '}
-
          {' '}
          {props.author.deathDate}
)
        </div>
        <div className="information-title">{props.author.titleText}</div>
      </div>

    </React.Fragment>
  );
}

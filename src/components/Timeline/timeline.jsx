/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import React from 'react';
import './timeline.css';


export default function TimelineComponent({ timeline }) {
  const colorArray = [
    '#999999',
    '#888888',
    '#777777',
    '#666666',
    '#555555',
    '#444444',
    '#333333',
    '#222222',
    '#111111',
    '#111111',
  ];
  return (
    <React.Fragment>
      <Timeline lineColor="#ddd">
        {timeline.map((element, index) => (
          <TimelineItem
            key={element.description}
            dateText={element.date}
            dateInnerStyle={{
              background: 'radial-gradient(#e6dada, #274046)', color: '#532626', textAlign: 'center', fontSize: '1.2rem',
            }}
            style={{ color: colorArray[index] }}
          >
            {element.description}
          </TimelineItem>
        ))}
      </Timeline>
    </React.Fragment>
  );
}

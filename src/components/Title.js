import React from 'react';
import style from './Title.css';

const Title = props => (
  <div>
    <h1 className={style.title}>{props.title}</h1>
    <h2 className={style.subtitle}>Number of tasks: {props.numberOfTasks}</h2>
  </div>
);

export default Title;

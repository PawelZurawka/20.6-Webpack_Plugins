import React from 'react';
import style from './TodoList.css';

const List = props => {
  const elements = props.list.map(element => (
    <li key={element.id} onClick={() => props.remove(element.id)}>
      {element.text}
    </li>
  ));
  return (
    <div className={style.list}>
      <ul>{elements}</ul>
    </div>
  );
};

export default List;

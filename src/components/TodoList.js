import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
  const list = props.items.map(element => {
    return (
      <div
        className={style.listItem}
        key={element.id}
        onClick={() => {
          props.remove(element.id);
        }}
      >
        {element.text}
      </div>
    );
  });
  return <div className={style.list}>{list}</div>;
};

export default TodoList;

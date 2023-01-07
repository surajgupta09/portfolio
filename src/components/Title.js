import React from 'react';
const Title = (props) => {
  const style = "fs-"+props.size+" text-"+props.color;
  return (
    <p className={style}>{props.title}</p>
  )
}
export default Title;

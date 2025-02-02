import React from 'react'
import styled from 'styled-components';
import Item from '../Item/'
import ImageFilter from '../ImageFilter'

const Items = styled.div`
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`
export default (props) => {
  return (
    <Items>
      {ImageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </Items>
  )
}

import React from 'react'
import './index.scss'

export default ( props ) => (
  <span
    className = { `title-black ${ props.class ? props.class : null }` }
    id = { props.id ? props.id : null }>{ props.text ? props.text : `Black Title` }</span>
)
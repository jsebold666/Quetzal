import React from 'react'
import './index.scss'

export default ( props ) => (
  <input 
    type='text'
    className = { `ipnut-text ${ props.class ? props.class : null }` }
    id = { props.id ? props.id : null }
    onChange = { ( e ) => props.f_onChange ? props.f_onChange( e ) : null }
    value = { props.value ? props.value : null } />
)
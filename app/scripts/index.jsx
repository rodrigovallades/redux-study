import React from 'react'
import ReactDOM from 'react-dom'
import Family from './components/family'
import Member from './components/member'

ReactDOM.render(
  <Family>
    <Member name='John' lastName='Doe' />
  </Family>
, document.getElementById('app'))

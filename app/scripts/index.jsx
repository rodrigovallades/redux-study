import React from 'react'
import ReactDOM from 'react-dom'
import Family from './components/family'
import Member from './components/member'

ReactDOM.render(
  <Family lastName='Doe'>
    <Member name='John' />
    <Member name='Fawcet' />
    <Member name='Norbert' />
  </Family>
, document.getElementById('app'))

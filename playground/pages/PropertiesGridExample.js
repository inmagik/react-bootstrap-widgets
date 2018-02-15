import React, { Fragment } from 'react'
import { PropertiesGrid } from 'react-bootstrap-widgets'

const flatList = [
  {label: 'Name', value: 'Tiger'},
  {label: 'Age', value: '2'},
  {label: 'Species', value: 'Wild Cat'},
  {label: 'Role', value: 'Boss'},
]

const nestedList = [
    [
        {label: 'Name', value: 'Tiger'},
        {label: 'Age', value: '2'},
        {label: 'Species', value: 'Wild Cat'},
        {label: 'Role', value: 'Boss'},
    ],

    [
          {label: 'Name', value: 'Tiger'},
          {label: 'Age', value: '2'},
          {label: 'Species', value: 'Wild Cat'},
          {label: 'Role', value: 'Boss'},
    ],
    [
          {label: 'Name', value: 'Tiger'},
          {label: 'Age', value: '2'},
          {label: 'Species', value: 'Wild Cat'},
          {label: 'Role', value: 'Boss'},
    ]
]

const nestedList2 = [
    [
        {label: 'Name', value: 'Tiger'},
        {label: 'Age', value: '2'},
        {label: 'Species', value: 'Wild Cat'},
        {label: 'Role', value: 'Boss'},
    ],
    [
        {label: 'Name', value: 'Poldo'},
        {label: 'Age', value: '3'},
        {label: 'Species', value: 'Wild Dog'},
        {label: 'Role', value: 'CEO'},
    ],
    [
          {label: 'Name', value: 'Tiger'},
          {label: 'Age', value: '2'},
          {label: 'Species', value: 'Wild Cat'},
          {label: 'Role', value: 'Boss'},
    ],
    [
        {label: <i className='fa fa-train' />, value: 'Train'},
        {label: <i className='fa fa-space-shuttle' />, value: 'Shuttle'},
        {label: <i className='fa fa-car' />, value: 'Car'},
        {label: <i className='fa fa-truck' />, value: 'Truck'},
    ],
]



export default class PropertiesGridExample extends React.PureComponent {
  render(){
    return (
      <div className='m-5'>
        <h5 className='mb-3'>Flat list</h5>
        <PropertiesGrid
          list={flatList}
          labelClass='text-danger font-italic'
          valueClass='font-weight-bold'
        />
        <h5 className='mt-3 mb-3'>Nested list</h5>
        <PropertiesGrid
          list={nestedList}
          labelClass='text-muted font-italic'
        />
        <h5 className='mt-3 mb-3'>Nested list with equalColumn</h5>
        <PropertiesGrid
          list={nestedList2}
          labelClass='text-muted font-weight-bold'
          valueClass='text-info'
          equalColumn
        />
      </div>
    )
  }
}

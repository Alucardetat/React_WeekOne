import React from 'react'

const Child = (props) => {
  return (
    <>
    {console.log(props.user)}
    <div>{props.user.name}</div>
    </>
  )
}

export default Child
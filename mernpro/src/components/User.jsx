import React from 'react'

const User = ({name,depart,skills}) => {
  return (
    <div><h1>I am {name} and {depart} department</h1>
    <ol>
      {skills.map((skill)=>(
            <li>{skill}</li>
    ))}                                   
    </ol>
    </div>
  )
}

export default User
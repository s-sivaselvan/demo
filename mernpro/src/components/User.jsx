import React from 'react'

const User = ({name,depart,skills}) => {
  return (
    <div><h1>I am {name} from {depart} Department</h1>
    <ol>
      {skills.map((skill)=>(
            <li>{skill}</li>
    ))}                                   
    </ol>
    </div>
  )
}

export default User
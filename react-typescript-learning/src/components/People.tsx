import React from 'react'
 
type PeopleProps = {
   people:{ 
        firstName:String,
        lastName:String,
    }[]

}
const People = (props: PeopleProps) => {
  return (
    <div>
        <h1>People :</h1>
        {props.people.map(person => {
          return(

            <div>
                <p>{person.firstName}</p>
                <p>{person.lastName}</p>
            </div>
            
          )
        })}
    </div>
  )
}

export default People
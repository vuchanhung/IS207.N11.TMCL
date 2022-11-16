import {useParams} from 'react-router-dom'
import people from './people'
import './Person_1_3_2.css'

const Person=()=>{
    const {id}=useParams()
    const person=people.filter((p)=>p.id===id)[0]

    return(
        <main className='Person'>
            <h1>
                {person.name}
            </h1>
            <lable>
                ID:
            </lable>
            <div className='Person-id'>
                {id}
            </div>
            <label>
                Address:
            </label>
            <div className='Person-address'>
                {person.address}
            </div>
            <label>
                Department:
            </label>
            <div className='Person-department'>
                {person.department}
            </div>
        </main>
    )
}

export default Person
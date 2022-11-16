import { NavLink } from 'react-router-dom'
import People from './People_1_3_2'
import './PeopleList.css'

const PeopleList=()=>{
    return(
        <nav className='PeopleList'>
            <ul>
                {People.map((person)=>(
                    <li key={`person-${person.id}`}>
                        <NavLink
                            activeClassName='currentPerson'
                            to={`/People_1_3_2/${person.id}`}
                        >
                            {person.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default PeopleList
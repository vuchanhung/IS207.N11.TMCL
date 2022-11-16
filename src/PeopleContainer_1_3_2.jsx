import Media from 'react-media'
import (Redirect, Route, Switch) from 'react-router-dom'
import Person from './Person_1_3_2'
import PeopleList from './PeopleList_1_2_3'
import People from './People_1_3_2'

const PeopleContainer=()=>{
    return(
        <Media
            queries={{
                small: '(max-width:700px)',
            }}
        >
            {(size)=>
            size.small?(
                <Switch>
                    <Route path='/People_1_3_2/:id'>
                        <Person/>
                    </Route>
                    <PeopleList/>
                </Switch>
            ):(
                <div style={{display:'flex'}}>
                    <PeopleList/>
                    <Switch>
                        <Route path='/People_1_3_2/:id'>
                            <Person/>
                        </Route>
                        <Redirect to={`/People_1_3_2/${people[0].id}`}/>
                    </Switch>
                </div>
            )
            }
        </Media>
    )
}

export default PeopleContainer
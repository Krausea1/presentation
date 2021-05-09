import React from 'react';
import LoadHOC from './hoc/load';
import roomate from './roomate';


class app extends React.Component {
    state = {
        roomate:[ 
           {id: 1, name:'Alex', age: 21},
           {id: 2, name:'Emely', age: 22},
           {id: 3, name:'Gaby', age: 21},
           {id: 4, name:'Chloé', age:22}
        ]
    }

    render() {
        return(
            <div>
                <table>
                    <body>
                        {
                            this.state.roomate.map((employee) => {
                                return (<roomate age = {roomate.age} key = {roomate.id}>{roomate.name}</Roomate>)

                            })
                        }

                    </body>
                </table>
            </div>
        )
    }
}
export default LoadHOC ('roomate')(App);
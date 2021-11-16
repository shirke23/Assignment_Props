import React from 'react'
import ComponentB from './ComponentB'

function ComponentA() {
    return (
        <div>
           < ComponentB name = "Shivani" ></ ComponentB>
           < ComponentB name = "Siddhi" >
           <button> Click </button>
           </ ComponentB>
        </div>
    )
}

export default ComponentA


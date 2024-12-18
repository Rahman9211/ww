


import React from 'react'

export default function List(props) {
    console.log(props.todos);//[array]
  return (
    <div>
        
        
        <ul className="list-group">
        {
            props.todos.length>0 ?props.todos.map((value,index,arr)=>{
                return<li className="list-group-item">{value}</li>
            }):<li className="list-group-item">no todos</li>
        }
</ul>

    </div>
  )
}
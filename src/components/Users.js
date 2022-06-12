import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

export const Users = () => {
  const[searchParams,setSearchParams]=useSearchParams()
  const showActiveUsers=searchParams.get('filter')==='active';
  return (
    <div>
    <h2> user1 </h2>
    <h2> user 2 </h2>
    <h2> user 3 </h2>
   
     < Outlet />
    <div>
    <button onClick={()=>setSearchParams({filter:'active'})}> Active filter</button>
    <button OnClick={()=>setSearchParams({})}>Reset filter</button>
    </div>
    {showActiveUsers ? (<h2>showing active users</h2>) : (<h2> showing all nusers</h2>)}
    </div>
  )
}

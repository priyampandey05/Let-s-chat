import React from 'react'
import Users from './Users'

function User() {
  return (
    <div>
      <h1 className="mx-2 p-2 bg-slate-800 rounded-md ">Messages</h1>
      <div className="flex-1 overflow-y-auto" style={{maxHeight:"calc(84vh - 10vh)"}}>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
      </div>
    </div>
    
    
  )
}

export default User

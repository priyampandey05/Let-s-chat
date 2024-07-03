import React from 'react'
import Chat from './Chat'

function Chats() {
  return (
    <div className="flex-1 overflow-y-auto" style={{minHeight:"calc(92vh - 8vh)"}}>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
    </div>
  )
}

export default Chats

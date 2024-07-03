import React from 'react'
import Chatusers from './Chatusers'
import Chats from './Chats'
import Typesend from './Typesend'

function Right() {
  return (
    <div className="w-[70%] bg-slate-900 text-gray-300">
      <Chatusers/>
      <div className="flex-1 overflow-y-auto" style={{maxHeight:"calc(92vh - 8vh)"}}>
      <Chats/>
      </div>
      <Typesend/>
    </div>
  )
}

export default Right

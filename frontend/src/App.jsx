import React from 'react'
import Left from './Home/Leftpart/Left'
import Right from './Home/Rightpart/Right'

export default function App() {
  return (
    <>
      <div className="flex h-screen">
        <Left/>
        <Right/>
      </div>
    </>
  )
}

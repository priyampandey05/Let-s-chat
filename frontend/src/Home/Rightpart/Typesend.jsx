import React from 'react'
import { IoMdSend } from "react-icons/io";

function Typesend() {
  return (
    <div className="flex text-4xl h-[8vh] items-center space-x-3">
      <div className="w-[70%]">
      <input type="text" placeholder="Type here" className="input input-bordered w-full " />
      </div>
      <div>
        <IoMdSend />
      </div>
    </div>
  )
}

export default Typesend

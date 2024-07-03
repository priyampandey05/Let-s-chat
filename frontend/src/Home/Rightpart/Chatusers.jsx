import React from 'react'

export default function Chatusers() {
  return (
    <div className="flex space-x-3 h-[8vh] justify-center items-center bg-gray-800 hover:bg-gray-700 duration-200">
        <div className="avatar online">
        <div className="w-14 rounded-full">
         <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
         </div>
        </div>
        <div>
            <h1 className="text-xl ">Priyam</h1>
            <span className="text-sm">Ofline</span>
        </div>
    </div>
  )
}

import React from 'react'
import { FaSearch } from "react-icons/fa";
function Search() {
  return (
    <div>
              <div className="px-6 py-4">
                  <form action="">
                    <div className="flex space-x-3">
                        <label className="input input-bordered flex items-center gap-2 w-[80%] outline-none bg-slate-900">
                        <input type="text" className="grow" placeholder="Search" />
                        </label>
                        <FaSearch className="text-4xl mt-1 hover:cursor-pointer mx-2" />
                    </div>
                  </form>
                </div>
              </div>
  )
}

export default Search

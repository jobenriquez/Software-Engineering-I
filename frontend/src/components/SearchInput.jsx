import { IoSearchSharp } from "react-icons/io5";
import React, { useState } from 'react'
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (search.length < 3) {
      toast.error('Search term must be at least 3 characters long.');
    } else if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else toast.error("No such user found.");
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bodered rounded-full'
          value = {search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoSearchSharp className="w-6 h-6 outline-none"></IoSearchSharp>
        </button>
    </form>
  )
}

export default SearchInput

// STARTER CODE
// import { IoSearchSharp } from "react-icons/io5";
// import React from 'react'

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type='text' placeholder='Search...' className='input input-bodered rounded-full'></input>
//         <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//             <IoSearchSharp className="w-6 h-6 outline-none"></IoSearchSharp>
//         </button>
//     </form>
//   )
// }

// export default SearchInput
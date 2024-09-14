import React from 'react';

const Techcontainer = ({ icon, lang }) => {
     
  return (
    <div className='bg-[#b165d481] w-fit px-3 py-1 rounded-full flex text-[#e9e3e3] items-center gap-1'>
       <h1 className='text-xl'>{icon}</h1>
      <h1 className='opacity-100'>{lang}</h1>
    </div>
  );
}

export default Techcontainer;

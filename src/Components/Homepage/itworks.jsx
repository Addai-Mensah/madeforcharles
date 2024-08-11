import React from 'react'
import register from "../../assets/signup.png"
import add from "../../assets/add.png"
import secure from "../../assets/secure.png"
function Itworks() {
  return (
    <div>
        <div className='flex items-center justify-center mt-[8rem] md:ml-0 '>
           <div>
           <h1 className='text-center text-[1.5rem] gilda '>How It Works</h1>
            <p className='text-center text-[1rem] gilda'>Our wallet is 100% secured</p>
           </div>
        </div>

        <div className=''>
        <div className='flex items-center justify-center mt-[2rem] md:flex-row gap-3 flex-col   '>
          <div className='w-[17rem] bg-[#3671e9] md:h-[25rem] h-[25rem]  rounded-lg'>
            <img className='rounded-full w-[6rem] mx-auto mt-[3rem] ' src={register} alt="" />
            <h1 className='text-center my-[1.5rem] text-white font-bold text-[1.2rem] gilda'>Account</h1>
            <p className=' text-center text-white  text-[1rem] px-[2%] gilda'>Create an account with us to get started with securing your funds with us</p>
          </div>

          <div className='w-[17rem] bg-[#e5e7eb] md:h-[25rem] h-[25rem]  rounded-lg'>
            <img className='rounded-full w-[6rem] mx-auto mt-[2.7rem] ' src={add} alt="" />
            <h1 className='text-center my-[2rem]  font-bold text-[1.2rem] gilda'>Link Wallet</h1>
            <p className=' text-center  text-[1rem] gilda px-[2%] '>Once you've successfully created your account, then you can head straight to link your wallet from your dashboard</p>
          </div>

          <div className='w-[17rem] bg-[#e5e7eb] md:h-[25rem] h-[25rem] rounded-lg'>
            <img className='rounded-full w-[7rem] mx-auto mt-[4rem] ' src={secure} alt="" />
            <h1 className='text-center my-[1.5rem]  font-bold text-[1.2rem] gilda'>Secured</h1>
            <p className=' text-center   text-[1rem] px-[2%] gilda '>We conduct legal activities in the legal field. We are certified to operate on data encryption</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Itworks
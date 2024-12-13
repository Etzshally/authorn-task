import { useState } from "react"
import heroimg from "./assets/images/heroimg.png"

function App() {
  const [amount, setAmount] = useState(1000)
  return (
    <>
      <div className="relative w-full px-10 min-h-screen flex flex-col lg:flex-row justify-evenly items-center">

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[60%] h-[550px] bg-gradient-to-r from-[#BC84FF] via-[#7545FF] to-[#BC84FF] opacity-15 rounded-full blur-2xl z-[-1]" style={{ transform: 'rotate(-50deg)' }}></div>
        </div>

        <div className='w-[30%] flex flex-col justify-center items-center'>
          <img className='w-full' src={heroimg} alt="" />
        </div>

        <div className='w-[60%] flex gap-5 flex-col justify-center p-3 items-start'>

          <h1 className='text-[16px] font-roboto font-[400] text-[#BC84FF]'>PLAY WONDERVERSE</h1>

          <div>
            <h2 className='text-[34px] font-roboto font-[600] text-white'>Wonderverse Season O</h2>
            <p className='text-[20px] font-extralight text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
          </div>

          <div className='w-full flex flex-col gap-3 justify-center items-center'>
            {/* 1st section  */}
            <div className='w-full flex flex-row justify-evenly gap-2 items-center'>

              <div className='bg-[#BA83FF] opacity-20 p-3 flex flex-col justify-center items-center opacity rounded-full'>
                <div className='bg-[#9752ec] opacity-100 z-[100] p-2 rounded-full'>
                </div>
              </div>

              <div className="w-full border-t-2 border-[#BA83FF] opacity-70 border-dashed"></div>

              <div className='bg-[#BA83FF] opacity-20 p-3 flex flex-col justify-center items-center opacity rounded-full'>
                <div className='bg-[#9752ec] p-2 rounded-full'>
                </div>
              </div>

              <div className="w-full border-t-2 border-[#BA83FF] opacity-20 border-dashed"></div>

              <div className='bg-[#BA83FF] opacity-20 p-3 flex flex-col justify-center items-center opacity rounded-full'>
                <div className='bg-[#9752ec] p-2 rounded-full'>
                </div>
              </div>

            </div>

            {/* 2nd section  */}
            <div className='w-full flex flex-row justify-between gap-2 items-center'>
              <div className='flex flex-col justify-center items-start gap-2'>
                <p className='text-[14px] font-unbounded font-[400] text-white'>Bidding Date</p>
                <p className='text-[18px] font-unbounded font-[400] text-white'>12/08/2024</p>
              </div>
              <div className='flex flex-col justify-center items-start gap-2'>
                <p className='text-[14px] font-unbounded font-[400] text-white'>Results</p>
                <p className='text-[18px] font-unbounded font-[400] text-white'>12/08/2024</p>
              </div>
              <div className='flex flex-col justify-center items-start gap-2'>
                <p className='text-[14px] font-unbounded font-[400] text-white'>Receive rewards</p>
                <p className='text-[18px] font-unbounded font-[400] text-white'>12/08/2024</p>
              </div>
            </div>

          </div>

          <div className="lg:w-[30%] flex flex-col justify-center items-start">
            <div className="bg-[#2E3034]/40 isolate backdrop-blur-3xl flex flex-row justify-between items-center rounded-[50px] p-4 w-full max-w-[300px] shadow-lg">
              <div onClick={() => setAmount(amount => amount - 1)} className="bg-[#2E3034]/60 cursor-pointer p-3 w-[40px] h-[40px] rounded-full flex flex-col justify-center items-center shadow-md">
                <p className="text-[#BA83FF] text-lg font-bold">-</p>
              </div>
              <p className="text-[20px] font-unbounded font-medium text-white">${amount}</p>
              <div onClick={() => setAmount(amount => amount + 1)} className="bg-[#2E3034]/60 cursor-pointer p-3 w-[40px] h-[40px] rounded-full flex flex-col justify-center items-center shadow-md">
                <p className="text-[#BA83FF] text-lg font-bold">+</p>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col lg:flex-row justify-center items-center'>
            <div className='w-[50%] flex flex-col justify-center items-start'>
              <p className='text-[16px] font-roboto font-[400] text-[#BC84FF]'>TOTAL PRICE</p>
              <p className='text-[28px] font-unbounded font-[400] text-white'>$49,346.56</p>
            </div>

            <div className='w-[50%] cursor-pointer flex flex-col justify-center items-end'>
              <div className='w-full flex flex-col justify-center items-center bg-[#BA83FF] rounded-[50px] py-5'>
                <p className='text-black text-[20px] font-[400]'>Place a Bid</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App


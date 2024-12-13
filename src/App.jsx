import { useState } from "react"
import heroimg from "./assets/images/heroimg.png"

function App() {
  const [amount, setAmount] = useState(1000)
  return (
    <>
      <div className="relative overflow-y-hidden w-full px-10 min-h-screen flex flex-col lg:gap-0 gap-10 lg:flex-row justify-evenly items-center">

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[60%] h-[550px] z-[-1]" style={{
            backgroundImage: 'radial-gradient(closest-side,rgba(117, 69, 255, 0.2),#141414)'
          }}></div>
        </div>

        <div className='w-[90%] lg:mt-0 mt-10 lg:w-[30%] flex flex-col justify-center items-center'>
          <img className='w-full' src={heroimg} alt="" />
        </div>

        <div className='w-[90%] lg:w-[60%] flex gap-5 flex-col justify-center p-3 items-start'>

          <h1 className='text-[16px] font-roboto font-[400] text-[#BC84FF]'>PLAY WONDERVERSE</h1>

          <div>
            <h2 className='text-[23px] lg:text-[34px] font-roboto font-[600] text-white'>Wonderverse Season O</h2>
            <p className='text-[13px] lg:text-[20px] font-extralight text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
          </div>

          <div className='w-full flex flex-col gap-3 justify-center items-center'>
            {/* 1st section  */}
            <div className='w-full flex flex-row justify-evenly gap-2 items-center'>

              <div style={{
                backgroundColor: 'rgba(117, 69, 255, 0.2)'
              }} className='p-3 w-10 h-10 flex flex-col justify-center items-center rounded-full'>
                <div style={{
                backgroundColor: 'rgba(186, 131, 255, 1)'
                }} className='p-2 rounded-full'>
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
            <div className='w-full flex flex-row lg:justify-between gap-2 items-center'>
              <div className='flex flex-col justify-center items-start gap-2'>
                <p className='text-[10px] lg:text-[14px] font-unbounded font-[400] text-white'>Bidding Date</p>
                <p className='text-[12px] lg:text-[18px] font-unbounded font-[400] text-white'>12/08/2024</p>
              </div>
              <div className='flex flex-col justify-center items-start gap-2'>
                <p className='text-[10px] lg:text-[14px] font-unbounded font-[400] text-white'>Results</p>
                <p className='text-[12px] lg:text-[18px] font-unbounded font-[400] text-white'>12/08/2024</p>
              </div>
              <div className='flex flex-col justify-center items-start gap-2'>
                <p className='text-[10px] text-nowrap lg:text-[14px] font-unbounded font-[400] text-white'>Receive rewards</p>
                <p className='text-[12px] lg:text-[18px] font-unbounded font-[400] text-white'>12/08/2024</p>
              </div>
            </div>

          </div>

          <div className="lg:w-[30%] w-full flex flex-col justify-center items-center lg:items-start">
            <div className="bg-[#2E3034]/40 isolate backdrop-blur-3xl flex flex-row justify-between items-center rounded-[50px] p-4 w-full lg:max-w-[300px] shadow-lg">
              <div onClick={() => setAmount(amount => amount - 1)} className="bg-[#2E3034]/60 cursor-pointer p-3 w-[40px] h-[40px] rounded-full flex flex-col justify-center items-center shadow-md">
                <p className="text-[#BA83FF] text-lg font-bold">-</p>
              </div>
              <p className="text-[20px] font-unbounded font-medium text-white">${amount}</p>
              <div onClick={() => setAmount(amount => amount + 1)} className="bg-[#2E3034]/60 cursor-pointer p-3 w-[40px] h-[40px] rounded-full flex flex-col justify-center items-center shadow-md">
                <p className="text-[#BA83FF] text-lg font-bold">+</p>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col gap-5 lg:gap-0 lg:flex-row justify-center items-center'>
            <div className='lg:w-[50%] w-full flex flex-col justify-center items-start'>
              <p className='text-[16px] font-roboto font-[400] text-[#BC84FF]'>TOTAL PRICE</p>
              <p className='text-[20px] lg:text-[28px] font-unbounded font-[400] text-white'>$49,346.56</p>
            </div>

            <div className='lg:w-[50%] w-full cursor-pointer flex flex-col justify-center items-end'>
              <div className='w-full flex flex-col justify-center items-center bg-[#BA83FF] rounded-[50px] py-2 lg:py-5'>
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


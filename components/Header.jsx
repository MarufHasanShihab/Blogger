import { assets } from '@/Assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          alt="nav_logo"
          width={180}
          className="w-[130px] "
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000] cursor-pointer">
          Get started <Image src={assets.arrow} alt="arrow_icon" />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] mx-auto text-xs sm:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard dummy text
          ever.
        </p>
        <form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000]">
          <input
            type="email"
            placeholder="Inter your email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Header

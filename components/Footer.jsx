import { assets } from "@/Assets/assets"
import Image from "next/image"


const Footer = () => {
  return (
    <div className="flex justify-around flex-col sm:flex-row gap-2 sm:gap-0 bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="" width={120}/>
      <p className="text-white text-sm">All rignt reserved. copyright @blogger</p>
      <div className="flex">
        <a href="#"><Image src={assets.facebook_icon} alt="facebook_icon" width={40}/></a>
        <a href="#"><Image src={assets.twitter_icon} alt="twitter_icon" width={40}/></a>
        <a href="#"><Image src={assets.googleplus_icon} alt="googleplus_icon" width={40}/></a>
      </div>
    </div>
  )
}

export default Footer

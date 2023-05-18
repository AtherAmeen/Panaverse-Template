import { FC } from "react"


const Button:FC<{text:string}> = ({text}) => {

  return (
    <button className="bg-[#00616C] text-white text-lg px-7 py-4 font-medium rounded-full hover:shadow-lg hover:scale-105  duration-300">{text}</button>
  )
}

export default Button
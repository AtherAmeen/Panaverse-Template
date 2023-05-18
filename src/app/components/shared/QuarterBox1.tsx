import { FC } from "react";

interface IProps {
    header: string;
    description: string;
    number: number;
    haveBorder?: boolean;
}

const QuarterBox1:FC<IProps> = ({header, description, number, haveBorder}) => {
  return (
  <div className={`border rounded-md relative flex flex-1 flex-col justify-center px-8 py-16 ${haveBorder && "border"}`}>
  <h4 className="font-bold text-lg"> {header}</h4>
  <p className="mt-2 text-slate-600 z-0">
    {description}
  </p>
  <div className="absolute text-gray-200 -top-8 right-10 text-[170px] font-bold -z-10"> 
    {number}
  </div> 
</div>
  )
}

export default QuarterBox1
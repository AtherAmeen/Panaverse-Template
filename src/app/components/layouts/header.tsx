import Link from 'next/link';
import logo from '/public/logo.png'
import Image from 'next/image'
import Wrapper from '@/app/components/shared/Wrapper';

const Header = () => {
  return (
    <Wrapper>
    <header className="flex justify-between bg-white py-4 sticky top-0 items-center" >
       {/*Logo*/}
       <div>
            {/* <h2 className="text-xl font-bold"> Panaverse Dao </h2> */}
            <Image src={logo} alt="Panaverse dao logo" />
       </div>
      
      {/*Navigation Bar*/}
      <ul className="flex space-x-8 font-medium ">
        <li>
          <Link href={"/"}>Home</Link>
          </li>
        <li>
        <Link href={"/courses"}> Courses</Link>
         </li>
      </ul>
    </header>
    </Wrapper>
  )
}

export default Header;
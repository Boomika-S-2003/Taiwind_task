import { Link } from "react-router-dom"

const Navbar=()=>{
    return(
        <>
        <div className='bg-amber-300 flex justify-between p-3 m-0 '>
            <div className=' bg-amber-50  rounded-2xl w-20  text-center  text-black hover:bg-amber-600 hover:text-amber-50'>
                Logo
            </div>
            <div className="flex gap-6 me-4 ">
               <Link className='bg-amber-50 rounded-2xl w-20 text-center text-black hover:bg-amber-600 hover:text-amber-50' to='/'>Home</Link>
                <Link  className='bg-amber-50 rounded-2xl w-20 text-center text-black hover:bg-amber-600 hover:text-amber-50' to='/about'>About</Link>
                <Link  className='bg-amber-50 rounded-2xl w-20 text-center text-black hover:bg-amber-600 hover:text-amber-50' to='/contact'>Contact</Link>
            </div>
        </div>
        
        </>
    )
}


export default Navbar
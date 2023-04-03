import developer from '../img/developer1.svg'
import profile from '../img/profile1.jpg'

function Header() {
  return (
    <div className='flex flex-col items-center pt-5'>
        <img data-testid = 'logo' className='py-4 w-2/3 md:w-1/3 lg:w-1/3' src={developer} alt='developer' />
        <span className='text-2xl pt-1 pb-3 font-bold'>Innocent Anyaele</span>
        <span className='pb-1 font-semibold'>Software Engineer</span>
        <span>innocentanyaele2000@gmail.com</span>
        <span>+233 557187667</span>
        <span className='text-blue-600 py-3'><a href='https://github.com/InnocentAnyaele'>Github</a> . <a href='https://www.linkedin.com/in/innocent-anyaele/'>LinkedIn</a> . <a href='https://medium.com/@innocentanyaele'>Medium</a> </span>
        <a
						href='https://drive.google.com/file/d/10iOOZURELtjoRC39w7yt2-rUgPv7PyeA/view?usp=sharing'>
          <button data-testid = 'getCVButton' className='bg-blue-500 w-30 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>Get CV</button>
        </a>
        <img data-testid = 'profileImg' className='pt-5 pb-2 w-2/3 md:w-1/3 lg:w-1/3 rounded-full' src={profile} alt='profile'/>
      </div>


  )
}

export default Header

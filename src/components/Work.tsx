import {WorkList} from './WorkList'

function Work() {
  return (
    <div className='flex flex-col items-center py-5'>
      {/* <span className='font-bold'>Projects</span> */}
      {
        WorkList.map((item) => (
          <div className='w-2/3 rounded overflow-hidden shadow-lg py-7'>
            <img data-testid='workImg' className='w-full' src={`${item.image}`} alt={`${item.name}`} />
            <div className='px-6 py-4 text-center'>
              <div data-testid='workName' className='font-bold text-xl mb-2 text-blue-700'>{item.name}</div>
              <p data-testid='workStack' className='text-gray-500 pb-1'>
                Stack: {item.stack}
              </p>
              <p data-testid='workAbout' className='text-gray-700 text-base pb-1'>
                {item.about}
              </p>
                <span data-testid='workSite' className='text-blue-600'><a href={`${item.site}`}>App</a> . </span><span data-testid='workGithub' className='text-blue-600'><a href={`${item.github}`}>Github</a></span>
            </div>
          </div>
        ))
      }
    </div>


  )
}

export default Work

import Quote from '../components/Quote'
import Auth from '../components/Auth'

const Signup = () => {
  return (
    <div className='grid grid-cols-2'>
      <Auth type='signup'/>
      <div className='hidden lg:block'>
      <Quote/>
      </div>
    </div>
  )
}

export default Signup
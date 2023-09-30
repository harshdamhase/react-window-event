import './Home.css'
import Navbar from '../../Component/Navbar/Navbar'
import Button from '../../Component/Button/Button'

export default function Home()
{
    return(
        <div className='container'>
            <Navbar/>
            
          <h1>home</h1> 
          <Button/>
        </div>
    )
}
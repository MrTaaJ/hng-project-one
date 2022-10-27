import ButtonLinks from './ButtonLinks'
import './main.css'
import Social from './Social'

const Main = ({btnDetails}) => {
  return (
    <main>
      <div className="links-container">
        {btnDetails.map((btnDetail)=>(
          <ButtonLinks btnDetail={ btnDetail } />
        ))}
      </div>
      
      <Social />
    </main>
  )
}

export default Main
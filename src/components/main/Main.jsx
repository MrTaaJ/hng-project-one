import './main.css'
import Social from './Social'

const Main = ({btnDetails}) => {
  return (
    <main>
      <div className="links-container">
        {btnDetails.map((btnDetail)=>(
          <a class="button link-btn" id={btnDetail.id} key={btnDetail.id} href={btnDetail.link}>
            {btnDetail.text}
          </a>
        ))}
      </div>
      
      <Social />
    </main>
  )
}

export default Main
import { AiFillGithub, AiFillSlackCircle } from "react-icons/ai";

const Social = () => {
  return (
    <div className='social'>
        <a class="button" href="hng9.slack.com" aria-label="Social link to Slack">
            <AiFillSlackCircle size={30}/>
        </a>
        <a class="button" href="https://github.com/MrTaaJ" aria-label="Social link to Github">
            <AiFillGithub size={30}/>
        </a>
    </div>
  )
}

export default Social
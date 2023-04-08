import { Link } from "react-router-dom"
import './Footer.css'


function Footer() {
    return (
        <div className="footer-card">
            <div>
                <a className="a-link" href="https://www.linkedin.com/in/shreya-singh-8135aa17b/">LinkedIn🌚</a>
                <a className="a-link" href="https://twitter.com/Shreyas91819922">Twitter🐦</a>
                <a className="a-link" href="https://github.com/singhshreya425">Github🦝</a>

            </div>
            <div>
                <Link className="a-link" to='/about' > About Us🤗 </Link>
                <Link className="a-link" to='/contact' > Contact Us☎️ </Link>
                <Link className="a-link" to='/home' > ABC University🎓 </Link>
            </div>
        </div>
    )
}


export default Footer
import React from 'react'
import { Link } from 'react-router-dom'

import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href="/">
                    <em aria-hidden='true'></em>
                    <span>webs<br />youtube</span>
                </a>
            </h1>

            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'><Link to='/'><CiBaseball />웹스토리보이</Link></li>
                    <li><Link to="/today"><CiMoneyBill />추천영상</Link></li>
                    <li><Link to="/developer"><CiCoins1 />추천개발자</Link></li>
                    <li><Link to="/webd"><CiBoxes />웹디자인기능사</Link></li>
                    <li><Link to="/website"><CiBullhorn />웹표준사이트</Link></li>
                    <li><Link to="/gsap"><CiCoffeeCup />GSAP Parallax</Link></li>
                    <li><Link to="/port"><CiDumbbell />포트폴리오 사이트</Link></li>
                    <li><Link to="/youtube"><CiFries />유튜브 클론 사이트</Link></li>
                </ul>

                <ul className='keyword'>
                    <li><Link to='/search/webstoryboy'>webstoryboy</Link></li>
                    <li><Link to='/search/html'>HTML</Link></li>
                    <li><Link to='/search/css'>CSS</Link></li>
                    <li><Link to='/search/javascript'>JavaScript</Link></li>
                    <li><Link to='/search/react.js'>React.js</Link></li>
                    <li><Link to='/search/vue.js'>Vue.js</Link></li>
                    <li><Link to='/search/next.js'>Next.js</Link></li>
                    <li><Link to='/search/node.js'>Node.js</Link></li>
                    <li><Link to='/search/sql'>SQL</Link></li>
                    <li><Link to='/search/React Portfolio'>portfolio</Link></li>
                    <li><Link to='/search/NewJeans'>music</Link></li>
                </ul>
            </nav>

            <div className='header__sns'>
                <ul>
                    {/* rel='noopener noreferrer'은 새탭/윈도우에서 링크를 열 때, 보안 및 개인정보보호 측면에서 안전한 방식으로 열리게 됩니다. */}
                    <li><a href="https://github.com/webstoryboy" rel='noopener noreferrer'><AiFillGithub /></a></li>                    
                    <li><a href='https://www.youtube.com/webstoryboy' rel='noopener noreferrer'><AiFillYoutube /></a></li>
                    <li><a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'><AiOutlineCodepen /></a></li>
                    <li><a href='https://www.instagram.com/webstoryboy' rel='noopener noreferrer'><AiOutlineInstagram /></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { headerMenus, searchKeyword, snsLink } from "../../data/header";

const Header = () => {
    const location = useLocation();

    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <Link to="/">
                    <em></em>
                    <span>webs<br />youtube</span>
                </Link>
            </h1>

            <div className='header__menu'>
                <ul className='menu'>
                    {headerMenus.map((menu, key) => (
                        <li key={key} className={location.pathname === menu.src? 'active':''}>
                            <Link to={menu.src}>{menu.icon}{menu.title}</Link>
                        </li>
                    ))}
                </ul>

                <ul className='keyword'>
                    {searchKeyword.map((keyword, key) => (
                        <li key={key} className={location.pathname === keyword.src? 'active':''}>
                            <Link to={keyword.src}>{keyword.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='header__sns'>
                <ul>
                    {snsLink.map((sns, key) => (
                        <li key={key}>
                            <a href={sns.url} target='_blank' rel='noopener noreferrer' aria-label='{sns.title}'>
                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header


/**
 * Map 메서드를 통해서 데이터를 하나씩 호출합니다.
 * for문과 map() 메서드는 데이터값을 출력하지만, 
 * 출력한 값을 배열로 반환해주는 것에 차이가 있습니다.
 * map() 메서드는 인자 값으로 3가지 값을 출력할 수 있습니다. 
 */

/**
 * useLocation()는 리액트 훅
 * 주소값이 있으면 active를 붙여주는 삼항연산자를 사용하였습니다.
 * location.pathname === menu.src 이 부분이 일치하면 active가 추가되고 아니면 빈문자열이 표현됩니다.
 */
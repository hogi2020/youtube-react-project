import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { headerMenus, searchKeyword } from '../../data/header';

const Menu = () => {
    const location = useLocation();

    return (
        <nav className='header__menu'>
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
        </nav>
    )
}

export default Menu


/**
 * Map 메서드를 통해서 데이터를 하나씩 호출합니다.
 * for문과 map() 메서드는 데이터값을 출력하지만, 
 * 출력한 값을 배열로 반환해주는 것에 차이가 있습니다.
 * map() 메서드는 인자 값으로 3가지 값을 출력할 수 있습니다. 
 */
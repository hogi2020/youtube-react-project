import React from 'react'
import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Sns from '../header/Sns'


const Header = () => {
    return (
        <header id='header' role='banner'>
            <Logo />
            <Menu />
            <Sns />
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
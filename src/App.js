// 리액트 라이브러리를 불러옵니다.
import React from 'react'
// react-router-dom은 Route 컴포넌트를 관리하는 라이브러리로
// 브라우저 라우팅을 설정하고 경로별로 컴포넌트를 매핑하는데 사용합니다.
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'

import Header from './components/section/Header.jsx';
import Main from './components/section/Main.jsx';
import Footer from './components/section/Footer.jsx';


// App이라는 이름의 함수형 컴포넌트를 정의합니다.
const App = () => {
  return (
    <BrowserRouter>  {/* BrowserRouter는 브라우저의 주소 히스토리 API를 사용하여 라우팅을 관리합니다. */}
      <Header />
      <Main />
      <Routes>       {/* 다양한 경로에 대한 라우트 정보를 정의합니다. */}
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

// App 컴포넌트를 외부로 보냅니다.
export default App
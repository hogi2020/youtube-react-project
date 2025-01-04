import React from 'react'   // 리액트 라이브러리를 불러옵니다.
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'  // Route 컴포넌트를 관리하는 라이브러리

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
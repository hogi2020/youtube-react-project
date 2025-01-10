// react-router-dom은 Route 컴포넌트를 관리하는 라이브러리로
// 브라우저 라우팅을 설정하고 경로별로 컴포넌트를 매핑하는데 사용합니다.
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main.jsx';

const Home = lazy(() => import('./pages/Home'))
const Today = lazy(() => import('./pages/Today'))
const Developer = lazy(() => import('./pages/Developer'))
const Webd = lazy(() => import('./pages/Webd'))
const Website = lazy(() => import('./pages/Website'))
const Gsap = lazy(() => import('./pages/Gsap'))
const Port = lazy(() => import('./pages/Port'))
const Youtube = lazy(() => import('./pages/Youtube'))
const Channel = lazy(() => import('./pages/Channel'))
const Video = lazy(() => import('./pages/Video'))
const Search = lazy(() => import('./pages/Search'))
const Not = lazy(() => import('./pages/Not'))


// App이라는 이름의 함수형 컴포넌트를 정의합니다.
const App = () => {
  return (
    <BrowserRouter>                   {/* BrowserRouter는 브라우저의 주소 히스토리 API를 사용하여 라우팅을 관리합니다. */}
      <Suspense fallback={<Main />}>  {/* Suspense는 비동기적으로 로드되는 컴포넌트의 로딩 상태를 관리하는데 사용됩니다. */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/webd" element={<Webd />} />
          <Route path="/website" element={<Website />} />
          <Route path="/gsap" element={<Gsap />} />
          <Route path="/port" element={<Port />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path='/channel/:channelId' element={<Channel />} />
          <Route path='/video/:videoId' element={<Video />} />
          <Route path='/search/:searchId' element={<Search />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

// App 컴포넌트를 외부로 보냅니다.
export default App


/*
https://www.elancer.co.kr/blog/detail/267
React Suspense(리액트 서스펜스)는 컴포넌트의 렌더링을 일시 중지하고 
데이터 로딩을 기다릴 수 있게 해주는 React의 기능이에요. 

React 16.6부터 도입된 기능으로, 
컴포넌트가 렌더링 되기 전에 데이터 로딩을 기다릴 수 있게 해줌으로써 
데이터 로딩 중에도 자연스러운 사용자 경험을 유도할 수 있습니다. 

또한 코드 스플리팅(Code Splitting)과 함께 사용하면 
초기 로딩 속도를 개선하는 데에도 도움이 됩니다.

결국 React Suspense를 사용하면 로딩 상태를 선언적으로 처리할 수 있어 
코드의 가독성과 유지보수성을 높이고, 
사용자 경험을 개선하는 ‘3가지 효과’를 얻을 수 있습니다.

코드 스플리팅은 큰 번들을 여러 작은 청크(chunk)로 분할하는 프로세스로,
웹 애플리케이션의 초기 로딩 시간을 줄이는 데 큰 도움을 줍니다.
*/


/*
fallback은 컴포넌트가 로딩 중일 때 보여줄 ‘UI를 설정하는 prop’입니다.
fallback으로는 로딩 스피너, 스켈레톤 UI 등을 활용할 수 있어요. 
이를 통해 사용자에게 콘텐츠가 로딩 중임을 알리고, 
현재 애플리케이션이 멈춘 게 아니라 원활하게 동작하고 있음을 인식시킬 수 있습니다.
*/

/*
Lazy Loading은 웹 애플리케이션의 성능을 향상시키는 기술 중 하나로,
웹 페이지가 처음 로드될 때 필요하지 않은 리소스(예: 이미지, 스크립트, 컴포넌트 등)를 로드하지 않는 방식입니다.
대신 해당 리소스는 사용자가 그것을 실제로 필요로 할 때 (예: 특정 섹션으로 스크롤할 때, 특정 버튼을 클릭할 때 등) 로드됩니다.
이 방식으로 초기 로딩 시간을 줄이고, 불필요한 네트워크 요청을 최소화하여 애플리케이션의 전반적인 성능을 향상시킬 수 있습니다.

React.lazy()는 반드시 export default된 컴포넌트를 import해야 합니다.
lazy는 promise를 반환합니다. Promise가 resolve되면 export된 컴포넌트 모듈을 반환합니다.
그러므로 lazy가 반환되는 동안 Suspence가 로딩되는 비동기 처리가 이루어집니다.
*/
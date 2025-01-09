// React는 UI를 만들고 관리하는 Javascript의 라이브러리 입니다.
import React from 'react';
// React의 DOM 조작 메서드를 가져오기 위해 react-dom 라이브러리에서 ReactDOM을 가져옵니다.
// 특히, "react-dom/client"로부터 가져오는 것은 React 18이상의 Concurrent Mode와 같이 사용되는 렌터링 API 입니다. 
import ReactDOM from 'react-dom/client';
// App.js에서 "App" 컴포넌트를 가져옵니다.
import App from './App.js';
import './assets/scss/style.scss';


// createRoot 메서드를 사용하여, root 변수를 생성합니다.
// 이것은 React Concurrent Mode에서 사용되는 리액트 루트 입니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
// root를 사용하여 앱의 렌더링을 시작합니다.
// render 메서드는 앱의 최상위 컴포넌트를 렌더링 합니다.
root.render(
  // React.StrictMode는 앱을 개발할 때 경고 및 잠재적인 문제를 식별하기 위한 도구로 사용됩니다.
  <React.StrictMode>
    <App />  {/* App 컴포넌트를 렌더링 합니다. */}
  </React.StrictMode>
);

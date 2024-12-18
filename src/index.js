import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // React.StrictMode는 앱 내의 컴포넌트들을 엄격한 모드로 실행하도록 돕습니다.
  // 앱을 개발할 때, 경고 및 잠재적인 문제를 식별하기 위한 도구로 사용됩니다.
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
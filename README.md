## React에 대하여
- 리액트 컴포넌트는 리액트 애플리케이션의 구성요소로, UI를 작은 단위로 분리하여 재사용 가능하고 모듈화된 코드로 관리할 수 있도록 도와줍니다.

- 컴포넌트는 화면의 여러 부분을 독립적으로 생성하고 관리할 수 있도록 도와주며, 각각의 컴포넌트는 자체적인 상태(state)와 속성(props)을 가질 
수 있습니다.

- 클래스 컴포넌트 : ES6 클래스를 확장하여 만든 컴포넌트 입니다. 클래스 컴포넌트는 라이프사이클 메서드를 사용할 수 있어서 컴포넌트의 생명 주기 동안 다양한 동작을 처리할 수 있습니다.

- 함수형 컴포넌트 : 함수로 작성된 컴포넌트로, React Hooks를 통해 상태 관리와 라이프사이클 이벤트 처리를 할 수 있게 되었습니다.

- .jsx는 JavaScript XML의 약자로, 리액트에서 UI를 작성하기 위한 문법 확장입니다. JS 내에서 HTML을 작성할 수 있어 가독성을 높아졌습니다.

- 리액트 16버전 이하에서는 컴포넌트 파일마다 import React를 사용해야 했지만 17이상부터는 생략이 가능해졌습니다.

- 리액트를 사용하는 이유는 빠른 화면 전환과 상태 유지가 장점인 SPA(Single Page Application)을 구현하기 위함입니다. 그런데 a 태그를 사용하게 되면 브라우저 전체가 새로고침이 됩니다. (Reredering)

- 새로고침 없이 라우팅이 가능하도록 하기 위해 <Link> 컴포넌트를 사용하며 브라우저의 새로고침 없이 라우팅이 가능합니다. (클라이언트 사이드 라우팅)

- 다만 <a href="https://example.com"와 같이 "https://"를 사용한 외부라우팅이 필요하면 a태그를 사용해야 합니다.

- 리액트의 함수 컴포넌트는 세분화가 중요합니다! (컴포넌트의 설계)


<br />


## React Hook
- React Hook은 리액트 클래스형 컴포넌트에서 이용하던 코드를 함수형 컴포넌트에 맞게 만들어졌습니다.
- 반복문이나 조건문 혹은 중첩된 함수 내에서 Hook을 호출하면 안된다.
- useState : 상태를 관리하는 Hook
- useEffect : ActionListener와 같은 역할을 하는 Hook으로 의존성 배열에 해당값이 변할 때마다 함수가 실행된다.
- useLocation : pathname(현재URL), search(쿼리스트링), hash(#해시), state(상태전달)


## React Suspense & Lazy Loding
- React에서 비동기적으로 데이터나 컴포넌트를 불러오는 과정에서 대기 상태를 처리하기 위한 컴포넌트 입니다.
- 이 컴포넌트를 사용하면 데이터나 컴포넌트가 로딩되기를 기다릴 수 있으며, 대체 컨텐츠를 표시할 수 있습니다.


##  SEO
- SEO는 "Search Engine Optimization"의 약어로, 검색 엔진 최적화를 의미합니다.
- SEO는 웹사이트나 웹 페이지를 검색 엔진(예: Google, Bing, Yahoo)에서 높은 순위로 나타나도록 최적화하는 프로세스와 전략을 나타냅니다.
- 이를 통해 웹사이트가 검색 결과 페이지(SERP)에서 더 높은 순위에 나타나고 노출됩니다. 
- 더 많은 유기적(자연적) 트래픽을 확보하려는 목적으로 사용됩니다.





1. 프로젝트 셋팅
```
$ npx create-react-app .
```

2. 라이브러리 셋팅
# 나만의 유튜브 사이트 만들기

이 강의는 React 프레임워크와 YouTube API를 이용하여 자신만의 간단한 영상 사이트를 만듭니다. React의 기본 개념을 이해하고, 컴포넌트를 구조화하고 상태를 관리하는 방법을 학습하며, 
YouTube Data API를 활용하여 외부 데이터를 가져오는 방법을 익히고, API 응답을 처리하여 사용자에게 의미 있는 정보를 제공하는 방법을 이해합니다.

## 완성작 보기
미리보기 : 

## 사용스택
- node.js를 설치하고 사용합니다. 
- react를 사용하여 사이트를 완성합니다. 
- youTube Api를 이용하여 데이터를 가져옵니다.
- rapidapi를 이용하여 데이터를 가져옵니다.
- netlify를 통해 사이트를 배포합니다.
- firebase를 통해 사이트를 배포합니다.
- vercel를 통해 사이트를 배포합니다.
- git을 사용하여 파일을 관리합니다.

## 프로젝트 실행
- react를 설치합니다. `npx create-react-app 타이틀`
- react-router-dom을 설치합니다. `npm install react-router-dom`
- axios를 설치합니다. `npm install axios`
- react-icons을 설치합니다. `npm install react-icons`
- react-player를 설치합니다. `npm install react-player`
- sass를 설치합니다. `npm install sass`
- react-helmet-async를 설치합니다. `npm install react-helmet-async`
- swiper를 설치합니다. `npm install swiper`
![스크린샷 2021-06-20 오후 3 56 59](https://user-images.githubusercontent.com/73716178/122665086-3a8b0180-d1e0-11eb-8ac0-064b0fcfa6ab.png)

# YourHouseToday front-end team 입니다!🏠
아름다운 가구 인테리어 소품들을 판매하고 커뮤니티 기능을 가진 [오늘의집](https://ohou.se/)을 모티브로 한 팀 프로젝트

# 프로젝트 소개

## 프로젝트 계획 및 기간
📆 2021.6.21 ~ 7.2
- 1st Sprint : 개발환경 초기세팅, 전체 레이아웃, 컴포넌트화
- 2nd Sprint : 컴포넌트 별 기능 구현, 프론트-백 통신, 코드 리팩토링, conflict 수정 작업

## 페이지별 기능 Demo


### 오늘은 너네집 Demo 유튜브 링크
<a href="https://www.youtube.com/watch?v=SE_5vtrBrsg">
    <img src="http://img.shields.io/badge/-YouTube-FF0000?style=flat&logo=YouTube&link=https://https://www.youtube.com/watch?v=SE_5vtrBrsg/"
        style="height : auto; margin-left : 10px; margin-right : 10px;"/>
</a>

## 구현 기능 상세

### 공통 
- React 기반의 커머스 홈페이지 제작
- CRA를 사용한 초기 세팅
- 3명의 팀원들이 공통 Common.scss, Reset.scss 사용
- 공통부분인 Nav, Footer 컴포넌트 제작

### 로그인/회원가입 페이지 (김명준) ex)
- 회원가입+로그인 페이지 UI 구현
- 사용자 인증(Authentication) 완료에 따른, Local Storage에서의 access token(JSON Web Tokens) 관리

### 네비게이션 바 (김명준) ex)
- 공통 Nav UI 구현
- 로그인 상태에 따라 버튼 레이아웃 변경
- Local Storage에서의 토큰의 여부를 통해 로그인 여부 확인
- Local Storage에서 토큰을 삭제로 로그아웃 기능

### 글쓰기 페이지 (김명준) ex)

### 메인,리스트 페이지(전건우) ex)
- react-router를 사용한 동적 라우팅 (메인 -> 제품의 상세페이지 이동)
- fecth를 이용해 백엔드와 통신하여 메인 페이지 데이터 렌더링
- 클릭 이벤트 발생 시 각 버튼에 해당하는 필터된 데이터의 API 주소를 변경해 리랜더링해주는 필터 구현
- 메인 페이지의 제품 상세 이미지,리뷰 무한 Carousel 구현
- date 객체를 활용하여 배송 받는 타이머 기능 구현 

### 마이페이지 (전건우) ex)

### 제품 상세 페이지 (권오현) ex)
- fecth를 이용해 백엔드와 통신하여 페이지 데이터 렌더링
- 상품 이미지 캐러셀 노출 기능 구현
- 상세설명/정보/리뷰/배송,환불,문의 탭 기능 구현
- 상품 찜하기 기능 구현


## 🛠 사용한 기술

Front-End :<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a> <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=ReactRouter&logoColor=white"/></a> <img src="https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=SASS&logoColor=white"/></a> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>

Back-End : <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white"/></a> <img src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=Django&logoColor=white"/></a> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/></a> <img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=JSONWebTokens&logoColor=white"/></a>

## 🛠 사용한 툴

Common : <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"/></a> <img src="https://img.shields.io/badge/Trello-0052CC?style=flat-square&logo=Trello&logoColor=white"/></a> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"/></a> <img src="https://img.shields.io/badge/PostMan-FF6C37?style=flat-square&logo=PostMan&logoColor=white"/></a>

## 👥 팀원

- 프론트 : [권오현](https://github.com/im667), [김명준](https://github.com/JOHNKIM-KK), [전건우](https://github.com/fghjjkl32)
- 벡엔드 : [김정연](https://github.com/geekanne), [배찬영](https://github.com/cj4207), [장동국](https://github.com/JangDongGuk)
 (오늘은 너네집 벡앤드팀 [깃허브](https://github.com/wecode-bootcamp-korea/21-2nd-YourHouseToday-backend)

## Reference
이 프로젝트는 [오늘의집](https://ohou.se/) 사이트를 참조하여 학습목적으로 만들었습니다.
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.

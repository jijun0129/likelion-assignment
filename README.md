# 프론트엔드 3팀 팀원 프로필 관리 앱

## 사용 기술
### 1. react
### 2. axios
### 3. tanstack-query
### 4. styled-components
### 5. zustand

## 기능 설명
1. 팀원 목록 기능
    - jsonplaceholder에서 가져온 user 5명 + mock_data 4명을 zustand에 넣어 출력
    - persist 미들웨어를 사용하여 localStorage에 저장
      
2. 팀원 상세보기 모달
    - 카드 클릭시 모달로 정보를 출력, 프로필 이미지를 보여주는 것으로 통일
    - 바깥 클릭시 닫히도록 구현
      
3. 좋아요 기능
    - zustand를 이용하여 좋아요 기능을 구현
      
4. 다크모드 기능
    - Context API + styled-components ThemeProvider로 테마를 전환하도록 구현
    - localStorage에 저장하여 계속 상태를 유지
      
5. 팀원 추가 기능
    - 팀원 추가 폼을 구현하여 zustand에 추가
      

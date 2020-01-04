# Redux & Typescript & Navigation
redux, typescript, navigation을 사용한 react-native example

### 설명
- 간단한 counter & todoList

### 파일 구조
```
./src
├── components
├── hooks
├── modules
|   └── index.ts
├── screens
|   └── ExamScreen
|       └── index.tsx
|   └── index.tsx

```

### 설치 순서
1. typescript & redux 설치
> - [typescript로inti](https://facebook.github.io/react-native/docs/typescript)
> - yarn add redux react-redux @types/react-redux
2. [redux-persist 설치](https://github.com/rt2zz/redux-persist)
> - npm install redux-persist
> - yarn add @react-native-community/async-storage
3. [reactNavigation 설치](https://reactnavigation.org/docs/en/getting-started.html)

### 참고문서
- [typescript & redux 블로그](https://velog.io/@velopert/use-typescript-and-redux-like-a-pro#usetodos)

### 추가기능
- ~~로컬스토리지~~ [퍼시스트](https://medium.com/humanscape-tech/redux-persist-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-2077c9e566d9)
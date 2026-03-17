import React from 'react'
import UserCard from './UserCard'

function Main() {
  const user = {
    name: '김코딩',
    age: 29,
    hobbies: ['축구', 'React', '산책'],
    isActive: true,
  }

  return (
    <main style={{ padding: '20px' }}>
      <UserCard 
        {...user}/>

      {/* 
      위 코드는 다음과 같음:
      <UserCard 
        name="김코딩"
        age={29}
        hobbies={['축구', 'React', '산책']}
        isActive={true}
      />
      즉 이것들은 props 자바스크립트 객체로 만들어짐
      jsx에서 자식 컴포넌트에게 props를 보내려면 위와 같은 문법을 적용해야 함. 그래서 ...user 스프레드 문법을 사용한 것임.
      user 객체 자체를 자식 컴포넌트에게 전달하기 위해 
      <UserCard user> 라고 작성하면 jsx 프로퍼티 문법 에러임
      */}
    </main>
  )
}

export default Main

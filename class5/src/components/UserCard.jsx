import React from 'react'
import Button from './Button'

function UserCard({ name, age, hobbies, isActive }) {
  const handleClick = () => {
    alert(`${name}님을 클릭했습니다!`)
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p>나이: {age}</p>
      <p>활성 상태: {isActive ? '🟢 활성' : '🔴 비활성'}</p>
      <p>취미:</p>
      <ul>
        {hobbies.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>
      <Button label="자세히 보기" onClick={handleClick} />
    </div>
  )
}

export default UserCard

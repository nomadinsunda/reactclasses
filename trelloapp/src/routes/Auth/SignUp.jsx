import React, {useState, useCallback} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'
import * as D from '../../data'

// 초기 폼 상태 정의 (테스트를 위해 무작위 이메일과 기본 비번 설정)
const initialFormState = {
  email: D.randomEmail(), 
  password: '1', 
  confirmPassword: '1'
}

export default function SignUp() {
  const [{email, password, confirmPassword}, setForm] = useState(initialFormState)

  // 입력값 변경 핸들러 (커링 패턴)
  const changed = useCallback(
    (key) => (e) => {
      setForm((obj) => ({...obj, [key]: e.target.value}))
    },
    []
  )

  const navigate = useNavigate()
  const {signup} = useAuth()

  // 계정 생성 버튼 클릭 시 실행
  const createAccount = useCallback(() => {
    console.log(email, password, confirmPassword)
    
    // 비밀번호 일치 확인 로직
    if (password === confirmPassword) {
      signup(email, password, () => navigate('/'))
    } else {
      alert('password is not equal to confirmPassword')
    }
  }, [confirmPassword, email, navigate, password, signup])

  return (
    // 전체 배경색만 지정하고 내부를 중앙으로 모읍니다.
    <div className="flex flex-col justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full px-2 mx-auto max-w-md">
        {/* 실제 폼 카드는 여기서 시작합니다 */}
        <div className="w-full px-8 py-10 text-black bg-white rounded-xl shadow-2xl border border-gray-200">
          <h1 className="mb-8 text-3xl font-bold text-center text-primary">Sign Up</h1>
          
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Email Address</span></label>
            <input 
              type="text" 
              className="w-full p-3 mb-4 input input-bordered input-primary" 
              placeholder="Email" 
              value={email} 
              onChange={changed('email')}
            />
          </div>
          
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Password</span></label>
            <input 
              type="password" 
              className="w-full p-3 mb-4 input input-bordered input-primary" 
              placeholder="Password" 
              value={password} 
              onChange={changed('password')}
            />
          </div>
          
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Confirm Password</span></label>
            <input 
              type="password" 
              className="w-full p-3 mb-6 input input-bordered input-primary" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={changed('confirmPassword')}
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full btn btn-primary text-lg" 
            onClick={createAccount}
          >
            Create Account
          </button>
          
          <div className="mt-8 text-center text-gray-600">
            Already have an account?
            <Link className="ml-2 link link-primary font-semibold" to="/login/">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, {useState, useCallback, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'
import * as U from '../../utils'

// 초기 폼 상태 정의
const initialFormState = {email: '', password: ''}

export default function Login() {
  const [{email, password}, setForm] = useState(initialFormState)
  const navigate = useNavigate()
  const {login} = useAuth()

  const changed = useCallback((key) => (e) => {
    setForm((obj) => ({...obj, [key]: e.target.value}))
  }, [])

  const loginAccount = useCallback(() => {
    login(email, password, () => navigate('/'))
  }, [email, login, navigate, password])

  useEffect(() => {
    U.readObjectP('user')
      .then((user) => { if (user) setForm(user) })
      .catch(() => {})
  }, [])

  return (
    // 1. 전체 배경은 회색으로, 내용은 정중앙 정렬
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      {/* 2. 로그인 카드: max-w-md로 크기를 제한하고 그림자를 강화합니다 */}
      <div className="w-full max-w-md p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
          <h1 className="mb-8 text-3xl font-bold text-center text-primary">Login</h1>
          
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input 
                type="text" 
                className="input input-bordered input-primary w-full" 
                placeholder="you@example.com" 
                value={email}
                onChange={changed('email')}
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input 
                type="password" 
                className="input input-bordered input-primary w-full" 
                placeholder="Enter your password" 
                value={password}
                onChange={changed('password')}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary w-full mt-4 text-lg" 
              onClick={loginAccount}
            >
              LOGIN
            </button>
          </div>
          
          <div className="mt-8 text-center text-gray-600 border-t pt-6">
            New here? 
            <Link className="ml-2 link link-primary font-bold" to="/signup/">Create account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
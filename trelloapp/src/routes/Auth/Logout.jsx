import React, {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {Modal, ModalContent, ModalAction} from '../../theme/daisyui'
import {useToggle} from '../../hooks'
import {useAuth} from '../../contexts'
import {Button} from '../../theme/daisyui'

export default function Logout() {
  const [open, toggleOpen] = useToggle(true)
  const navigate = useNavigate()
  const {logout} = useAuth()

  const onAccept = useCallback(() => {
    logout(() => {
      toggleOpen()
      navigate('/')
    })
  }, [logout, navigate, toggleOpen])

  const onCancel = useCallback(() => {
    toggleOpen()
    navigate(-1)
  }, [navigate, toggleOpen])

  return (
    <div className={`modal ${open ? 'modal-open' : ''} fixed inset-0 z-50 flex items-center justify-center bg-black/60`}>
      <div className="modal-box bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-200">
        
        <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Logout</h3>
        <p className="text-gray-600 text-center mb-8">정말로 로그아웃 하시겠습니까?</p>

        <div className="flex w-full gap-4">
          {/* LOGOUT 버튼: bg-red-600과 text-white를 명시하여 무조건 보이게 함 */}
          <button 
            className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
            onClick={onAccept}
          >
            LOGOUT
          </button>
          
          {/* CANCEL 버튼: 테두리를 주어 구분함 */}
          <button 
            className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-lg border border-gray-300 transition-colors"
            onClick={onCancel}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  )
}
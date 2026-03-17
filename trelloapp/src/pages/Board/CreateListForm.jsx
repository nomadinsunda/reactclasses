import React, {useState, useCallback} from 'react'
import {Icon} from '../../theme/daisyui'
import * as D from '../../data'

const CreateListForm = ({onCreateList}) => {
  // 초기값을 무작위 타이틀로 설정
  const [value, setValue] = useState(D.randomTitleText())

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  const addList = useCallback(() => {
    if (value.trim().length > 0) {
      onCreateList(D.randomUUID(), value)
      setValue(D.randomTitleText())
    }
  }, [onCreateList, value])

  // 1. 엔터 키 지원 (UX의 핵심!)
  const onKeyDown = useCallback((e) => {
    if (e.key === 'Enter') addList()
  }, [addList])

  return (
    // 2. 배경과 패딩을 주어 리스트들 사이에서 '입력 영역'임을 명확히 함
    <div className="flex items-center p-3 m-2 bg-gray-200/50 rounded-xl border border-dashed border-gray-400 min-w-[18rem]">
      <input 
        placeholder="Enter list title..." 
        value={value} 
        onChange={onChange}
        onKeyDown={onKeyDown} // 엔터 키 이벤트 연결
        // 3. input-sm으로 크기를 살짝 키우고 너비를 꽉 채움
        className="input input-sm input-bordered input-primary flex-1 shadow-inner" 
      />
      <button 
        onClick={addList} 
        disabled={!value.trim().length}
        // 4. Icon을 감싼 버튼 형태로 만들어 클릭 영역 확보
        className="ml-2 btn btn-primary btn-sm btn-square tooltip tooltip-left" 
        data-tip="리스트 추가"
      >
        <Icon name="add" className="text-white" />
      </button>
    </div>
  )
}

export default CreateListForm
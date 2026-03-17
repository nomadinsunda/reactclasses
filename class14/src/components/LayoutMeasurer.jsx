import React, {
  useContext,
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
  useCallback
} from 'react'
import { AppContext } from './AppContext'

function LayoutMeasurer() {
  const { state, dispatch } = useContext(AppContext)
  const boxRef = useRef()
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (boxRef.current) {
      const measuredHeight = boxRef.current.getBoundingClientRect().height
      setHeight(measuredHeight)
    }
  }, [state.showBorder])

  const toggleBorder = useCallback(() => {
    dispatch({ type: 'TOGGLE_BORDER' })
  }, [dispatch])

  const style = useMemo(() => ({
    padding: '20px',
    margin: '10px 0',
    transition: 'all 0.3s ease',
    backgroundColor: '#f9f9f9',
    border: state.showBorder ? '3px solid hotpink' : 'none'
  }), [state.showBorder])

  return (
    <section style={{ padding: '10px', background: '#fafafa' }}>
      <h3>📏 Layout Measurement</h3>
      <div ref={boxRef} style={style}>
        <p>This box height is measured before paint.</p>
        <p>Height: {height.toFixed(2)}px</p>
      </div>
      <button onClick={toggleBorder}>Toggle Border</button>
    </section>
  )
}

export default LayoutMeasurer

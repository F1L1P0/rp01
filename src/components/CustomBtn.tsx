import { useSnapshot } from 'valtio'
import state from '../store'
import { getContrastingColor } from '../config/helpers.js'

function CustomBtn({ type, tittle, handleClick, customStyles }) {
  const snap = useSnapshot(state)
  const generateStyle = (type) => {
    switch (type) {
      case 'filled':
        return {
          backgroundColor: snap.color,
          color: getContrastingColor(snap.color),
        }
      case 'outline':
        return {
          borderWidth: '1px',
          borderColor: snap.color,
          color: snap.color,
        }
      default:
        return
    }
  }
  return (
    <button
      onClick={() => handleClick()}
      style={generateStyle(type)}
      className={`px-3 py-2 flex-1 rounded-md ${customStyles}`}>
      {tittle}
    </button>
  )
}

export default CustomBtn

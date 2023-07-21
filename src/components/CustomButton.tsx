import { useSnapshot } from 'valtio'
import state from '../store/index.js'
import { getContrastingColor } from '../config/helpers.js'

function CustomButton({ type, title, handleClick, customStyles }) {
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
      onClick={handleClick}
      style={generateStyle(type)}
      className={`px-3 py-2 flex-1 rounded-md ${customStyles}`}>
      {title}
    </button>
  )
}

export default CustomButton

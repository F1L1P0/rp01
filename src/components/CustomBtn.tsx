import { useSnapshot } from 'valtio'
import state from '../store'

function CustomBtn({ type, tittle, handleClick, customStyles }) {
  const snap = useSnapshot(state)
  const generateStyle = (type) => {
    switch (type) {
      case 'filled':
        return {
          backgroundColor: snap.color,
          color: '#fff',
        }

      default:
        return
    }
  }
  return (
    <button
      onClick={() => handleClick()}
      style={generateStyle(type)}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}>
      {tittle}
    </button>
  )
}

export default CustomBtn

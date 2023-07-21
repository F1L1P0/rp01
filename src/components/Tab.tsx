import { useSnapshot } from 'valtio'
import state from '../store'

function Tab({ tab, isFilterTab, isActiveTab, handleClick }) {
  const snap = useSnapshot(state)
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: 'transparent', opacity: 1 }
  return (
    <button
      key={tab.name}
      className={`tab-button ${
        isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'
      }`}
      onClick={handleClick}>
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'
        }`}
      />
    </button>
  )
}

export default Tab

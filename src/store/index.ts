import { proxy } from 'valtio'
import { IState } from './interface'

const state: IState = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
})

export default state

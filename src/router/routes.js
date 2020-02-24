import Developers from '../components/Developers'
import Platforms from '../components/Platforms'
import Games from '../components/Games'

export default [
  {
    path: '/',
    name: 'developers',
    component: Developers
  },
  {
    path: '/developer/:id/games',
    name: 'games',
    component: Games
  },
  {
    path: '/platforms',
    name: 'platforms',
    component: Platforms
  }
]
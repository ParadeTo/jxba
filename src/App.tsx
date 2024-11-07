import {Route, Routes} from 'react-router-dom'
import {Layout} from './Layout'
import {Home} from './Home'
import {Games} from './Games'
import {Teams} from './Teams'
import {Comment} from './Comment'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='games' element={<Games />} />
        <Route path='teams' element={<Teams />} />
        <Route path='comments/:id' element={<Comment />} />

        {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
        {/* <Route path='*' element={<NoMatch />} /> */}
      </Route>
    </Routes>
  )
}

export default App

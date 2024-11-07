import {ActionBar, DropdownMenu, Flex, NavBar, Tabbar, Toast} from 'react-vant'
import {
  CartO,
  ChatO,
  FriendsO,
  HomeO,
  ManagerO,
  MedalO,
  NotesO,
  Search,
  ShopO,
} from '@react-vant/icons'
import {Link, Outlet, useNavigate} from 'react-router-dom'
import {currentSession, currentSessionId, sessions} from './data'
import {createContext, useState} from 'react'
import {sessionContext} from './context'

export function Layout() {
  const [value, setValue] = useState<Record<string, number>>({
    session: currentSessionId,
  })
  const navigate = useNavigate()
  return (
    <>
      <NavBar
        title='JXBA'
        leftArrow={false}
        rightText={
          <DropdownMenu value={value} onChange={(v) => setValue(v)}>
            <DropdownMenu.Item
              name='session'
              options={sessions.map((s) => {
                return {
                  text: s.name,
                  value: s.id,
                }
              })}
            />
          </DropdownMenu>
        }
        fixed
      />

      <div style={{paddingTop: '48px', paddingBottom: '50px'}}>
        <sessionContext.Provider value={value.session}>
          <Outlet />
        </sessionContext.Provider>
      </div>
      <Tabbar>
        <Tabbar.Item icon={<MedalO />} onClick={() => navigate('/')}>
          <Link to='/'>排行</Link>
        </Tabbar.Item>
        <Tabbar.Item icon={<NotesO />} onClick={() => navigate('/games')}>
          <Link to='/games'>赛程</Link>
        </Tabbar.Item>
        {/* <Tabbar.Item icon={<ManagerO />}>
          <Link to='/teams'>球队</Link>
        </Tabbar.Item> */}
      </Tabbar>
    </>
  )
}

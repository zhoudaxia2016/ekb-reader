import React, {useEffect} from 'react'
import './App.less'
import {Routes, Route} from "react-router-dom"
import Manager from './pages/manager'
import Book from './pages/book'
import {ConfigProvider} from 'antd'
import Palette from './config/color'
import {useSearchParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

Object.keys(Palette).forEach(key => {
  document.body.style.setProperty(`--${key}`, Palette[key])
}, {})

function App() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: Palette.bg2,
          colorBgContainer: Palette.bg1,
          colorTextBase: Palette.fg1,
          colorText: Palette.fg2,
          colorTextDescription: Palette.fg3,
          colorTextHeading: Palette.fg1,
          colorTextSecondary: Palette.fg2,
          colorTextPlaceholder: Palette.fg3,
          colorPrimary: Palette.pr1,
          controlOutline: Palette.pr2,
          colorSuccess: Palette.pr2,
          colorError: Palette.pr3,
        },
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Manager/>}/>
          <Route path="/book" element={<Book searchParams={searchParams} navigate={navigate}/>}/>
        </Routes>
      </div>
    </ConfigProvider>
  )
}

export default App;

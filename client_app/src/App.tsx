import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Login from './components/Login'
import UserPanel from './components/UserPanel'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Orders from './components/Orders'

const cardStyle: React.CSSProperties = {
  background: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: 12,
  padding: 16,
  boxShadow: '0 1px 2px rgba(0,0,0,0.06)'
}

function Shell(): React.JSX.Element {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f7fb', color: '#0f172a', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, "Apple Color Emoji", "Segoe UI Emoji"' }}>
      {/* Sidebar */}
      <aside style={{
        width: 260,
        background: '#0f2230',
        color: '#e6f2f9',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: 'linear-gradient(135deg,#00d4ff,#0077ff)' }} />
          <strong style={{ letterSpacing: 0.3 }}>Client</strong>
        </div>
        <nav style={{ display: 'grid', gap: 6 }}>
          <Link to="/panel" style={{ color: '#cfe5f1', textDecoration: 'none', padding: '10px 12px', borderRadius: 8, background: 'rgba(255,255,255,0.04)' }}>Панель</Link>
          <Link to="/orders" style={{ color: '#cfe5f1', textDecoration: 'none', padding: '10px 12px', borderRadius: 8 }}>Заказы</Link>
          <Link to="/profile" style={{ color: '#cfe5f1', textDecoration: 'none', padding: '10px 12px', borderRadius: 8 }}>Профиль</Link>
          <Link to="/settings" style={{ color: '#cfe5f1', textDecoration: 'none', padding: '10px 12px', borderRadius: 8 }}>Настройки</Link>
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <Link to="/login" style={{ color: '#9fc5d9', textDecoration: 'none', fontSize: 14 }}>Выйти</Link>
        </div>
      </aside>

      {/* Main area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header style={{
          background: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <h1 style={{ margin: 0, fontSize: 18 }}>Личный кабинет</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <input placeholder="Поиск..." style={{
              border: '1px solid #e5e7eb',
              borderRadius: 8,
              padding: '8px 10px',
              outline: 'none'
            }} />
          </div>
        </header>

        {/* Content */}
        <main style={{ padding: 20 }}>
          <div style={{ display: 'grid', gap: 16 }}>
            <Routes>
              <Route path="/" element={<Navigate to="/panel" replace />} />
              <Route path="/panel" element={<div style={cardStyle}><UserPanel /></div>} />
              <Route path="/profile" element={<div style={cardStyle}><Profile /></div>} />
              <Route path="/orders" element={<div style={cardStyle}><Orders /></div>} />
              <Route path="/settings" element={<div style={cardStyle}><Settings /></div>} />
              <Route path="*" element={<div style={cardStyle}>Страница не найдена</div>} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}

function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Shell />} />
    </Routes>
  )
}

export default App



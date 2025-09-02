import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(): React.JSX.Element {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      await new Promise((r) => setTimeout(r, 500))
      if (!username || !password) throw new Error('Введите логин и пароль')
      navigate('/panel')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Ошибка входа'
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #0b1d2a 0%, #0f2a3d 100%)',
      overflow: 'auto'
    }}>
      <div style={{
        width: '100%',
        maxWidth: 420,
        padding: '48px 40px 40px',
        background: '#0f2230',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16,
        boxShadow: '0 12px 32px rgba(0,0,0,0.4)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: 'linear-gradient(135deg, #00d4ff 0%, #0077ff 100%)',
            boxShadow: '0 4px 14px rgba(0, 136, 255, 0.45)'
          }} />
          <div style={{ color: '#e6f2f9', fontSize: 18, fontWeight: 600, letterSpacing: 0.3 }}>Client</div>
        </div>

        <h1 style={{
          margin: 0,
          color: '#ffffff',
          fontSize: 28,
          lineHeight: 1.25,
          fontWeight: 700
        }}>Вход в систему</h1>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', color: '#b9d2df', fontSize: 13, marginBottom: 8 }}>Логин</label>
          <div style={{ position: 'relative', marginBottom: 18 }}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="name@example.com"
              style={{
                width: '100%',
                padding: '14px 14px',
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.08)',
                background: '#0b1d2a',
                color: '#e6f2f9',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 180, 255, 0.6)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              required
            />
          </div>

          <label style={{ display: 'block', color: '#b9d2df', fontSize: 13, marginBottom: 8 }}>Пароль</label>
          <div style={{ position: 'relative', marginBottom: 8 }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '14px 44px 14px 14px',
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.08)',
                background: '#0b1d2a',
                color: '#e6f2f9',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 180, 255, 0.6)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
              style={{
                position: 'absolute',
                right: 8,
                top: 6,
                height: 36,
                padding: '0 10px',
                borderRadius: 8,
                background: 'transparent',
                color: '#9fc5d9',
                border: '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer'
              }}
            >
              {showPassword ? 'Скрыть' : 'Показать'}
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4, marginBottom: 20 }}>
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#b9d2df', fontSize: 13 }}>
              <input type="checkbox" style={{ accentColor: '#00a7ff' }} /> Запомнить меня
            </label>
            <a href="#" style={{ color: '#5cc7ff', fontSize: 13, textDecoration: 'none' }}>Забыли пароль?</a>
          </div>

          {error && <div style={{ color: '#ffb4b4', marginBottom: 12 }}>{error}</div>}

          <button type="submit" disabled={isLoading} style={{
            width: '100%',
            padding: '14px 18px',
            borderRadius: 10,
            border: '1px solid rgba(0, 180, 255, 0.6)',
            background: 'linear-gradient(135deg, #00d4ff 0%, #0077ff 100%)',
            color: '#062030',
            fontWeight: 700,
            letterSpacing: 0.2,
            cursor: 'pointer',
            boxShadow: '0 10px 22px rgba(0, 140, 255, 0.35)'
          }}>
            {isLoading ? 'Вход...' : 'Войти'}
          </button>

          <div style={{ textAlign: 'center', marginTop: 18, color: '#9fc5d9', fontSize: 12 }}>
            Нажимая «Войти», вы соглашаетесь с условиями использования
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login



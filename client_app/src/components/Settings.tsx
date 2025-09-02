import React, { useState } from 'react'

function Settings(): React.JSX.Element {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [language, setLanguage] = useState<'ru' | 'en'>('ru')

  return (
    <div style={{ padding: 24 }}>
      <h1>Настройки</h1>
      <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
        <label>
          Тема
          <select value={theme} onChange={(e) => setTheme(e.target.value as 'light' | 'dark')} style={{ width: '100%', padding: 8 }}>
            <option value="light">Светлая</option>
            <option value="dark">Тёмная</option>
          </select>
        </label>
        <label>
          Язык
          <select value={language} onChange={(e) => setLanguage(e.target.value as 'ru' | 'en')} style={{ width: '100%', padding: 8 }}>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </label>
        <div>Текущие: тема — {theme}, язык — {language}</div>
      </div>
    </div>
  )
}

export default Settings



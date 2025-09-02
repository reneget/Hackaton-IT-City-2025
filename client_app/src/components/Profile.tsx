import React, { useState } from 'react'

function Profile(): React.JSX.Element {
  const [name, setName] = useState('Иван Иванов')
  const [email, setEmail] = useState('ivan@example.com')
  const [phone, setPhone] = useState('+7 900 000-00-00')
  const [message, setMessage] = useState<string | null>(null)

  const handleSave = async () => {
    setMessage(null)
    await new Promise((r) => setTimeout(r, 500))
    setMessage('Профиль обновлен')
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Профиль</h1>
      <div style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
        <label>
          Имя
          <input value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: 8 }} />
        </label>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: 8 }} />
        </label>
        <label>
          Телефон
          <input value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: 8 }} />
        </label>
        <button onClick={handleSave} style={{ padding: '8px 12px', width: 'fit-content' }}>Сохранить</button>
        {message && <div style={{ color: 'green' }}>{message}</div>}
      </div>
    </div>
  )
}

export default Profile



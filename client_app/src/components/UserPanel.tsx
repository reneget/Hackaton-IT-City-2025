import React from 'react'

function UserPanel(): React.JSX.Element {
  return (
    <div style={{ padding: 24 }}>
      <h1>Пользовательская панель</h1>
      <p>Добро пожаловать! Здесь вы найдете сводку ваших заказов и уведомлений.</p>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        <section style={{ border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
          <h3>Последние заказы</h3>
          <ul>
            <li>#1024 — в обработке</li>
            <li>#1023 — доставлен</li>
            <li>#1022 — отменен</li>
          </ul>
        </section>
        <section style={{ border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
          <h3>Уведомления</h3>
          <ul>
            <li>Скидка 10% на следующую покупку</li>
            <li>Обновите пароль для безопасности</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default UserPanel



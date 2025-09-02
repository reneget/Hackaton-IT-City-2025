import React from 'react'

type Order = {
  id: number
  date: string
  status: 'processing' | 'delivered' | 'cancelled'
  total: number
}

const mockOrders: Order[] = [
  { id: 1024, date: '2025-09-01', status: 'processing', total: 5400 },
  { id: 1023, date: '2025-08-20', status: 'delivered', total: 12990 },
  { id: 1022, date: '2025-08-10', status: 'cancelled', total: 1990 }
]

function Orders(): React.JSX.Element {
  const formatStatus = (s: Order['status']) =>
    s === 'processing' ? 'в обработке' : s === 'delivered' ? 'доставлен' : 'отменен'

  return (
    <div style={{ padding: 24 }}>
      <h1>Мои заказы</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>№</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>Дата</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>Статус</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {mockOrders.map((o) => (
            <tr key={o.id}>
              <td style={{ borderBottom: '1px solid #f0f0f0', padding: 8 }}>#{o.id}</td>
              <td style={{ borderBottom: '1px solid #f0f0f0', padding: 8 }}>{o.date}</td>
              <td style={{ borderBottom: '1px solid #f0f0f0', padding: 8 }}>{formatStatus(o.status)}</td>
              <td style={{ borderBottom: '1px solid #f0f0f0', padding: 8 }}>{o.total.toLocaleString('ru-RU')} ₽</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Orders



import React from 'react';

const Users: React.FC = () => {
    return (
        <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
            <h2 style={{ marginTop: 0 }}>Пользователи</h2>
            <div style={{ marginBottom: 12, display: 'flex', gap: 8 }}>
                <input placeholder="Поиск пользователя..." style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '8px 10px', outline: 'none' }} />
                <button style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #0ea5e9', background: '#0ea5e9', color: '#fff', cursor: 'pointer' }}>Добавить</button>
            </div>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left', padding: 10, borderBottom: '1px solid #e5e7eb', color: '#475569', fontSize: 13 }}>ID</th>
                            <th style={{ textAlign: 'left', padding: 10, borderBottom: '1px solid #e5e7eb', color: '#475569', fontSize: 13 }}>Имя</th>
                            <th style={{ textAlign: 'left', padding: 10, borderBottom: '1px solid #e5e7eb', color: '#475569', fontSize: 13 }}>E‑mail</th>
                            <th style={{ textAlign: 'left', padding: 10, borderBottom: '1px solid #e5e7eb', color: '#475569', fontSize: 13 }}>Роль</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: 10, borderBottom: '1px solid #f1f5f9' }}>1</td>
                            <td style={{ padding: 10, borderBottom: '1px solid #f1f5f9' }}>Иван Иванов</td>
                            <td style={{ padding: 10, borderBottom: '1px solid #f1f5f9' }}>ivan@example.com</td>
                            <td style={{ padding: 10, borderBottom: '1px solid #f1f5f9' }}>Администратор</td>
                        </tr>
                        <tr>
                            <td style={{ padding: 10, borderBottom: '1px solid #f1f5f9' }}>2</td>
                            <td style={{ padding: 10, borderBottom: '1px solid #f1f5f9' }}>Мария Петрова</td>
                            <td style={{ padding: 10, borderBottom: '1px solid #f1f5f9' }}>maria@example.com</td>
                            <td style={{ padding: 10, borderBottom: '1px solid #f1f5f9' }}>Редактор</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;




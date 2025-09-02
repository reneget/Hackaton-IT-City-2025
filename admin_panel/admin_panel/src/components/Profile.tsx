import React from 'react';

const Profile: React.FC = () => {
    return (
        <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
            <h2 style={{ marginTop: 0 }}>Профиль</h2>
            <div style={{ display: 'grid', gap: 12, maxWidth: 520 }}>
                <label style={{ display: 'grid', gap: 6 }}>
                    <span style={{ color: '#475569', fontSize: 13 }}>Имя</span>
                    <input style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 12px', outline: 'none' }} placeholder="Иван Иванов" />
                </label>
                <label style={{ display: 'grid', gap: 6 }}>
                    <span style={{ color: '#475569', fontSize: 13 }}>E‑mail</span>
                    <input style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 12px', outline: 'none' }} placeholder="user@example.com" />
                </label>
                <label style={{ display: 'grid', gap: 6 }}>
                    <span style={{ color: '#475569', fontSize: 13 }}>Телефон</span>
                    <input style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 12px', outline: 'none' }} placeholder="+7 (900) 000-00-00" />
                </label>
                <div>
                    <button style={{
                        padding: '10px 14px',
                        borderRadius: 8,
                        border: '1px solid #0ea5e9',
                        background: '#0ea5e9',
                        color: '#ffffff',
                        cursor: 'pointer'
                    }}>Сохранить</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;




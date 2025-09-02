import React from 'react';

const Settings: React.FC = () => {
    return (
        <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
            <h2 style={{ marginTop: 0 }}>Настройки</h2>
            <div style={{ display: 'grid', gap: 16, maxWidth: 620 }}>
                <section style={{ display: 'grid', gap: 10 }}>
                    <h3 style={{ margin: 0, fontSize: 16 }}>Общие</h3>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <input type="checkbox" /> Включить уведомления
                    </label>
                    <label style={{ display: 'grid', gap: 6 }}>
                        <span style={{ color: '#475569', fontSize: 13 }}>Язык интерфейса</span>
                        <select style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 12px', outline: 'none' }}>
                            <option>Русский</option>
                            <option>English</option>
                        </select>
                    </label>
                </section>
                <section style={{ display: 'grid', gap: 10 }}>
                    <h3 style={{ margin: 0, fontSize: 16 }}>Безопасность</h3>
                    <label style={{ display: 'grid', gap: 6 }}>
                        <span style={{ color: '#475569', fontSize: 13 }}>Смена пароля</span>
                        <input type="password" placeholder="Новый пароль" style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 12px', outline: 'none' }} />
                    </label>
                    <button style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #0ea5e9', background: '#0ea5e9', color: '#fff', cursor: 'pointer', width: 'fit-content' }}>Сохранить</button>
                </section>
            </div>
        </div>
    );
};

export default Settings;




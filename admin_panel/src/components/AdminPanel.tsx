import React from 'react';
import { Link, Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import Profile from './Profile';
import Users from './Users';
import Settings from './Settings';

const cardStyle: React.CSSProperties = {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: 12,
    padding: 16,
    boxShadow: '0 1px 2px rgba(0,0,0,0.06)'
};

const AdminPanel: React.FC = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f7fb', color: '#0f172a' }}>
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
                    <strong style={{ letterSpacing: 0.3 }}>Admin</strong>
                </div>
                <nav style={{ display: 'grid', gap: 6 }}>
                    <Link to="/admin" style={{ color: '#cfe5f1', textDecoration: 'none', padding: '10px 12px', borderRadius: 8, background: 'rgba(255,255,255,0.04)' }}>Панель</Link>
                    <Link to="/admin/users" style={{ color: '#cfe5f1', textDecoration: 'none', padding: '10px 12px', borderRadius: 8 }}>Пользователи</Link>
                    <Link to="/admin/profile" style={{ color: '#cfe5f1', textDecoration: 'none', padding: '10px 12px', borderRadius: 8 }}>Профиль</Link>
                    <Link to="/admin/settings" style={{ color: '#cfe5f1', textDecoration: 'none', padding: '10px 12px', borderRadius: 8 }}>Настройки</Link>
                </nav>
                <div style={{ marginTop: 'auto' }}>
                    <a href="/login" style={{ color: '#9fc5d9', textDecoration: 'none', fontSize: 14 }}>Выйти</a>
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
                    <h1 style={{ margin: 0, fontSize: 18 }}>Панель управления</h1>
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
                <main style={{ padding: 20, display: 'grid', gap: 16 }}>
                    <Switch>
                        <Route path="/admin" exact>
                            {/* Dashboard default content */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 16 }}>
                                <div style={cardStyle}>
                                    <div style={{ color: '#64748b', fontSize: 12 }}>Пользователи</div>
                                    <div style={{ fontSize: 24, fontWeight: 700 }}>1,248</div>
                                </div>
                                <div style={cardStyle}>
                                    <div style={{ color: '#64748b', fontSize: 12 }}>Заявки</div>
                                    <div style={{ fontSize: 24, fontWeight: 700 }}>86</div>
                                </div>
                                <div style={cardStyle}>
                                    <div style={{ color: '#64748b', fontSize: 12 }}>Ошибки</div>
                                    <div style={{ fontSize: 24, fontWeight: 700, color: '#ef4444' }}>5</div>
                                </div>
                                <div style={cardStyle}>
                                    <div style={{ color: '#64748b', fontSize: 12 }}>Аптайм</div>
                                    <div style={{ fontSize: 24, fontWeight: 700, color: '#16a34a' }}>99.9%</div>
                                </div>
                            </div>
                            <div style={{ ...cardStyle, padding: 0, marginTop: 16 }}>
                                <div style={{ padding: 16, borderBottom: '1px solid #e5e7eb', fontWeight: 600 }}>Последние события</div>
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                        <thead>
                                            <tr>
                                                <th style={{ textAlign: 'left', padding: 12, fontSize: 13, color: '#475569', borderBottom: '1px solid #e5e7eb' }}>Дата</th>
                                                <th style={{ textAlign: 'left', padding: 12, fontSize: 13, color: '#475569', borderBottom: '1px solid #e5e7eb' }}>Событие</th>
                                                <th style={{ textAlign: 'left', padding: 12, fontSize: 13, color: '#475569', borderBottom: '1px solid #e5e7eb' }}>Статус</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ padding: 12, borderBottom: '1px solid #f1f5f9' }}>2025-09-02 12:00</td>
                                                <td style={{ padding: 12, borderBottom: '1px solid #f1f5f9' }}>Импорт данных</td>
                                                <td style={{ padding: 12, borderBottom: '1px solid #f1f5f9' }}>Успех</td>
                                            </tr>
                                            <tr>
                                                <td style={{ padding: 12, borderBottom: '1px solid #f1f5f9' }}>2025-09-02 11:20</td>
                                                <td style={{ padding: 12, borderBottom: '1px solid #f1f5f9' }}>Авторизация администратора</td>
                                                <td style={{ padding: 12, borderBottom: '1px solid #f1f5f9' }}>Успех</td>
                                            </tr>
                                            <tr>
                                                <td style={{ padding: 12 }}>2025-09-02 10:05</td>
                                                <td style={{ padding: 12 }}>Создание пользователя</td>
                                                <td style={{ padding: 12, color: '#f59e0b' }}>В процессе</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Route>
                        <Route path="/admin/profile" component={Profile} />
                        <Route path="/admin/users" component={Users} />
                        <Route path="/admin/settings" component={Settings} />
                        <Redirect to="/admin" />
                    </Switch>
                </main>
            </div>
        </div>
    );
};

export default AdminPanel;
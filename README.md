# Hackaton-IT-City-2025

Этот проект переведен с React/TypeScript на серверный рендер с Jinja2 (FastAPI).

## Запуск

1. Установите зависимости:

```
pip install -r requirements.txt
```

2. Запустите приложение:

```
uvicorn main:app --reload
```

3. Откройте в браузере:

- Админ: `/login`, `/admin`, `/admin/users`, `/admin/profile`, `/admin/settings`
- Клиент: `/client/login`, `/client/panel`, `/client/orders`, `/client/profile`, `/client/settings`

Исходные папки `admin_panel` и `client_app` больше не используются для фронтенда.
Проект является ЗАГОТОВКОЙ для хакатона "ГОРОД IT: HACK 2025" и не является финальным продуктом. Он ничем не связан с финальной версией, или полученными кейсами самого Хакатона. Почему он публичный? Да не знаю чёт, просто решил что это должны увидеть все

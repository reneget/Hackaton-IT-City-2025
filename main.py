from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

import logging

from log import config

logging.getLogger("urllib3").setLevel(logging.WARNING)
logging.getLogger("requests").setLevel(logging.WARNING)

logging.config.dictConfig(config)
main_log = logging.getLogger(__name__)

app = FastAPI()
main_log.info('FastAPI object initialized')

main_log.info('Connecting routers')
# app.include_router()
main_log.info('Routers are connected')

# Mount static files and configure templates
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Database init on startup
try:
    from DataBase.core.db_connection import create_tables

    @app.on_event("startup")
    async def on_startup() -> None:
        main_log.info('Creating database tables if not exist')
        try:
            create_tables()
            main_log.info('Database tables are in sync')
        except Exception as e:
            main_log.exception('Failed to create database tables: %s', e)
except Exception as e:
    main_log.warning('Database init not configured: %s', e)


# Admin pages
@app.get("/login", response_class=HTMLResponse)
async def admin_login(request: Request):
    return templates.TemplateResponse("admin/login.html", {"request": request})


@app.post("/login")
async def admin_login_post(username: str = Form(...), password: str = Form(...)) -> RedirectResponse:
    return RedirectResponse(url="/admin", status_code=303)


@app.get("/admin", response_class=HTMLResponse)
async def admin_panel(request: Request):
    return templates.TemplateResponse("admin/panel.html", {"request": request})


@app.get("/admin/users", response_class=HTMLResponse)
async def admin_users(request: Request):
    return templates.TemplateResponse("admin/users.html", {"request": request})


@app.get("/admin/profile", response_class=HTMLResponse)
async def admin_profile(request: Request):
    return templates.TemplateResponse("admin/profile.html", {"request": request})


@app.get("/admin/settings", response_class=HTMLResponse)
async def admin_settings(request: Request):
    return templates.TemplateResponse("admin/settings.html", {"request": request})


# Client pages
@app.get("/client/login", response_class=HTMLResponse)
async def client_login(request: Request):
    return templates.TemplateResponse("client/login.html", {"request": request})


@app.post("/client/login")
async def client_login_post(username: str = Form(...), password: str = Form(...)) -> RedirectResponse:
    return RedirectResponse(url="/client/panel", status_code=303)


@app.get("/client", response_class=HTMLResponse)
async def client_root_redirect() -> RedirectResponse:
    return RedirectResponse(url="/client/panel", status_code=302)


@app.get("/client/panel", response_class=HTMLResponse)
async def client_panel(request: Request):
    return templates.TemplateResponse("client/panel.html", {"request": request})


@app.get("/client/orders", response_class=HTMLResponse)
async def client_orders(request: Request):
    mock_orders = [
        {"id": 1024, "date": "2025-09-01", "status": "в обработке", "total": 5400},
        {"id": 1023, "date": "2025-08-20", "status": "доставлен", "total": 12990},
        {"id": 1022, "date": "2025-08-10", "status": "отменен", "total": 1990},
    ]
    return templates.TemplateResponse("client/orders.html", {"request": request, "orders": mock_orders})


@app.get("/client/profile", response_class=HTMLResponse)
async def client_profile(request: Request):
    user = {"name": "Иван Иванов", "email": "ivan@example.com", "phone": "+7 900 000-00-00"}
    return templates.TemplateResponse("client/profile.html", {"request": request, "user": user})


@app.get("/client/settings", response_class=HTMLResponse)
async def client_settings(request: Request):
    return templates.TemplateResponse("client/settings.html", {"request": request, "theme": "light", "language": "ru"})

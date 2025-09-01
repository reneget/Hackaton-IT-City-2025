from . import config as cf
from .env_conf import Env_conf

main_config = cf.Config(
    loki = cf.Loki_config(
        url = Env_conf.read()('LOKI_URL')
    )
)
from environs import Env

from typing import Any

class Env_conf:

    @staticmethod
    def read():
        env = Env()
        env.read_env()

        return env
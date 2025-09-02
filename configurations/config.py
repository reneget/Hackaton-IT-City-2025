from dataclasses import dataclass
from typing import Optional

@dataclass
class Loki_config:
    url: str
    tags: Optional[dict] = None
    auth: Optional[tuple] = ('admin', 'admin')
    version: str = '1'

@dataclass
class Config:
    loki: Loki_config




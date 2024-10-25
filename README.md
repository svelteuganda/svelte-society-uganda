# SVELTE SOCIETY UGANDA

### Project structure

```
svelte-society-uganda/
├── src/
│   ├── lib/
|   ├── apps/                     <- Contains all project apps
│   ├── manage.py
|   ├── static/                   <- static files
|   ├── src/                      <- development static files ie ts, scss
|   ├── templates/                <- templates
│   └── config/                   <- Project configuration, settings, wsgi, asgi
|       ├── settings/
|       |   ├── __init__.py
|       |   ├── base.py           <- Settings common to all environments
|       |   ├── development.py    <- Development specific settings
|       |   ├── production.py     <- Production specific settings
│       ├── __init__.py
│       ├── asgi.py
│       ├── settings.py
│       ├── urls.py
│       └── wsgi.py
```

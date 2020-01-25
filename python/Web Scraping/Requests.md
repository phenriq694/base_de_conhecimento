# Requests
## Módulo utilizado para fazer download de informações de paginas da internet.

### Instalar o módulo usando o pip:
```
pip install requests
```

### get method:
```
import requests

res = requests.get('https://automatheboringstuff.com/files/rj.txt')
```
 
### Request Status:
```
res.status_code # Retorna o código do status da requisição.

res.raise_for_status() # Retorna uma mensagem de erro caso a requisção falhe ou não retorna nada caso ela tenha sucesso. 
```

## Fontes: 
### Automate the borign stuff with python - Web Scraping.
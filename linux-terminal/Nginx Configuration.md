# Nginx Configuration

1. Install:
```
sudo apt install nginx
```
2. Edit the following file:
```
sudo vim /etc/nginx/sites-available/default
```
3. Basic configuraion:
```
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  server_name _;

  location / {
    proxy_pass http:localhost:3333;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade'; 
    proxy_set_header Host $host;
    proxy_chache_bypass $http_upgrade;
  }
}
``` 
4. Restart nginx service:
```
sudo service nginx restart
```
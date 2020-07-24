# PM2 Configuration

1. Install:
```
sudo npm install -g pm2
```
2. Run:
```
pm2 start dist/server.js
```
3. To show all services running in the application:
```
pm2 list
```
4. To config pm2 to run the application after the server reboot:
```
pm2 startup systemd
```

## Sources:
Rockseat GoStack - Module Node Deploy - Using PM2
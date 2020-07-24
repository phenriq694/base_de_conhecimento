# Doors 

1. Expose a door for external access:
```
sudo ufw allow port_number
```
2. Show which process is running on a port: 
```
lsof -i :port_number
```
3. Kill a process:
```
kill -9 PID_number
```
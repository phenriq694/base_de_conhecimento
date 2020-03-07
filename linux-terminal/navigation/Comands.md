# Comands

## pwd (print work directory):
![Captura de tela de 2020-03-07 04-19-07](https://user-images.githubusercontent.com/54601930/76138976-db28d280-602a-11ea-8a2e-9ce8ea1c88d5.png)

## cd (change directory):
```
cd path_name
```
Para ir ao diretório anterior, usar:
```
cd ..
```
![Captura de tela de 2020-03-07 04-23-49](https://user-images.githubusercontent.com/54601930/76139051-77eb7000-602b-11ea-8df0-e11879a1abfc.png)

Para ir para uma pasta fora da atual acrescentar a '/' na frente para passar o endereço completo.
```
kali@kali:~/Documents$ cd /root/
kali@kali:~/$
```

## ls (list):
![Captura de tela de 2020-03-07 04-25-24](https://user-images.githubusercontent.com/54601930/76139076-b08b4980-602b-11ea-81dd-c03daadd8181.png)

Também é possível listar outras pastas que não seja a atual, basta adicionar o endereço dela após o 'ls'. 
```
kali@kali:~/Documents$ ls /home/
```
Para listar todos os arquivos de uma pasta, até mesmo os ocultos, usar o comando:
```
ls -la
```

## mkdir (Make directory):
```
mkdir new_dir_name
```

## rmdir (Remove directory):
```
rmdir dir_name/
```

## cp (copy):
```
cp file_name.ext destination_path/file_name.ext
```

## rm (remove):
```
rm path/file_name.ext
```

## mv (move):
```
mv file_name.ext destination_path/file_name.ext
```

## create a file:
```
echo "message" > file_name.txt
```

## locate a file:
```
locate file_name.txt
```
Se o arquivo não aparecer, atualize a base de dados:
```
sudo updatedb
``` 

## man:
Fornece informações sobre um comando.
```
man comand
```

## Fontes:
- Full Ethical Hacking Course - Network Penetration Testing for Beginners (2019)
https://www.youtube.com/watch?v=3Kq1MIfTWCE&list=PL2SVXQtnoT7JZ_O-6t4mI1st_DpDdL-qk&index=46&t=110s
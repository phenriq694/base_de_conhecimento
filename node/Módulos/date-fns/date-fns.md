# date-fns
## Biblioteca para lidar com datas. 
1. Instalação:
```
yarn add date-fns@next
```

2. Métodos
### parseISO:
Transforma uma string de data, exemplo '2020-03-17T19:00:00-03:00', em um objeto do tipo 'Date' do javascript. 
Importação:
```javascript
import { parseISO } from 'date-fns';
```
Exemplo de uso: https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/controllers/AppointmentController.js#L78

### startOfHour(date):
Pega apenas o inicio de uma hora passada e não os minutos e segundos
Importação:
```javascript
import { startOfHour } from 'date-fns';
```
Exemplo de uso: https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/controllers/AppointmentController.js#L78

### startOfDay(date):
Pega apenas o inicio de um dia.
Importação:
```javascript
import { startOfDay } from 'date-fns';
```
Exemplo de uso: https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/controllers/ScheduleController.js#L26

### endOfDay(date):
Pega apenas o final de um dia.
Importação:
```javascript
import { endOfDay } from 'date-fns';
```
Exemplo de uso: https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/controllers/ScheduleController.js#L26

### isBefore(startHour, currentHour):
Verifica se uma data vem antes de outra. 
Importação:
```javascript
import { isBefore } from 'date-fns';
```
Exemplo de uso: https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/controllers/AppointmentController.js#L80


## Fontes:
- Rocketseat GoStack - Módulo Continuando API do GoBarber - Validações de agendamento.
- Rocketseat GoStack - Módulo Continuando API do GoBarber - Listando agenda do prestador.
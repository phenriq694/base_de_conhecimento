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

### format(date, message):
Formata uma data para ser adicionada em uma string. A string deve ser passada dentro de àspas duplas (""), para adicionar caracteres que não tem relação com a função, deve ser colocado dentro de àspas simples (''). 
Legenda:
dd = dígitos dos dias;
MMMM = mês;
H = Hora;
mm = Minutos;

Importação: 
```javascript
import { format } from 'date-fns';
```
Exemplo de uso:
```javascript
const formattedDate = format(
  hourStart,
  "'dia' dd ' de' MMMM', às' H:mm'h'" 
);
``` 
Outro exemplo de uso:
https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/controllers/AppointmentController.js#L111

### locale/pt:
Configura uma data para o pt-br. No exemplo abaixo o mês vai sair em português.

Importação: 
```javascript
import pt from 'date-fns/locale/pt';
```
Exemplo de uso:
```javascript
const formattedDate = format(
  hourStart,
  "'dia' dd ' de' MMMM', às' H:mm'h'",
  { locale: pt }
);
``` 
Outro exemplo de uso:
https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/controllers/AppointmentController.js#L114

### startOfHour(date):
Pega apenas o inicio de uma hora passada e não os minutos e segundos.

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

### subHours(date, subValue):
Subtrai horas de uma data. 

Importação:
```javascript
import { subHours } from 'date-fns';
```
Exemplo de uso: https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/controllers/AppointmentController.js#L147

### setSeconds(date, secondsValue):
Altera o valor dos segundos de uma data para outro informado. 
Importação:
```javascript
import { setSeconds } from 'date-fns';
```
Exemplo de uso: https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/controllers/AvailableController.js#L50

### setMinutes(date, minutesValue):
Altera o valor dos minutos de uma data para outro informado. 
Importação:
```javascript
import { setMinutes } from 'date-fns';
```
Exemplo de uso: https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/controllers/AvailableController.js#L51

### setHours(date, hoursValue):
Altera o valor da hora de uma data para outro informado. 
Importação:
```javascript
import { setHours } from 'date-fns';
```
Exemplo de uso: https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/controllers/AvailableController.js#L51

### isBefore(startHour, currentHour):
Verifica se uma data vem antes de outra. 
Importação:
```javascript
import { isBefore } from 'date-fns';
```
Exemplo de uso: https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/controllers/AppointmentController.js#L80

### isAfter(startHour, currentHour):
Verifica se uma data acontece depois de outra. 
Importação:
```javascript
import { isAfter } from 'date-fns';
```
Exemplo de uso: https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/controllers/AppointmentController.js#L80


## Fontes:
- Rocketseat GoStack - Módulo Continuando API do GoBarber - Validações de agendamento.
- Rocketseat GoStack - Módulo Continuando API do GoBarber - Listando agenda do prestador.
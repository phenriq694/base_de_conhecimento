# Templates de e-mail

1. Fazer a instalação de uma template engine e suas integrações com o expresse e nodemailer:
```
yarn add express-handlebars nodemailer-express-handlebars
```

2. Fazer a importação das bibliotecas instaladas no arquivo 'src/lib/Mail.js':
```javascript
import exphbs from 'express-handlebars';
import nodemailerhbs from 'nodemailer-express-handlebars';
```
Também é necessário importar a função 'resolve' da biblioteca 'path' do javascript, para lidar com caminho de arquivos:
```javascript
import { resolve } from 'path';
```

3. Criar uma pasta chamada 'views' dentro de 'src/app/'. Dentro dessa pasta, criar uma chamada 'emails', e dentro de 'emails' criar mais duas, 'layouts' e 'partials'. Dentro de 'layouts', criar um arquivo chamado 'default.hbs'. Também criar dentro da pasta 'views/emails/' um arquivo com um nome adequado para a função dele, como por exemplo 'cancellation.hbs'. 

4. Adicionar um método na classe 'Mail', chamado 'configureTamplates()':
```javascript
configureTemplates() {
  const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails');

  this.transporter.use(
    'compile',
    nodemailerhbs({
      viewEngine: exphbs.create({
        layoutsDir: resolve(viewPath, 'layouts'),
        partialsDir: resolve(viewPath, 'partials'),
        defaultLayout: 'default',
        extname: '.hbs',
      }),
      viewPath,
      extName: '.hbs',
    })
  );
}
``` 
Adicionar este método dentro do 'constructor()' da classe. 

5. Exemplo de arquivo:
```javascript
import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';
import exphbs from 'express-handlerbars';
import nodemailerhbs from 'nodemailer-express-handlebars';
import { resolve } from 'path';

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;

    this.transporter = nodemailer.createTransport({
      host, 
      port, 
      secure,
      auth: auth.user ? auth : null,
    });

    this.configureTemplates();
  }

  configureTemplates() {
  const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails');

    this.transporter.use(
      'compile',
      nodemailerhbs({
        viewEngine: exphbs.create({
          layoutsDir: resolve(viewPath, 'layouts'),
          partialsDir: resolve(viewPath, 'partials'),
          defaultLayout: 'default',
          extname: '.hbs',
        }),
        viewPath,
        extName: '.hbs',
      })
    );
  }

  sendMail(message){
    return this.transporter.sendMail({
      ...mailconfig.default,
      ...message,
    })
  }
}

export default new Mail();
```

6. Configurar o arquivo 'default.hbs' com elementos HTML e CSS. Exemplo:
```hbs
<div style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #222; max-width: 600px">
  {{{ body }}}
  // Partials
  {{> footer }} // Importação do partial
</div>
```

7. Criar um arquivo para cada partial adicionado ao arquivo 'default.hbs', como por exemplo no elemento acima, dentro da pasta 'partials':
### footer.hbs
```hbs
<br/>
Equipe GoBarber
```
8. No arquivo '.hbs' criado dentro da pasta 'views', configurar com elementos HTML e CSS. Exemplo:
```hbs
<strong>Olá, {{ provider }}</strong>
<p>Houve um cancelamento de horário, confira os detalhes abaixo:</p>
<p>
  <strong>Cliente: </strong> {{ user }} <br />
  <strong>Data/Hora: </strong> {{ date }} <br />
  <br />
  <small>
    O horário está novamente disponível para novos agendamentos.
  </small>
</p>
```

9. No componente onde a função de enviar o e-mail for adicionado, podemos incluir o template criado e passar os dados para preencher as variáveis. Exemplo:
```javascript
    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'nome_do_template',
      context: {
        variavel: valor,
      },
    });
```

Exemplo de uso: 
https://github.com/phenriq694/GoStack_Modulos/blob/f4968edbb4c54538dacf47bb71159e311a9b52ec/modulo03/gobarber/src/app/jobs/CancellationMail.js#L13

## Fontes: 
- Rocketseat GoStack - Módulo Continuando API do GoBarber - Templates de e-mail. 
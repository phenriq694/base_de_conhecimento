# TAG Table

## Abertura e fechamento:
```html
<table> </table>
```

## Linha da tabela:
```html
<table>
  <tr>Linha</tr>
</table>
```

## Cabeçalho:
```html
<table>
  <thead> <!-- Inicializando um cabeçalho na tabela -->
    <tr> <!-- Linha da tabela (table row) -->
      <th>Produto</th> <!-- Célula cabeçalho da tabela (table header) -->
      <th>Quantidade</th>
      <th>Preço</th>
    </tr>
  <thead>
</table>
``` 

## Corpo:
```html
<table>
  <tbody> <!-- Inicializando o corpo da tabela -->
    <tr> <!-- Linha da tabela (table row) -->
      <td>Notebook</td> <!-- Célula de dados da tabela (table data) -->
      <td>3</td>
      <td>R$ 2.500,00</td>
    </tr>
  <tbody>
</table>
``` 

## Rodapé:
```html 
<table>
  <tfoot> <!-- Inicializando o rodapé da tabela -->
    <tr> <!-- Linha da tabela (table row) -->
      <td colspan="2">Total</td>
      <td>R$ 7.500,00 </td>
    </tr>
  <tfoot>
</table>
``` 

## colspan:
Utiliza para ocupar mais de uma coluna. É passado como um atribudo na tag que queremos aplicar essa configuração:
```html
<table>
  <tfoot> <!-- Inicializando o rodapé da tabela -->
    <tr> <!-- Linha da tabela (table row) -->
      <td colspan="2">Total</td>
      <td>R$ 7.500,00 </td>
    </tr>
  <tfoot>
</table>
```

## rowspan:
Utiliza para ocupar mais de uma linha. É passado como um atribudo na tag que queremos aplicar essa configuração:
```html
<table>
  <tfoot> <!-- Inicializando o rodapé da tabela -->
    <tr> <!-- Linha da tabela (table row) -->
      <td rowspan="2">Total</td>
      <td>R$ 7.500,00 </td>
    </tr>
  <tfoot>
</table>
```

## Estilização básica para table:
```html
<style>
  table {
    border-collapse: collapse;
  }

  th, td {
    padding: 10px;
  }

  thead tr {
    border-bottom: solid 3px #444;
  }

  tbody tr:hover {
    background-color: #dedede;
  }

  tfoot {
    background-color: #444;
    color: #fff;
    font-weight: bold;
  }
</style>
```

## Fonte:
- Curso Web Moderno com JavaScript - Seção 11 - HTML - Tabela
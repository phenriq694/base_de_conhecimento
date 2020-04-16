# json-server
## Fake REST API 

1. Install package:
```bash
yarn global add json-server
```

2. Create a JSON file to be used:
```javascript
{
  "stock": [
    {
      "id": 1,
      "amount": 3
    }
  ],
  "products": [
    {
      "id": 1,
      "title": "Tênis de Caminhada Leve Confortável",
      "price": 179.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
    }
  ]
}
```

3. Run the commando:
```bash
json-server jsonFile.json -p listen_port
```

4. Example of access a route:
```
GET 'http://localhost:3333/stock
``` 

## Sources:
- Rockseat GoStack - Module Flux Architecture - API Configuration.

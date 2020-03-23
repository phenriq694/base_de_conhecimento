# Seletores

### querySelector(selector):
Seleciona um elemento passando o seletor CSS.
```javascript
document.querySelector("button.className");
```

#### Atributos:
##### classList:
Seleciona a lista de classes do elemento.
```javascript
document.querySelector("button.fat")
  .addEventListener("click", () => {
    document.querySelector("#footer")
      .classList.toggle("hide")
  })
```

## Fonte:
- Rocketseat - WorkshopDev Especial - Episódio 1
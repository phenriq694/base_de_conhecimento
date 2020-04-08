# Comandos

## Incializar o repositório:
```
git init
```

## Visualizar o status de forma resumida
```
git status -sb
```
## Visualizar os commits efetuados:
```
git log
```

## Visualizar as alterações feitas em um commit
```
git show hash_commit
```

## Visualizar os arquivos que foram alterados em um commit
```
git show --name-only hash_commit
```

## Criar uma nova branch
```
git branch branch_name
```

## Navegar entre as branchs
```
git checkout branch_name
```

## Criar uma branch e ir até ela
```
checkout -b
```

## Restaurar um arquivo para a versão do último commit
```
git checkout -- file_name
```

## Retirar um arquivo do modo unstage
```
git reset HEAD -- file_name
```

## Desfaz o último commit mantendo as alterações no arquivo
```
git reset --soft HEAD~1
```
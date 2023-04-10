# Instruções

## 1. Instalando as dependências

```yarn```

### 1.2. Instalando as dependências do CocoaPods

Se você estiver usando um sistema iOS, será necessário instalar as dependências do CocoaPods. Para fazer isso, execute o seguinte comando:

```cd ./ios && pod install && cd ..```

### 1.3. Executando no Android

Para executar o aplicativo no Android, execute o seguinte comando:

```yarn android```

### 1.4. Executando no iOS

Para executar o aplicativo no iOS, execute o seguinte comando:

```yarn ios```

___

## 2. Executando os testes

Para executar os testes do aplicativo, execute o seguinte comando:

```yarn test```

## 3. Estrutura do projeto

- components: Contém os componentes compartilhados do aplicativo.
- main: Contém as configurações do projeto e o ponto de entrada do aplicativo.
- pokemon: Contém o módulo do Pokemon, que inclui todas as suas telas, hooks, navegação e consultas.


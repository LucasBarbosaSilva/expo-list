# Expo List

Projeto criado com **Expo**, uma ferramenta que facilita o processo de criação de apps em **React Native**. Com o Expo podemos abstrair muitas das configurações de ambiente, 
tanto do Android como no IOS. Isso porque o Expo tem um aplicativo nas lojas Android e IOS que facilita a integração com o sistema nativo. Então, basta iniciar 
um projeto com o Expo e rodar o aplicativo dele no telefone que já conseguimos ver o resultado final da nossa aplicação, sem precisar ficar mexendo 
com a SDK do Android, ou o Xcode da Apple.

## O que foi utilizado:
- Expo + React Native;
- Typescript;
- Axios;
- API externa: https://restcountries.eu

## Instalações:

### Celular:

1. Instalar o aplicativo Expo Go em seu celular.

### Computador:

1. Instalar o **Node e NPM**. Acesse [este link](https://nodejs.org/pt-br/) para saber como baixar e intalar o Node. Junto do Node, já vem o NPM. <br/>
2. (Opcional) Instalar o **Yarn**. O Yarn é um gerenciador de pacotes mais moderno que o NPM, traz algumas facilidades a mais, recomendo utilizá-lo. Acesse [este link](https://yarnpkg.com/getting-started/install) para saber como instalar o Yarn.<br/>
3. Instalar o **Expo**: Acesse [este link](https://docs.expo.io/get-started/installation/) para saber como instalar o Expo CLI. O Expo Go (comentado no tutorial) é justamente o aplicativo do Expo para celular. <br/>
3. Instalar o **[Git](https://git-scm.com/)**. O Git, em sistemas Linux, já vem instalado.
4. Tenha um Editor de Texto como o [VS Code](https://code.visualstudio.com).

## Como executar:

Realize esses comandos em um terminal a parte, ou no próprio terminal integrado do VS Code.
1. Faça um clone desse repositório na sua máquina:
``` sh
 $ git clone https://github.com/LucasBarbosaSilva/expo-list
``` 
2. Abra o aplicativo do Expo no seu telefone.
3. Execute a aplicação:
``` sh
 # Entre na pasta do projeto:
 $ cd ./expo-list
 # Instale as dependências:
 $ yarn # ou npm install
 # Execute a aplicação:
 $ yarn start # ou npm start
``` 
4. Aguarde aparecer o QR Code.
5. Depois que aparecer o QR Code, aguarde uns 40 segundos para ter certeza que o Expo já iniciou todas as dependências e não dar algum erro. Irá aparecer uma mensagem: Building JavaScript bundle. Aguarde isso terminar e já vai estar rodando o aplicativo.
6. Pronto, agora toda alteração que você fizer no código será refletida automaticamente no aplicativo, graças ao Flash Refresh do Expo.

## Dúvidas:
Pode mandar a sua dúvida na aba Issues, aqui mesmo no GitHub, ou tentar entrar em contato comigo de outra maneira.

## Sugestões:
Para começar a entender o código vá para o arquivo **App.tsx**, ele é a raiz do nosso projeto. Dentro dele você verá que tem a importação do **Navigation** que é o responsável por gerenciar as duas telas que temos no aplicativo: **TabOne e TabTwo**.<br/>
Navegue até o arquivo Navigation e depois para os arquivos das telas e vá tentando entender o código. Seu desafio é tentar fazer alguma coisa na segunda tela da aplicação.<br/>

## Para estudar
1. Começar a ver como funcionam os componentes no React Native. A estrutura é conhecida (tags html), mas diferente da web onde a maioria das tags já estão disponíveis sem precisar de importação, no React Native (RN), precisamos importar tudo. View, Text, Image, todos são componetes do RN.<br/>
2. Estudar a estilização em React Native, que usa o StylesSheet. Pode observar que em baixo de cada página tem um objeto desse tipo, contendo as estilizações. StyleSheet é basicamente o CSS do html, sendo que tudo que tem hífen no CSS, não tem hífen no SytleSheet. por exemplo: #CSS background-color: 'white' | #StykeSheet backgroundColor: 'white'.
3. Estudar o consumo de uma api externa com Axios. Existem muitos vídeos falando sobre isso, mas a maioria é com o React da Web, porém o processo é exatamente o mesmo.

### nlw-connect - 2025

---

#### Getting Started

[nlw-connect-devstage](https://www.figma.com/community/file/1471119935944492720/nlw-connect-devstage) 


######  Preparação
```sh
1. [NodeJS](https://nodejs.org/pt/) 
2. [VSCode](https://code.visualstudio.com/) 
3. extensões
    3.1 Omni Theme
    3.2 symbols
    3.3 Tailwind CSS IntelliSense
    3.4 PostCSS Language Support
    3.5 Biome
```

######  Iniciando Projeto
```sh
1. [NextJS](https://nextjs.org/) 
2. npx create-next-app@latest --empty
![alt text](./image.png)
3. cd web
4. npm run dev
5. [Localhost](http://localhost:3000)
```

######  Instalando tailwindcss
```sh
1. [tailwindcss](https://tailwindcss.com/docs/installation/framework-guides/nextjs) 
2. npm install tailwindcss @tailwindcss/postcss postcss
3. criar arquivo `postcss.config.mjs` na raiz do projeto
4. criar arquivo `globals.css` na pasta src\app
5. importar dentro do arquivo layout.tsx `import './globals.css'`
```
######  Instalando pacotes
```sh
1. npm install lucide-react
2. npm i @biomejs/biome -D
```

######  Configurando biome
```sh
1. npx @biomejs/biome init
2. configurar arquivo `biome.json`
3. setar configurações para o projeto `Preference: Open Workspace Settings (JSON)`
    3.1 [Config-VSCode](https://biomejs.dev/reference/vscode/) 
        3.1.1 javascript, typescript e typescriptreact 
    3.2 "editor.codeActionsOnSave"
        3.2.1 "source.fixAll.biome": "explicit"
        3.2.2 "source.organizeImports.biome": "explicit"
        3.2.3 "editor.formatOnSave": true
```


######  Seeting.json (VSCode)
```sh
    "terminal.integrated.fontSize": 14,
    "explorer.compactFolders": false
```


#### About

developed by [Calazans](https://rcalazansn.azurewebsites.net) <img alt="Brasil" src="https://user-images.githubusercontent.com/5068797/161345649-c7184fdc-2bc3-42a9-8fb6-6ffee9c8f9c2.png" width="20" height="14" /> 



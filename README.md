# BackendEstacao
<p>Código do backend da Estação Meteorológica do IFRS Campus Feliz </p>

## Requisitos

<div> 
<p>_ MySql server instalado</p>
<p>_ Gerenciador de banco de dados, ex: Workbench, phpMyAdmin, BeeKeeper </p>
<p>_ NodeJS instalado assim como o gerenciador de pacotes da sua preferência (npm ou yarn)</p>
</div>

## Como usar
<div> 
<p>
Ao fazer clone do projeto, você irá encontrar a pasta src/database/migrations. Nessa pasta está contintida todas as versoẽs do banco de dados
</p>

<p>
Primeiramente é necessário fazer a configuração do seu banco de dados, no arquivo src/config/database.js você vai encontrar as configurações do seu banco de dados, neste arquivo vc terá q mudar os campos [username e password], para o usuário que vc criou para gerenciar o banco de dados, caso esteja utilizando o phpMyAdmin com o xampp, o seu usuário padrão será root e sem senha.
</p>

<p>
Após isso teremos que criar o banco de dados, para isso vamos instalar as dependências necessárias. Utilizando npm ou yarn, com npm será da seguinte forma: npm i, mas para garantir vamos instalar o essencial: npm install sequelize sequelize-cli yum cors express <br>
<br>
Agora vamos criar o banco de dados e as tabelas: <br>
_  npx sequelize db:create <br>
_  npx sequelize db:migrate <br> 
<br>
Com isso seu banco de dados está pronto
<br>
Após instalado as dependências, rode o comando node src/server.js. <br>
Lembresse de estar com o serviço do banco de dados MySql rodando. <br>
</p>
</div>

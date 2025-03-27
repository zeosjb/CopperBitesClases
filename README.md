# Proyecto en clases Copper Bites

Este proyecto ha sido creado para enseñar las tecnologías a utilizar mediante el transcurso del semestre.

## Requisitos
* Tener instalado [Node.js](https://nodejs.org/en/download) en su computadora.
* Crear una cuenta en [MongoDB](https://www.mongodb.com/es).

## Copiar el repositorio

```
    git clone https://github.com/zeosjb/CopperBitesClases
```

## Creación del proyecto


Crear una carpeta base para el proyecto:

```
    mkdir backend
```

Entrar a la carpeta base del proyecto:

```
    cd backend
```

Para crear un proyecto en NodeJS utilizando express:

```
    npm init -y
```

Instalar las librerías necesarias en caso de empezar un proyecto nuevo:

```
    npm install express
    npm install express-async-handler
    npm install bcryptjs
    npm install cors
    npm install dotenv
    npm install jsonwebtoken
    npm install mongoose
```

En caso contrario al copiar el proyecto:

```
    npm install
```

Agregamos el script para empezar el proyecto:

![Imagen Script](/images/Script.png)

Creamos el orden de carpetas para el proyecto:

![Imagen Carpetas](/images/Carpetas.png)

Copiamos el .env.example y completamos con los datos pedidos dentro del archivo:

```
    copy .env.example .env
```

## Iniciando el proyecto

Para iniciar el proyecto realizamos:

```
    npm start
```

La aplicación estará disponible en http://localhost:3000/
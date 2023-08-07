FROM node:16 
# v aa haber una imagen de node en docker, la versión que vas a usar

WORKDIR /app
# va a teber una carpeta llamada app donde va a tenr todos los archivos copiados y pegados

COPY package*.json ./
# aca decis que querés que copie el archivo package.json y package-lock.json en la carpeta ./ (app)

RUN npm install
# aca le decís cómo instalar las dependencias del package.json

COPY . .
# aca decis que tiene que copiar todo el codigo de la carpeta (.) en app (.)
# COPY fuente-destino

EXPOSE 8003
# aca ponemos el puerto que queremos que "se levante" o se exponga porque ahí es donde se escucha la app

CMD [ "npm", "start" ]
# el comando que corre para ejecutar el contenedor
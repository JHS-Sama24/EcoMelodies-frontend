# Paso 1: Establecer la imagen base
FROM node:18-alpine

# Paso 2: Establecer el directorio de trabajo
WORKDIR /app

# Paso 3: Copiar los archivos de la aplicación
COPY package.json .
# Paso 4: Instalar las dependencias
RUN npm install

# Paso 5: Exponer el puerto
EXPOSE 3000

# Paso 6: Definir el comando para iniciar la aplicación
CMD ["npm", "start"]
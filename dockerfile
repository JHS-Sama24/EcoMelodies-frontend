# Use a specific version of node to ensure compatibility
FROM node:14

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and package-lock.json to use cached layers
COPY package*.json ./

# Install dependencies using npm ci for a clean install
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app

CMD ["npm", "start"]
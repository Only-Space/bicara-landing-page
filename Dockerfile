FROM node:20-alpine

WORKDIR /app

# Copy package.json dulu biar cache docker efisien
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy sisa file project
COPY . .

# Buka port 3000
EXPOSE 3000

# Jalanin mode development
CMD ["npm", "run", "dev"]
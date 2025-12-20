# Use Node.js 18
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install knex globally (needed for migrations)
RUN npm install -g knex ts-node typescript

# Copy project files
COPY . .

# Expose Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev"]

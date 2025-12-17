# Use Node.js version 18 as the base image
FROM node:18

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
# This allows Docker to cache dependencies, so npm install runs only when these files change
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install TypeScript and ts-node globally (needed if you run TypeScript scripts inside the container)
RUN npm install -g ts-node typescript

# Copy the rest of the project files into the container
COPY . .

# Expose port 3000 so the container can be accessed from the host machine
EXPOSE 3000

# Start the Next.js development server when the container runs
# Using npm run dev, which should bind to 0.0.0.0 inside the container for external access
CMD ["npm", "run", "dev"]

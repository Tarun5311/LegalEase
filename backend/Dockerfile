FROM node:latest

WORKDIR /app

COPY ./package.json /app
COPY ./package-lock.json /app


# Copy the package.json and package-lock.json files for Node.js
COPY package*.json ./

# Install Node.js dependencies
RUN npm ci

# Copy the requirements.txt file for Python
# Install Python dependencies

# Copy the code into the container
COPY . /app

# Expose the port(s) on which your application is running
EXPOSE 5000

# Define the startup command for your application
CMD [ "npm", "run", "start" ]
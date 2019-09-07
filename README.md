<div align="center">
<img src="https://private-code.de/static/svg/logo.svg">
</div>

# Redis database with nodejs
This tutorial is all about creating a redis databse server which is accessiable over the internet.

## First of all: What is redis?
Redis is a in-memory database used for lightweight data access. It does not need much memory because everything is written in C, which variables don't occupy much RAM.

## Use cases of Redis
Redis is often used for caching and for guarantee a smooth communication between microservices.

## First steps
1. Grab yourself a redis server and install it.
2. Install necessary packages: `npm i redis`
3. Run template.js `node ./src/template.js`
4. Modifiy template.js so that it stores a random age between 18 and 30 on every run after the user inputs his name. And prints it out the same way the name gets printed out.

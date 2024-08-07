***Microservices Auction repository***


This is the repository for the Microservices 'Auctions' app started in April 2024 and released in June 2024, uing C# and Next.js

You can register a user and sign in to see it in action or you can use one of the test accounts with the username 'bob' or 'alice' with the password of 'Pass123$' to sign in.


You can run this app locally on your computer by following these instructions:

1- Using your terminal or command prompt clone the repo onto your machine in a user folder
```bash
git clone https://github.com/mitra-tech/microservice-auction.git
```

2- Change into the Auctions directory
```bash
cd microservice-auction
```


3- Ensure you have Docker Desktop installed on your machine. If not download and install from Docker and review their installation instructions for your Operating system [Here](https://docs.docker.com/desktop/).


4- Build the services locally on your computer by running (NOTE: this may take several minutes to complete):
```bash
docker compose build
```

5- Once this completes you can use the following to run the services:
```bash
docker compose up -d
```

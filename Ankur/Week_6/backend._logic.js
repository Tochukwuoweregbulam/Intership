const http = require("http");

let balance = 2000;

function deposit(amount) {
    balance += amount;

    return {
        deposited: amount,
        balance: balance
    };
}

function transfer(amount) {
    balance -= amount;

    return {
        transferred: amount,
        balance: balance
    };
}

function withdrawal(amount) {
    balance -= amount;

    return {
        withdrawn: amount,
        balance: balance
    };
}

const server = http.createServer((req, res) => {

    if (req.url === "/deposit") {
        const result = deposit(500);
        res.end(JSON.stringify(result));
    }

    else if (req.url === "/transfer") {
        const result = transfer(300);
        res.end(JSON.stringify(result));
    }

    else if (req.url === "/withdrawal") {
        const result = withdrawal(200);
        res.end(JSON.stringify(result));
    }

    else if (req.url === "/balance") {
        res.end("Balance: " + balance);
    }

    else {
        res.end("Welcome to my bank");
    }

});

server.listen(2000, () => {
    console.log("Server is running on port 2000");
});
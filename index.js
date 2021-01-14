const server = require("./server.js");

const port = process.env.PORT || 7000;

server.listen(port, () => console.log(`listening on port: ${port}`));

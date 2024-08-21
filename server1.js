const http = require("http");

const port = 8081;

const todo = ["hii", "hello", "how"];

http
  .createServer((req, res) => {
    const { method, url } = req;

    if (url === "/todos") {
      if (method === "GET") {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write(todo.toString());
      } else if (method === "POST") {
        let body = "";
        req
          .on("error", (err) => {
            console.log(err);
          })
          .on("data", (chunk) => {
            body += chunk;
            //console.log(chunk);
          })
          .on("end", () => {
            body = JSON.parse(body);
            let newTodo=todo;
            newTodo.push(body.item);
            //console.log("data:",body);
          });
      } else {
        res.writeHead(501);
      }
    } else {
      res.writeHead(404);
    }
    res.end();
  })
  .listen(port, () => {
    console.log(`Node js server started running on port ${port}`);
  });

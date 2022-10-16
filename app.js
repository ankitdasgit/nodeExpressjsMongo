// const Circle= require('./circle');

// const circle = new Circle();
// console.log(circle.area(2));
// console.log(circle.circumference(3)); 

// console.log(__filename);
// console.log(__dirname);

// console.log(circle.area(2), circle.circumference(3));


// const {area, circumference} = require('./circle');
// console.log(area(2),circumference(3));



const http = require('http');
const port =4000;
const server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!',
    }));
});
console.log(`server is running at http://localhost:${port}`);
server.listen(port); 

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var AllPages = {
    title: 'Page-1|IMAD',
    heading: 'Index-1/IMAD',
    date: '5 Sep 2017',
    content: `<p>This is Shashank Shukla. <br>AND<br>U R Inside the Page-1. This is My first page
            This is Line 2.<br>AND<br>U R Inside the Page-1. This is My first page
            This is Shashank Shukla.<br>AND<br>U R Inside the Page-1. This is My first page
            U R Inside the Page-1. This is My first page. U R Inside the Page-1. This is My first page</p>
            <p>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. 
            Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. 
            Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. 
            Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. </p>`
};

function fn(obj)
{
    var ti=obj.title;
    var da=obj.date;
    var he=obj.heading;
    var co=obj.content;
    var htmlTemp = `<!DOCTYPE html>
    <html>
        <head>
            <title>${ti}</title>
            <meta name="viewport" content="width=device-width, initial scale =1"/>
            <link href="/ui/styleforp1.css" rel="stylesheet" />
        </head>
        <body>
          <div  class="h2-color div-color p-color inset text-big bold">
            <div><a href="/"><font color = "red">Go To Homepage</font></a></div>
            <div>${da}</div>
            <hr/>
            <br><br><br>
            <h2><font color=rgb(100, 180, 10)>${he}</font></h2>
            <div>
                ${co}
            </div>
          </div>
        </body>
    </html>`;
    return htmlTemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/first-url',function(req,res){
    res.send(fn(AllPages));
}
);

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/styleforp1.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'styleforp1.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

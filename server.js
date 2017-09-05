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
            <style>
                body {
                    font-family: Times New Roman;
                    background-color: orange;
                    margin-top: 10px;
                    padding-left: 5px;
                    padding-right: 2px;
                    }
    
                h2{
                        font-size: 40px;
                        font-size: 2.5em;
                        font-weight: bold;
                        font-family: Lucida Console;
                        background-color: rgb(120,45,180);
                        }
    
                div{
                    background-color: yellow;
                    }
                p{
                        background-color: rgb(102,175,220);
                        }
                div {
                    width: 800px;
                    border: 10px solid green;
                    padding: 25px;
                    margin: 5px;
                    }
            </style>
        </head>
        <body>
          <div  class="h2-color div-color p-color">
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

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

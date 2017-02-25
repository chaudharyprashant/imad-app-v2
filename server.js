var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone={
    title:'Article one',
    heading:'Article one',
    date:'sept 5,2016',
    content:`<p>
    this is content of my first article.this is content of my first article.this is content of my first article.this is content of my first article.this is content of my first article.this is content of my first article.this is content of my first article.this is content of my first article.
</p>
    <p>
        this is content of my first article.this is content of my first article.this is content of my first article.this is content of my first article.this is content of my first article.this is content of my first article.this is content of my first article.
    </p>`
};
function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmltemplate=`<html>
    <head>
        <title>
            ${title}
           </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
 <body>
<div class="container">     
<div>
    <a href='/'>home</a>
</div>            
<hr/>
<h3>
    ${heading}
</h3>
<div>
    ${date}
</div>
<div>
${content}
 </div>
</div>
</body>
</html>
`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
     res.send(createtemplate(articleone));
});
app.get('/article-two',function(req,res){
    res.send("Article two");
});
app.get('/article-three',function(req,res){
    res.send("Article three requested and will be served here");
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

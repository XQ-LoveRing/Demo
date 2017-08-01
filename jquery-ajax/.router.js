function setRouter(app){ 
 var router = app; 

//服务器端
app.get('/loadMore',function (req,res) {
    var idx=req.query.curIdx;
    var len=req.query.len;
    var news=[];

    for(var i=0;i<len;i++){
       news.push('新闻'+(parseInt(idx)+i))
    }
    res.send({
        status:1,
        data:news
    });
});
}
 module.exports.setRouter = setRouter
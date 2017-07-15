//服务器端
app.get('/loadMore',function (req,res) {
    var idx=req.query.idx;
    var len=req.query.len;
    var date=[];

    for(var i=0;i<len;i++){
        date.push('新闻'+(parseInt(idx)+i))
    }
    res.send(date)
   /* setTimeout(function () {
        res.send(date)
    },2000);*/
})



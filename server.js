const express=require('express');
const app=express();

//PORT
app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), ()=>{
    console.log('server running on the Port:'+app.get('port'));
});

//route
const router=require('./router/route.js');
app.use('/hubino',router);

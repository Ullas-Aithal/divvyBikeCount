import * as express from 'express';
import * as request from 'request';
import  {divvyBikes} from './divvyJsonStructure';

var app:express.Application = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


 



var options:request.Options = {
  method:'GET',
  url:'https://feeds.divvybikes.com/stations/stations.json'
};
var apiResponse:divvyBikes;
var divvyResponse:any;

app.get('/',(req:express.request, res:express.Response)=>{
  
request(options,(error, response:request.RequestResponse, body)=>
{
     apiResponse = JSON.parse(body);
      
      if(error)
      {
        res.send(error);
      }
      else
      {
        res.send(apiResponse.executionTime);
      }
      
});


});

app.listen(4000,()=>{
    console.log("Listening on port 4000");
});
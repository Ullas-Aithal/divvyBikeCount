import * as express from 'express';
import * as request from 'request';

var app:express.Application = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


 interface divvyInterface {
  executionTime: string;
  stationBeanList?: (StationBeanListEntity)[] | null;
}
 interface StationBeanListEntity {
  id: number;
  stationName: string;
  availableDocks: number;
  totalDocks: number;
  latitude: number;
  longitude: number;
  statusValue: string;
  statusKey: number;
  status: string;
  availableBikes: number;
  stAddress1: string;
  stAddress2: string;
  city: string;
  postalCode: string;
  location: string;
  altitude: string;
  testStation: boolean;
  lastCommunicationTime: string;
  landMark: string;
  is_renting: boolean;
}






var options:request.Options = {
  method:'GET',
  url:'https://feeds.divvybikes.com/stations/stations.json'
};
var divvyResponse:any ;

app.get('/',(req:express.request, res:express.Response)=>{
  
request(options,(error, response:request.RequestResponse, body)=>
{
      divvyResponse = response;
      var divvyResponse2  = response.body;
      
      if(divvyResponse == null)
      {
              if(error!=null)
              {
                res.send(error);
              }
              else
              {
                res.send("Failed getting response from the divvy server");
              }
      }
      else
      {
        console.log(divvyResponse);
          res.send(response.body);
      }
      
});




});

app.listen(4000,()=>{
    console.log("Listening on port 4000");
});
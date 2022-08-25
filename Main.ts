//airport
let airport:Airport= new Airport(); 

//destinations
let des1:Destination= new Destination("Spain",180);
let des2:Destination= new Destination("England",200);
let des3:Destination= new Destination("Italy",220);
let des4:Destination= new Destination("Russia",300);
let des5:Destination= new Destination("France",250);
let des6:Destination= new Destination("Japan",520);

//airplanes
let air1:Airplane = new Airplane(des1);
let air2:Airplane = new Airplane(des2);
let air3:Airplane = new Airplane(des3);
let air4:Airplane = new Airplane(des4);
let air5:Airplane = new Airplane(des5);
let air6:Airplane = new Airplane(des6);

airport.DestinationsList[0]=des1;
airport.DestinationsList[1]=des2;
airport.DestinationsList[2]=des3;
airport.DestinationsList[3]=des4;
airport.DestinationsList[4]=des5;
airport.DestinationsList[5]=des6;

airport.AirplanesList[0]=air1;
airport.AirplanesList[1]=air2;
airport.AirplanesList[2]=air3;
airport.AirplanesList[3]=air4;
airport.AirplanesList[4]=air5;
airport.AirplanesList[5]=air6;

airport.BuyTicket("France",5,"economy");
airport.BuyTicket("Italy",6,"firstClass");

console.log(airport.toString())





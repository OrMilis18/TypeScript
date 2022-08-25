class Airport{
    private _DestinationsList:Destination[];
    private _AirplanesList:Airplane[];

    
    public get DestinationsList() : Destination[] {
        return this._DestinationsList
    }
    
    public set DestinationsList(v : Destination[]) {
        this._DestinationsList = v;
    }

    public get AirplanesList() : Airplane[] {
        return this._AirplanesList
    }
    
    public set AirplanesList(v : Airplane[]) {
        this._AirplanesList = v;
    }

    public constructor(){
        this.DestinationsList = new Array<Destination>(100);
        this.AirplanesList = new Array<Airplane>(10); 
    }

    public BuyTicket(des:string,seats:number=1,typeOfSeat:string):string{
        this.AirplanesList.forEach(airplane => {
            if (airplane.PlaneDestination.Country===des) {
                if (airplane.BuySeats(seats)) {
                    return `Success! the price is${airplane.CalcPriceTicket(typeOfSeat)*seats}`;
                }
            }
        
        });
        return "purchase was'nt made...";
    }

    toString():string{
        return `${this.AirplanesList.forEach(airplane=>airplane.toString())}\n`
    }
    
    

}
class Destination{
    private _countries:string[]=["Israel","Spain","England","Italy","Russia","Ukraine","France","India","Japan","China"];
    
    public get countries() : string[] {
        return this._countries;
    }
    private _Country:string;
    
    public get Country() : string {
        return this._Country
    }
    
    public set Country(country : string) {
        if (this.countries.includes(country)) {
            this._Country = country;
        }
    }

    private _TimeOfFlight:number;
    
    public get TimeOfFlight() : number {
        return this._TimeOfFlight;
    }

    
    public set TimeOfFlight(time : number) {
        if (time>=10&&time<=1500) {
            this._TimeOfFlight = time;
        }
    }

    public constructor(country:string,time:number){
        this.Country=country;
        this.TimeOfFlight=time;
    }

    public FlightHours():number {
        return (this.TimeOfFlight/60);
    }

    toString():string{
        return `Country: ${this.Country}\n TimeOfFlight(hours): ${this.FlightHours()}`;
    }
    
    
    
    
    
}
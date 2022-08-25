class Airplane{
    private _Company:string="Boing";
    
    public get Company() : string {
        return this._Company;
    }

    private _PlaneDestination:Destination;
    
    
    public get PlaneDestination() : Destination {
        return this._PlaneDestination;
    }
    
    public set PlaneDestination(des : Destination) {
        this._PlaneDestination = des;
    }

    private _Seats:Array<Array<number>> = new Array<Array<number>>(12)
    
    
    public get Seats() : Array<Array<number>> {
        return this._Seats;
    }

    
    public set Seats(seat : Array<Array<number>>) {
        this._Seats = seat;
    }

    private _freeSeats:number = 12*6;
    
    public set freeSeats(v : number) {
        this._freeSeats = v;
    }

    
    public get freeSeats() : number {
        return this._freeSeats;
    }
    
    
    public constructor(des:Destination){
        this.PlaneDestination=des;

        for (let i = 0; i < this.Seats.length; i++) {
            this.Seats[i]= new Array<number>(6)
        }
    }

    public CalcPriceTicket(seatType:string):number{
        if (seatType=="economy") {
            return this.PlaneDestination.TimeOfFlight*0.6;
        }
        if (seatType=="business") {
            return this.PlaneDestination.TimeOfFlight*7;
        }
        if (seatType=="firstClass") {
            return this.PlaneDestination.TimeOfFlight*9;
        }
    }

    public BuySeats(tickets:number):boolean{
        if (tickets>this.freeSeats) return false;
        if(tickets<=0) return false
        for (let i = 0; i < this.Seats.length; i++) {
            for (let j = 0; j < this.Seats[i].length && tickets>0; j++) {
                if (this.Seats[i][j]!=1) {
                    this.Seats[i][j]=1;
                    this.freeSeats--;
                    tickets--;
                }
            }            
        }
        return true;
    }

    toString():string{ 
        let mat:string[][]= new Array<Array<string>>(12);
        for (let i = 0; i < mat.length; i++) {
            mat[i]= new Array<string>(6)
            for (let j = 0; j < mat[i].length; j++) {
                if (this.Seats[i][j]==1) {
                    mat[i][j]="V";
                } 
                else{
                    mat[i][j]='-';
                }
            }     
        }
        return `Company: ${this.Company}\nPlane Destination\n${this.PlaneDestination.toString()}\n${mat}\n`; 
    }
       
}


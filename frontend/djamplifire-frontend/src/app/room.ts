class Room { 
   
    _roomCode!: string;

    _guestCanPause!:boolean;

    _roomTitle!: string;

    _roomToken!: string;

    _numberOfSkips!: number;

    constructor() { 
        
     }  

     public get roomCode(){
         return this._roomCode;
     }

     public get guestCanPause(){
        return this._guestCanPause;
    }

     public get roomTitle(){
        return this._roomTitle;
    }

    public get roomToken(){
        return this._roomToken;
    }

    public get numberOfSkips(){
        return this._numberOfSkips;
    }

    public set roomCode(theRoomCode: string) {
        
        this._roomCode = theRoomCode;
    }

    public set guestCanPause(theGuestPause: boolean) {
        
        this._guestCanPause = theGuestPause;
    }

    public set roomTitle(theRoomTitle: string) {
        
        this._roomTitle = theRoomTitle;
    }

    public set roomToken(theRoomToken: string) {
        
        this._roomToken = theRoomToken;
    }

    public set numberOfSkips(theNumberOfSkips: number) {
        
        this._numberOfSkips = theNumberOfSkips;
    }

 }
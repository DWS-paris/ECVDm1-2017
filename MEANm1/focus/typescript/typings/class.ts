class Users{
    public firstName: string
    static numOfUsers: number = 0
    private _nickName: string

    constructor(name: string){
        this.firstName = name
        Users.numOfUsers++
    }

    // Getter et setter : uniquement pour ^ES5 ( --target ES5 )
    get nickName(): string {return this._nickName}
    set nickName( pseudo: string ) { this._nickName = pseudo }
}

let newUser = new Users(`John`)
newUser.nickName = `The Turtle`

console.log(newUser)
console.log( Users.numOfUsers )
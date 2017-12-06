/*
Typage de variable
*/
    // Typage implicite
    let firstName = `Abdel`
    // firstName = true => error

    // Typage explicite
    let age: number = 38
    // age = `38` => error
/**/

/*
Typer un tableau
*/
    let firstArray = [firstName, `Carole`, `Lous`]
    let secondeArray: Array<string | number> = [firstName, age, `Lorem`]
    let thirdArray: Array<any> = [firstName, `Carole`, `Lous`, true]
/**/

/*
Typer une fonction
*/
    let sayHello = (): string => {
        return `Hello World`
    }

    let twice = ( x: number, y: number ): string => {
        return `La somme de x + y est ${x + y}`
    }
    twice(2, 5)

    // Typer la callback d'une fonction
    let contUsers = ( names: Array<string>, callback: () => string ): any => {
        return names
    }

    const users: Array<string> = [`Carole`, `Abdel`, `Lisa`]

    contUsers(users, () => {
        return `Liste des utilisateurs : ${users}`
    })
/**/


/*
Typer un objet : interface
*/
    interface User {
        fullname: string,
        age: number,
        readonly isMajor: boolean,
        skills: Array<string>
    }

    let newUser: User = {
        fullname: `Julien`,
        age: 38,
        isMajor: true,
        skills:[`FrontEnd`, `Cuisine`]
    }
    // newUser.isMajor = false => error

    let sayHelloToUser = ( param: User ): string => {
        return `Hello ${param.fullname}`
    }

    sayHelloToUser(newUser)
/**/

/*
Etendre une interface
*/
    interface UserInfos {
        userName: string,
        userAge: number
    }

    interface SkillsLevel {
        frontEnd: number,
        cuisine: number
    }

    interface UniqUser extends UserInfos, SkillsLevel {
        readonly isMajor: boolean
    }

    let julien = <UniqUser>{
        userAge: 38,
        isMajor: true
    }
    julien.userName = `Julien`
    julien.frontEnd = 5
    console.log(julien)

    let matthieu = <UniqUser>{}
    matthieu.userAge = 26
    console.log(`matthieu `, matthieu)

    let pascal: UniqUser = {
        userName: `Pascal`,
        userAge: 42,
        isMajor: true,
        frontEnd: 5,
        cuisine: 2
    }

/**/
// Question NO 1
console.log('Hello World')

// Question NO 2
let c =('Hello Eric, ')
let f =('would you like to learn some Python today ?')
let g =(c+f)
console.log(g)

// Question NO 3
let m =('Eric')
console.log(m.toLowerCase())
console.log(m.toUpperCase())
console.log(m.charAt(0).toUpperCase() + m.slice(1).toLowerCase())

// Question NO 4
let j = ('Albert Einstein once said, “A person who never made a mistake never tried anything new.”')
console.log(j)

// Question NO 5
let famous_person =('Quaid-e-Azam once said, ')
let message = ('“I do not believe in taking the right decision, I take a decision and make it right.”')
let out = (famous_person + message)
console.log(out)

// Question NO 6
let o =('Eric')
console.log("\t"+o+"\t")
console.log("\n"+o+"\n")
console.log("\n"+o+"\t")
console.log("\t"+o+"\n")

// Question NO 7 & 8
console.log("Method 1 with Variable")
let p =(4+4)
let q =(12-4)
let u =(4*2)
let i =(24/3)
console.log('Addition = '+p)
console.log('Subtraction = '+q)
console.log('Multiplication = '+u)
console.log('Division = '+i +'\n')

console.log("Method 2 without variable")
console.log('Addition = ' +(6+2))
console.log('Subtraction = '+(20-12) )
console.log('Multiplication = '+(4*2))
console.log('Division = ' +(24/3))

// Question NO 9
let favoritenumber = 1000;
let msg = ('My favorite number is ')
let mn = (msg+favoritenumber)
console.log(mn);

// Question NO 10
// let favoritenumber = 1000;
// let msg = ('My favorite number is ')
// let mn = (msg+favoritenumber)
// console.log(mn);

// Question NO 10
// let favoritenumber = 1000;
// let msg = ('My favorite number is ')
// let mn = (msg+favoritenumber)
// console.log(mn);

//Question NO 11
console.log("Method No 1 without for loop")
let names = ["Ali", "Danish", "Hanif"];
console.log(names)
console.log(names[0])
console.log(names[1])
console.log(names[2] +'\n')

console.log("Method No 2 with for loop")
let nam = ["Akram", "Kamran", "Basit", "Muqeet"];
for (let i = 0; i < 4; i++) {
    console.log(nam[i]);
}

//Question NO 12
console.log("Method No 1 with personalized message")
let nms = ["Ali", "Danish", "Hanif", "Karim"];
console.log('Hello '+nms[0])
console.log('How are you '+nms[1]+' ?')
console.log(nms[2]+' what is your father name ?')
console.log('Have a nice day '+nms[3] +'\n')

console.log("Method No 2 without personalized message")
let nm = ["Akram", "Kamran", "Basit", "Muqeet"];
for (let i = 0; i < 4; i++) {
    console.log('He is my best friend '+nm[i]);
}

//Question NO 13
console.log("Method No 1 with motorbikes message")
let motors = ["Honda", "Supreme", "Suzuki", "Crown"];
console.log('I would like to own a '+motors[0]+' motorcycle')
console.log('I would like to race on a '+motors[1]+' motorcycle')
console.log('I would like to sit on a '+motors[2]+' motorcycle')
console.log('I would like to spend a whole day on a '+motors[3]+' motorcycle' +'\n')


console.log("Method No 1 with motorbikes message")
let motrs = ["Honda", "Supreme", "Suzuki", "Crown"];
console.log('I would like to own a '+motrs[0]+' motorcycle')
console.log('I would like to race on a '+motrs[1]+' motorcycle')
console.log('I would like to sit on a '+motrs[2]+' motorcycle')
console.log('I would like to spend a whole day on a '+motrs[3]+' motorcycle' +'\n')

// Question NO 14
let guest = ["Ahmed", "Danish", "Saleem"];
console.log(guest[0]+' you are invited for dinner at Governor House')
console.log(guest[1]+' you are invited for dinner at Governor House')
console.log(guest[2]+' you are invited for dinner at Governor House')

class DinnerInvitation {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    invite(): void {
        console.log(`Dear ${this.name},\n\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nBest regards,\n[Your Name]`);
    }
}

// Initial list of guests
let guests: string[] = ["Leonardo da Vinci", "Jane Austen", "Albert Einstein"];

// Print initial invitations
console.log("Initial Invitations:");
guests.forEach(guest => {
    const invitation = new DinnerInvitation(guest);
    invitation.invite();
});

// Guest who can't make it
const unableToAttend = "Jane Austen";
console.log(`${unableToAttend} can't make it to the dinner.\n`);

// Replace the guest who can't make it with a new person
const newGuest = "Marie Curie";
guests = guests.map(guest => guest === unableToAttend ? newGuest : guest);

// Print second set of invitations
console.log("\nSecond Set of Invitations:");
guests.forEach(guest => {
    const invitation = new DinnerInvitation(guest);
    invitation.invite();
});


class User1 {
  // constructor - used to initialize the object properties
  constructor(name, email) {
    this.name = name; // public property
    this.email = email;
  }

  getDetails() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

const mayank = new User1("mayank", "manku.com");
console.log(mayank.getDetails());

class Admin extends User1 {
  constructor(name, email, role) {
    super(name, email); // calling parent class constructor
    this.role = role; // adding new property specific to the admin
  }
  // polymorphism - overriding a method from parent class
  getDetails() {
    return `Name: ${this.name}, Email: ${this.email}, Role: ${this.role}`;
  }
}

const papa = new Admin("papa", "papa.com", "father");
console.log(papa.getDetails());

// CRUD:
class User{
    constructor(id,name,email){
       this.id = id;
       this.name = name;
       this.email = email;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;
      }
    
      setName(newName) {
        this.name = newName;
      }
    
      setEmail(newEmail) {
        this.email = newEmail;
      }
}

class UserManager{
    constructor(){
        this.users = [] // array to store users
    }
    setUsers(newUsers){
        this.users = newUsers
    }
    // create - add a new user
    createUser(id,name,email){
        const newUser = new User(id,name,email)
        this.users.push(newUser)
        console.log(`user with id ${id} created`)
    }

    // read - get a user by id
    getUserById(id){
        const user = this.users.find(u=>u.id === id)
        if(user){
            console.log(user.getDetails())
        }else{
            console.log(`user with id ${id} not found`)
        }
    }

    // update - update user info
    updateUser(id,newName,newEmail){
        const user = this.users.find(u=>u.id === id)
        if(user){
            if(newName) user.setName(newName)
            if(newEmail) user.setEmail(newEmail)
            console.log(`user with id ${id} updated`)
        }else{
            console.log(`user with id ${id} not found`)
        }
    }

    // delete - remove a user by id
    deleteUser(id){
        const newUsers = this.users.filter(u=>u.id !== id)
        this.setUsers(newUsers)
            console.log(`user with id ${id} not found`)
    
    }

    // list all users
    listAllUsers(){
        if(this.users.length > 0){
            console.log("All users:")
            console.log(this.users.forEach(user=>console.log(user)))
        }else{
            console.log("no users found")
        }
    }
}

const manku = new User(1,"mayank","manku.com")
console.log(manku.getDetails())
const userDetials = new UserManager()
userDetials.listAllUsers()
userDetials.createUser(manku)
userDetials.listAllUsers()
userDetials.deleteUser(1)
userDetials.listAllUsers()
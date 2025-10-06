const user = {
    username: "shahid",
    price: 999,
    welcomemassage: function () {
        console.log(`${this.username} welcome to website`);
        // console.log(this);
    }

}

// user.welcomemassage()
// user.username = "sam"
// user.welcomemassage()

// console.log(this);

// function chai() {
//     let username = "shahid"
//     console.log(this.username);

// }

// chai()

// const chai = function () {
//     let username = "shahid"
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "shahid"
    console.log(this.username);
    
}
chai()
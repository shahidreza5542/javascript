const user = {
    username: "shahid",
    price: 999,
    welcomemassage: function () {
        console.log(`${this.username} welcome to website`);
    }

}

user.welcomemassage()
user.username = "sam"
user.welcomemassage()
let a = 10

if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER:",a);
}

// console.log(a);
// // console.log(b);
// console.log(c);

function one(){
    const username = "shahid"
    
    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); // errors
    two()
}

one()
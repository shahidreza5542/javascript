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

function one() {
    const username = "shahid"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // errors
    two()
}

// one()

if (true) {
    const username = 'shahid'
    if (username === "shahid") {
        const website = ' youtube'
        // console.log(username + website);

    }
    // console.log(website); // error

}

// console.log(username); // error


// ++++++++++++++++++++++ interesting ++++++++++++++

addone(5) // work
function addone(num) {
    return num + 1
}

addTwo(5) // error

const addTwo = function(num){
    return num + 2
}


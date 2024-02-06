const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'n'];

function smallest (heights2) {
    let small = heights2[0].length;
    let smallFriend;
    for (const height of heights2){
        if(height.length < small) {
            smallFriend = height;
        }
    }
    return smallFriend;
}

console.log(smallest(heights2));
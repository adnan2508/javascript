const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function lowest (heights2){
    let friend = heights2[0].length;
    let friendName = heights2[0];
    for(const height of heights2){
        if(height.length < friend){
            friendName = height;
        }
    }
    return friendName;
}

const number = lowest(heights2);
console.log(number);
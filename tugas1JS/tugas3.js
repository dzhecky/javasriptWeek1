//print segitiga

let print = (num) => {
    let triangle = ''
    if(typeof num !== 'number'){
        console.log('input must be number!');
    }else{
        for(i = num; i > 0; i--){
            for(j = 1; j <= i; j++){
                triangle += j
            }
            triangle += '\n'
        }

    }
    console.log(triangle);
}

print(5)
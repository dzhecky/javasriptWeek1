const name = [
    "Abigail","Alexandra","Alison",
    "Amanda","Angela","Bella",
    "Carol","Caroline","Carolyn",
    "Deirdre","Diana","Elizabeth",
    "Ella","Faith","Olivia","Penelope"]

let search = (text, val, callback) =>{
    let result = []
    for(i = 0; i < name.length; i++){
        if(name[i].toLowerCase().includes(text.toLowerCase())){
            result.push(name[i])
            if(result.length === val){
                break;
            }
        }
    }
    callback(result)
}

let total = (response) => {
    if(response.length > 0){
        response.forEach((name)=> {
            console.log(name);
        })
    }else{
        console.log('nama tidak ditemukan!');
    }
}

search('an', 2, total)
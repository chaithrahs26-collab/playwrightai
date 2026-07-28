function consonants(str){
    
    let count = 0;

    str = str.toLowerCase();
    for(i=0;i<str.length;i++){
        if(str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u'){
            count++;
        }
    }
    console.log("Number of consonants in a given string is: " +count);
}
let str = "ShankaraNarayana";
consonants(str);
let x=prompt("Berapa kali ingin mengulang ?")

for (let i = 1; i <= x; i++) {
    console.log(`${i} * * * * *`)
}

for(let x=1;x<=10;x++){
    let str = ""
    for(let y=1;y<=x;y++) {
        str += "*"
    }
    console.log(x+str)  
}

for(let x=1; x<=10; x++){
    console.log(x+"*".repeat(x))
}

for(let x=1; x<=10; x++){
    if (x%2==0) {
             console.log("*")
     }
     else{
         console.log(x)
     }
 }
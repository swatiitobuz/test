function getId(){
    let current = new Date();
    let date = "" + current.getDate();
    let time = "" + current.getTime();
    let idValue = date.concat(time);
    return idValue;
}
console.log(getId);
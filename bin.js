function bin(nbr) {
    return nbr.toString(+2)+"";
}
function tobin(nbr, max) {
    var str = bin(nbr);
    if(str.length < max) {
        var diff = max - str.length;
    }
    var p = "";
    for(var k=0; k < diff; k++) {
        p += "0,";
    }
    var tab = str.split("").join(",");
    var tab = "["+p+tab+"]";
    return tab;
}
var credit = [
    [01791354234033, 1],
    [05541482484711, 1],
    [28617620058756, 1],
    [42418902456743, 1],
    [07603197932349, 1],
    [71528517141152, 1],
    [24409140623207, 1],
    [64197745808924, 1],
    [93844723109736, 1],
    [82901727402978, 1],
    [85666004180058, 0],
    [10581098511213, 0],
    [74248002455854, 0],
    [98530461121454, 0],
    [93545715678954, 0],
    [48913304515465, 0],
    [12345678912324, 0],
    [24681012141618, 0]
];
var nbrPrem = [
    [1,0],
    [2,1],
    [3,1],
    [4,0],
    [5,1],
    [6,0],
    [7,1],
    [8,0],
    [9,0],
    [10,0],
    [11,1],
    [12,0],
    [13,1],
    [14,0],
    [15,0],
    [16,0],
    [17,1],
    [18,0],
    [19,1],
    [20,0],
    [21,0],
    [22,0],
    [23,1],
    [24,0],
    [25,0]
];
function getMaxLength(liste) {
    var max = bin(liste[0]).length;
    for(var i=1; i < liste.length; i++) {
        max = Math.max(max, bin(liste[i][0]).length);
    }
    return max;
}
function totable(liste) {
    var maxlength = getMaxLength(liste);
    var tot = 0;
    var ss = "";
    var d = "[\n";
    for(var i=0; i < liste.length; i++) {
        tot += tobin(liste[i]).length;
        d += tobin(liste[i][0], maxlength) + ((i == liste.length-1) ? "" : ",\n");
        ss += liste[i][1] + ((i == liste.length-1) ? "" : ",");
    }
    console.log("Donnée : "+d+"\n]");
    console.log("Vérité : ["+ss+"]");
}
//console.log(liste.length)

console.log(totable(nbrPrem));

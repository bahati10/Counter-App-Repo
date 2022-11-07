let count = 0;

document.getElementById("decreaseBtn").onclick = function() {
    if(count > 0){
        count -=1;
    }else {
        alert("The count can't under zero");
    }

    document.getElementById("counter").innerHTML = count;
}


document.getElementById("resetBtn").onclick = function() {
    count=0;
    document.getElementById("counter").innerHTML = count;
}


document.getElementById("increaseBtn").onclick = function() {
    count+=1;
    document.getElementById("counter").innerHTML = count;
}

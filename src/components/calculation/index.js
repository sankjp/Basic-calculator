import React from "react";

function Add(a,b){
    let sum=a+b;
    return sum;
}
function Subt(a,b){
    let sub=a-b;
    return sub;
}
function Mult(a,b){
    let multiplication=a*b;
    return multiplication;
}
function Div(a,b){
    let division=a/b;
    division=division.toFixed(3);
    return division;
}
export {Add,Subt,Mult,Div};
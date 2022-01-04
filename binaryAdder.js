function AND(boolA, boolB){
    return boolA && boolB;
}
function OR(boolA, boolB){
    return boolA || boolB;
}
function NAND(boolA, boolB){
    return !(boolA && boolB);
}
function XOR(boolA, boolB){
    if( boolA != boolB ){
        return true;
    } else{
        return false;
    }
}

function XOR2(boolA, boolB){
    if( boolA != boolB ){
        return 1;
    } else{
        return 0;
    }
}

function _sum(bitA, bitB){
    return XOR2(bitA, bitB);
}

function _carry(bitA, bitB){
    return AND(bitA, bitB)
}

function halfAdder(bitA, bitB){
    const ans = [];
    ans.push(_carry(bitA, bitB));
    ans.push(_sum(bitA, bitB));

    return ans;
}

function fullAdder(bitA=0, bitB=0, carry=0){
    const ans = [];
    
    const halfOne = halfAdder(bitA, bitB);
    const halfTwo = halfAdder(halfOne[1], carry);

    ans.push(OR(halfOne[0], halfTwo[0]))
    ans.push(halfTwo[1])
    
    return ans;
}

function byteAdder(byteA, byteB){
    const ans = [];
    const length = byteA.length;

    let tempCarry = 0;

    for(let i = 0; i <= length; i++){
        let fullAdded = fullAdder(byteA[i], byteB[i], tempCarry);
        ans.push(fullAdded[1]);
        tempCarry = fullAdded[0];
    }

    return ans;
}

function compare(arr1, arr2) {
    const lengOne = arr1.length;
    const lengTwo = arr2.length;

    if (lengOne > lengTwo) {
        for (let i = lengTwo; i < lengOne; i++) {
            arr2.push(0);
        }
    } else if (lengOne < lengTwo){
        for (let i = lengOne; i < lengTwo; i++) {
            arr1.push(0);
        }
    }
}

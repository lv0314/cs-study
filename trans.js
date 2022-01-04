function pop0(arr){
    while(arr[arr.length-1] == 0){
        arr.pop();
    }
}

function dec2bin(decimal){
    let num = decimal;
    const ans = [];

    for (let i = 8; i >= 0; i--){
        if((num / (2 ** i)) >= 1){
            ans[i] = 1;
            num = num % (2 ** i);
        } else {
            ans[i] = 0;
        }
    }
    pop0(ans);
    return ans;
}

function bin2dec(bin){
    let ans = 0;
    const length = bin.length;

    for(let i = length-1; i >= 0; i--){
        if (bin[i] == 1){
            ans += (2 ** i);
        }
    }

    return ans;
}
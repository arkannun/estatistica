function max(arr){
    let maior=arr[0];
    for (let i=1; i<arr.length;i++ ){
        if (maior < arr[i]){
            maior=arr[i];
        }
    }
    return maior;
}

function min(arr){
    let menor=arr[0];
    for (let i=1; i<arr.length;i++ ){
        if (menor > arr[i]){
            menor=arr[i];
        }
    }
    return menor;
}

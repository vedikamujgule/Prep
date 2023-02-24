array =[12,45,65,56,23,76,3,56]
for(i=0;i<array.length; i++){
    for(j=0;j<array.length-i-1; j++){
        if(array[j]>array[j+1])
            {
            var temp=array[j]
            array[j]= array[j+1]
            array[j+1]=temp
            }
    }
}
console.log("Array", array)
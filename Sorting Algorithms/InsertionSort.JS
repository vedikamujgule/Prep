array =[12,45,65,56,23,76,3,-6]

function insertionSort(arr){
     pivot = arr[0]
     for(i=1;i<arr.length;i++){
        let numerToInsert = arr[i]
        j=i-1 //this is the index of the sorted Element. We assume first elemet is sorted
        while(j>=0 && arr[j]>numerToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numerToInsert
     }
     return arr
}

const res = insertionSort(array)
console.log(res)
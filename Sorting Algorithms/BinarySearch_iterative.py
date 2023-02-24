def bs(num,x):
  low =0
  high = len(num)-1
  while(low<=high):
    mid = len(num)//2
    if x == num[mid]:
      return mid
    elif x<num[mid]:
      high = mid+1
    else:
      low = mid+1 
    return -1

nos = [1,2,3,4,5]
print(bs(nos,6))
def bs(num,x,low,high):
  if low>high:
    return -1
  mid = (low+high)//2
  if x== num[mid]:
    return mid
  if x>num[mid]:
    bs(num,x,high,mid-1)
  else:
    bs(num,x,mid-1,high)
  return -1

nos = [1,2,3,4,5]
print(bs(nos,9,0,len(nos)))
array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
numberPair = array.length/2
i = 0

if numberPair%2 == 0
  while i < numberPair
    pair = array.pop
    pairWith = rand(array.length)
    print pair, " pairs with ", array[pairWith]
    puts "."
    array.delete_at(pairWith)
    i += 1
  end
end

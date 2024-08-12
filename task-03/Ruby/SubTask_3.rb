print "Enter the number n: "
n=gets.chomp.to_i
n=(n/2.0).ceil
for i in 1..n
  for y in 1..(n-i)
    print " "
  end
  for x in 1..(2*i-1)
    print "*"
  end
  puts
end
for i in (n-1).downto(1)
  for y in 1..(n-i)
    print " "
  end
  for x in 1..(2*i-1)
    print "*"
  end
  puts
end

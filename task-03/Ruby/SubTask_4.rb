input=File.new("input.txt","r");
output=File.new("output.txt","a");
n=input.read().chomp.to_i;
n=(n/2.0).ceil
for i in 1..n
  for y in 1..(n-i)
    output.write(" ");
  end
  for x in 1..(2*i-1)
    output.write("*");
  end
  output.write("\n");
end
for i in (n-1).downto(1)
  for y in 1..(n-i)
    output.write(" ");
  end
  for x in 1..(2*i-1)
    output.write("*");
  end
  output.write("\n");
end

input.close();
output.close();
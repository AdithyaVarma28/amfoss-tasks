input=File.new("input.txt","r");
output=File.new("output.txt","w");
output.write(input.read());
input.close();
output.close();

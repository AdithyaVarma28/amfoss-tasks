IO.puts "Enter the number n: "
input=IO.gets("") |> String.trim()
num=String.to_integer(input)
n=if rem(num,2)==0 do
  num |> div(2)
else
  (num+1) |> div(2)
end
for i<-1..n do
  IO.puts(String.duplicate(" ",n-i) <> String.duplicate("*",2*i-1))
end
for i<-n-1..1 do
  IO.puts(String.duplicate(" ",n-i) <> String.duplicate("*",2*i-1))
end

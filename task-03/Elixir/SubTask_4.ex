case File.read("input.txt") do
  {:ok,content} ->
    num=String.to_integer(content)
    n=if rem(num,2)==0 do
      num |> div(2)
    else
      (num+1) |> div(2)
    end
    upper=for i<-1..n do
      String.duplicate(" ",n-i) <> String.duplicate("*",2*i-1) <> "\n"
    end
    lower=for i<-n-1..1 do
      String.duplicate(" ",n-i) <> String.duplicate("*",2*i-1) <> "\n"
    end
    diamond=Enum.join(upper++lower)
    case File.write("output.txt",diamond) do
      :ok ->
        IO.puts "copied to output.txt"
      {:error, reason} ->
        IO.puts "#{reason}"
    end
  {:error, reason} ->
    IO.puts "#{reason}"
end

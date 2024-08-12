case File.read("input.txt") do
  {:ok,content} ->
    case File.write("output.txt",content) do
      :ok ->
        IO.puts "copied to output.txt"
      {:error,reason} ->
        IO.puts "#{reason}"
    end
  {:error,reason} ->
    IO.puts "#{reason}"
end

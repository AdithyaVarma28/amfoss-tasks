echo "Enter code:"
read -r encoded_input
#echo "Enter the activation password"
#read -r pass
#decoded_output=$(echo "$encoded_input" | xxd -r -p)
decoded_output=$(echo "$encoded_input" | base64 -d)

#echo -e "\n$decoded_output/$pass"
echo -e "\n$decoded_output"

package main

import (
	"fmt"
	"os"
)

func main() {
	input,err:=os.ReadFile("input.txt")
	if err!=nil {
		fmt.Println(err)
		return
	}
	err=os.WriteFile("output.txt",input,0644)
	if err!=nil {
		fmt.Println(err)
		return
	}
}

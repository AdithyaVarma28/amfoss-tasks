package main

import (
	"fmt"
	"os"
	"math"
	"strconv"
	"strings"
)

func main() {
	input,err:=os.ReadFile("input.txt")
	if err!=nil {
		fmt.Println(err)
		return
	}
	num,err:=strconv.Atoi(string(input))
	if err!=nil {
		fmt.Println(err)
		return
	}
	n:=int(math.Ceil(float64(num)/2))
	var sb strings.Builder
	for i:=1;i<=n;i++ {
		for y:=1;y<=n-i;y++ {
			sb.WriteString(" ")
		}
		for x:=1;x<2*i;x++ {
			sb.WriteString("*")
		}
		sb.WriteString("\n")
	}
	for i:=n-1;i>=1;i-- {
		for y:=1;y<=n-i;y++ {
			sb.WriteString(" ")
		}
		for x:=1;x<2*i;x++ {
			sb.WriteString("*")
		}
		sb.WriteString("\n")
	}
	err=os.WriteFile("output.txt",[]byte(sb.String()),0644)
	if err!=nil {
		fmt.Println(err)
		return
	}
}

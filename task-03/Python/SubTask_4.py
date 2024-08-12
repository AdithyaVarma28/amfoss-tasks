import math

input=open("input.txt",'r')
output=open("output.txt",'w')

def printStars(n):
    for i in range(1,n+1):
        for y in range(1,n-i+1):
            output.write(" ")
        for x in range(1,2*i):
            output.write("*")
        output.write("\n")
    for i in range(n-1,0,-1):
        for y in range(1,n-i+1):
            output.write(" ",)
        for x in range(1,2*i):
            output.write("*")
        output.write("\n")

n=int(math.ceil(int(input.read())/2))
printStars(n)
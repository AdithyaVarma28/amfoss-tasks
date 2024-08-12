import math

def printStars(n):
    for i in range(1,n+1):
        for y in range(1,n-i+1):
            print(" ",end="")
        for x in range(1,2*i):
            print("*",end="")
        print()
    for i in range(n-1,0,-1):
        for y in range(1,n-i+1):
            print(" ",end="")
        for x in range(1,2*i):
            print("*",end="")
        print()

n=int(math.ceil(int(input("Enter the number n: "))/2))
printStars(n)
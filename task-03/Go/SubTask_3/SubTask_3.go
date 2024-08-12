package main
import ("fmt")
import ("math")

func main() {
	var num int;
	var n int;
	fmt.Print("Enter the number n: ")
	fmt.Scan(&num)
	n=int(math.Ceil(float64(num)/2));
	for i:=1;i<=n;i++ {
        for y:=1;y<=n-i;y++ {
            fmt.Print(" ");
        }
        for x:=1;x<2*i;x++ {
            fmt.Print("*");
        }
        fmt.Println("");
    }
    for i:=n-1;i>=1;i-- {
        for y:=1;y<=n-i;y++ {
            fmt.Print(" ");
        }
        for x:=1;x<2*i;x++ {
            fmt.Print("*");
        }
        fmt.Println("");
    }
}
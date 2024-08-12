import java.util.Scanner;

public class SubTask_3 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the number n: ");
        int n=sc.nextInt();
        n=(int) Math.ceil((double) n/2);
        for(int i=1;i<=n;i++) {
            for(int y=1;y<=n-i;y++) {
                System.out.print(" ");
            }
            for(int x=1;x<2*i;x++) {
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=n-1;i>=1;i--) {
            for(int y=1;y<=n-i;y++) {
                System.out.print(" ");
            }
            for(int x=1;x<2*i;x++) {
                System.out.print("*");
            }
            System.out.println();
        }
        sc.close();
    }
}


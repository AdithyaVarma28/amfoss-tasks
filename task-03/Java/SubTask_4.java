import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class SubTask_4 {
    public static void main(String[] args) {
        try {
            File input=new File("input.txt");
            File output=new File("output.txt");
            Scanner sc=new Scanner(input);
            PrintWriter write=new PrintWriter(output);
            int n=Integer.valueOf(sc.nextLine());
            n=(int) Math.ceil((double) n/2);
            for(int i=1;i<=n;i++) {
                for(int y=1;y<=n-i;y++) {
                    write.print(" ");
                }
                for(int x=1;x<2*i;x++) {
                    write.print("*");
                }
                write.println();
            }
            for(int i=n-1;i>=1;i--) {
                for(int y=1;y<=n-i;y++) {
                    write.print(" ");
                }
                for(int x=1;x<2*i;x++) {
                    write.print("*");
                }
                write.println();
            }
            sc.close();
            write.close();
        } 
        catch(FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}

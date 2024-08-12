import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class SubTask_2 {
    public static void main(String[] args) {
        File input=new File("input.txt");
        File output=new File("output.txt");
        try {
            Scanner sc=new Scanner(input);
            PrintWriter write=new PrintWriter(output);
            while(sc.hasNextLine()){
                write.println(sc.nextLine());
            }
            sc.close();
            write.close();
        } 
        catch(FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}

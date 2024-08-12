#include <stdio.h>
#include <math.h>

int main() {
    FILE *input,*output;
    char ch;
    input = fopen("input.txt","r");
    output = fopen("output.txt","a");
    ch=fgetc(input);
    fclose(input); 
    double n=ch-'0';
    n=(int)ceil((double)n/2);
    for(int i=1;i<=n;i++) {
        for(int y=1;y<=n-i;y++) {
            fputc(' ',output);
        }
        for(int x=1;x<2*i;x++) {
            fputc('*',output);
        }
        fputc('\n',output);
    }
    for(int i=n-1;i>=1;i--) {
        for(int y=1;y<=n-i;y++) {
            fputc(' ',output);
        }
        for(int x=1;x<2*i;x++) {
            fputc('*',output);
        }
        fputc('\n',output);
    }
    fclose(output);
    return 0;
}

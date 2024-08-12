#include <stdio.h>
#include <math.h>

int main() {
    printf("Enter the number n: ");
    double n;
    scanf("%lf",&n);
    n=(int)ceil((double) n/2);
    for(int i=1;i<=n;i++) {
        for(int y=1;y<=n-i;y++) {
            printf(" ");
        }
        for(int x=1;x<2*i;x++) {
            printf("*");
        }
        printf("\n");
    }
    for(int i=n-1;i>=1;i--) {
        for(int y=1;y<=n-i;y++) {
            printf(" ");
        }
        for(int x=1;x<2*i;x++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
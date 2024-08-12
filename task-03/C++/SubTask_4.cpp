#include <iostream>
#include <fstream>
#include <cmath>
using namespace std;

int main() {
    ifstream input("input.txt");
    ofstream output("output.txt");
    if(input && output) {
        double n;
        input>>n;
        n=(int)ceil((double) n/2);
        for(int i=1;i<=n;i++) {
            for(int y=1;y<=n-i;y++) {
                output<<" ";
            }
            for(int x=1;x<2*i;x++) {
                output<<"*";
            }
            output<<endl;
        }
        for(int i=n-1;i>=1;i--) {
            for(int y=1;y<=n-i;y++) {
                output<<" ";
            }
            for(int x=1;x<2*i;x++) {
                output<<"*";
            }
            output<<endl;
        }
    } 
    else {
        cerr<<"File Not Found!";
    }
    input.close();
    output.close();
    return 0;
}

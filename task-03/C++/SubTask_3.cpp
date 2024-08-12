#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double n;
    cout<<"Enter the number n: ";
    cin>>n;
    n=(int)ceil((double) n/2);
    for(int i=1;i<=n;i++) {
        for(int y=1;y<=n-i;y++) {
            cout<<" ";
        }
        for(int x=1;x<2*i;x++) {
            cout<<"*";
        }
        cout<<endl;
    }
    for(int i=n-1;i>=1;i--) {
        for(int y=1;y<=n-i;y++) {
            cout<<" ";
        }
        for(int x=1;x<2*i;x++) {
            cout<<"*";
        }
        cout<<endl;
    }
    return 0;
}

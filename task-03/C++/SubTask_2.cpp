#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ifstream input("input.txt");
    ofstream output("output.txt");
    if(input && output) {
        string content;
        getline(input,content);
        output<<content;
    } 
    else {
        cerr<<"File Not Found!";
    }
    input.close();
    output.close();
    return 0;
}

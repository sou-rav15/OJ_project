#include <iostream>
#include <string>
using namespace std;

// Function to check if a number (given as a string) is a palindrome
bool isPalindromeNumber(const string& numStr) {
    int left = 0;
    int right = numStr.size() - 1;
    
    while (left < right) {
        if (numStr[left] != numStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

int main() {
    string numStr;

    // Input number as a string
    cout << "Enter a number: ";
    getline(cin, numStr);

    // Check if the number string is a palindrome
    if (isPalindromeNumber(numStr)) {
        cout << "Yes" << endl;
    } else {
        cout << "No" << endl;
    }

    return 0;
}

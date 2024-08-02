#include <iostream>
#include <string>
#include <algorithm>

int main() {
    std::string inputString;

    // Ask for input

    std::getline(std::cin, inputString);

    // Reverse the string
    std::reverse(inputString.begin(), inputString.end());

    // Display the reversed string
    std::cout << inputString << std::endl;

    return 0;
}
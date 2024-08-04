#include <iostream>
#include <unordered_set>
#include <string>
using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_set<char> charSet; // To store characters in the current window
    int left = 0, right = 0; // Two pointers for the sliding window
    int maxLength = 0; // Variable to store the length of the longest substring

    while (right < s.length()) {
        // If the character is not in the set, add it and move the right pointer
        if (charSet.find(s[right]) == charSet.end()) {
            charSet.insert(s[right]);
            maxLength = max(maxLength, right - left + 1);
            right++;
        } else {
            // If the character is in the set, remove the leftmost character and move the left pointer
            charSet.erase(s[left]);
            left++;
        }
    }

    return maxLength;
}

int main() {
    string input;
    cin >> input;

    int result = lengthOfLongestSubstring(input);
    cout << "Length of the longest substring without repeating characters: " << result << endl;

    return 0;
}

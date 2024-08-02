#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(int n, vector<int> &arr, int target) {
    unordered_map<int, int> mpp;
    for (int i = 0; i < n; i++) {
        int num = arr[i];
        int moreNeeded = target - num;
        if (mpp.find(moreNeeded) != mpp.end()) {
            return {mpp[moreNeeded], i};
        }
        mpp[num] = i;
    }
    return { -1, -1};
}

int main() {
    // Define file path
    string filePath = "input.txt";

    // Open the file
    ifstream inputFile(filePath);
    if (!inputFile.is_open()) {
        cerr << "Error opening file!" << endl;
        return 1;
    }

    // Read inputs from the file
    int n;
    inputFile >> n;  // Read the size of the array

    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        inputFile >> arr[i];  // Read each element of the array
    }

    int target;
    inputFile >> target;  // Read the target value

    // Close the file
    inputFile.close();

    // Call the twoSum function
    vector<int> ans = twoSum(n, arr, target);

    // Print the result
    cout << "This is the answer for variant 2: [" << ans[0] << ", "
         << ans[1] << "]" << endl;

    return 0;
}

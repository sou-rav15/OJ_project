#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Function to reverse a portion of the array
void reverseArray(vector<int>& arr, int start, int end) {
    while (start < end) {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
}

// Function to rotate the array by k positions
void rotateArray(vector<int>& arr, int k) {
    int n = arr.size();
if(k>n){
    k = k % n; 
} // Handle cases where k >= n

    // Step 1: Reverse the entire array

    
    // Step 2: Reverse the first part (0 to n - k - 1)
    reverseArray(arr, 0, n - k - 1);
    
    // Step 3: Reverse the last part (n - k to n - 1)
    reverseArray(arr, n - k, n - 1);
    reverseArray(arr, 0, n - 1);
}

int main() {
    vector<int> arr;
    int n, k, num;


    cin >> n;

  
    for (int i = 0; i < n; ++i) {
        cin >> num;
        arr.push_back(num);
    }

    cin >> k;

    rotateArray(arr, k);

  
    for (int i = 0; i < n; ++i) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}

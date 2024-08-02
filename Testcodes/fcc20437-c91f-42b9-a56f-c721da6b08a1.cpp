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
  

  int n;
   cin >> n;  // Read the size of the array

    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
     cin >> arr[i];  // Read each element of the array
    }

    int target;
  cin >> target;  // Read the target value

  

    // Call the twoSum function
    vector<int> ans = twoSum(n, arr, target);

    // Print the result
   // cout << "This is the answer for //variant 2: [" << ans[0] << ", "
       //  << ans[1] << "]" << endl;

    return 0;
}

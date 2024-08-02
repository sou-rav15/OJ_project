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
    return {-1, -1};
}

int main() {
    int n;
    cin >> n; // Read the size of the array

    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i]; // Read the array elements
    }

    int target;
    cin >> target; // Read the target value

    vector<int> ans = twoSum(n, arr, target);
    cout << "The answer for the given input: [" << ans[0] << ", "
         << ans[1] << "]" << endl;
    return 0;
}

#include <iostream>
#include <vector>
#include <unordered_map>

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
    cin >> n;

    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int target;
    cin >> target;

    vector<int> ans = twoSum(n, arr, target);

    if (ans[0] != -1 && ans[1] != -1) {
        cout << ans[0]  << ans[1]  << endl;
    } else {
        cout << "No two elements sum up to " << target << endl;
    }

    return 0;
}

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Function to find any triplet that sums up to zero
bool hasThreeSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());

    for (int i = 0; i < nums.size(); ++i) {
        // Skip duplicate values for the first number in the triplet
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        
        int target = -nums[i];
        int left = i + 1;
        int right = nums.size() - 1;
        
        while (left < right) {
            int sum = nums[left] + nums[right];
            if (sum == target) {
                return true; // Found a valid triplet
            } else if (sum < target) {
                ++left;
            } else {
                --right;
            }
        }
    }
    
    return false; // No valid triplet found
}

int main() {
    vector<int> nums;

    int n, num;
 
    cin >> n;

  
    for (int i = 0; i < n; ++i) {
        cin >> num;
        nums.push_back(num);
    }

    if (hasThreeSum(nums)) {
        cout << "YES" << endl;
    } else {
        cout << "NO" << endl;
    }

    return 0;
}

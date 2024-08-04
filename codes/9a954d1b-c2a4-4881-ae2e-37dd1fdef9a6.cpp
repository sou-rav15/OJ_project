#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    // Combine the two arrays
    vector<int> merged;
    merged.reserve(nums1.size() + nums2.size());
    
    size_t i = 0, j = 0;
    
    while (i < nums1.size() && j < nums2.size()) {
        if (nums1[i] <= nums2[j]) {
            merged.push_back(nums1[i++]);
        } else {
            merged.push_back(nums2[j++]);
        }
    }
    
    // Append remaining elements
    while (i < nums1.size()) {
        merged.push_back(nums1[i++]);
    }
    
    while (j < nums2.size()) {
        merged.push_back(nums2[j++]);
    }
    
    // Calculate median
    size_t totalSize = merged.size();
    if (totalSize % 2 == 0) {
        return (merged[totalSize / 2 - 1] + merged[totalSize / 2]) / 2.0;
    } else {
        return merged[totalSize / 2];
    }
}

int main() {
    int m, n;
    cin >> m;
    vector<int> nums1(m);
    for (int i = 0; i < m; ++i) {
        cin >> nums1[i];
    }
    cin >> n;
    vector<int> nums2(n);

    for (int i = 0; i < n; ++i) {
        cin >> nums2[i];
    }
    
    double median = findMedianSortedArrays(nums1, nums2);
    cout << "The median is: " << median << endl;
    
    return 0;
}

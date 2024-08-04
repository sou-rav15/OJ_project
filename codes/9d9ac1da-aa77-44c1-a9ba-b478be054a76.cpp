#include <iostream>
#include <vector>
#include <algorithm>

double findMedianSortedArrays(const std::vector<int>& nums1, const std::vector<int>& nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.size() > nums2.size()) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    int x = nums1.size();
    int y = nums2.size();
    int low = 0, high = x;
    
    while (low <= high) {
        int partitionX = (low + high) / 2;
        int partitionY = (x + y + 1) / 2 - partitionX;
        
        int maxX = (partitionX == 0) ? INT_MIN : nums1[partitionX - 1];
        int minX = (partitionX == x) ? INT_MAX : nums1[partitionX];
        
        int maxY = (partitionY == 0) ? INT_MIN : nums2[partitionY - 1];
        int minY = (partitionY == y) ? INT_MAX : nums2[partitionY];
        
        if (maxX <= minY && maxY <= minX) {
            if ((x + y) % 2 == 0) {
                return (std::max(maxX, maxY) + std::min(minX, minY)) / 2.0;
            } else {
                return std::max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    
    throw std::invalid_argument("Input arrays are not sorted.");
}

int main() {
    int m, n;
    std::cin >> m;
    std::vector<int> nums1(m);
    for (int i = 0; i < m; ++i) {
        std::cin >> nums1[i];
    }
    
    std::cin >> n;
    std::vector<int> nums2(n);
    
    for (int i = 0; i < n; ++i) {
        std::cin >> nums2[i];
    }
    
    try {
        double median = findMedianSortedArrays(nums1, nums2);
        std::cout << "The median is " << median << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }
    
    return 0;
}

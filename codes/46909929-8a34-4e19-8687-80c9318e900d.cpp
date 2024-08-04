#include <iostream>
#include <vector>

int findDuplicate(const std::vector<int>& nums) {
    // Phase 1: Finding the intersection point
    int tortoise = nums[0];
    int hare = nums[0];
    
    // First phase: meeting point inside the cycle
    do {
        tortoise = nums[tortoise]; // Move tortoise by 1 step
        hare = nums[nums[hare]];   // Move hare by 2 steps
    } while (tortoise != hare);
    
    // Phase 2: Finding the entrance to the cycle
    tortoise = nums[0]; // Reset tortoise to the start
    while (tortoise != hare) {
        tortoise = nums[tortoise]; // Move tortoise by 1 step
        hare = nums[hare];         // Move hare by 1 step
    }
    
    // Both pointers now point to the start of the cycle which is the duplicate number
    return hare;
}

int main() {
    int n;
    std::cin >> n;
    std::vector<int> nums(n);
    for (int i = 0; i < n; ++i) {
        std::cin >> nums[i];
    }
    
    int duplicate = findDuplicate(nums);
    std::cout << "The duplicate number is " << duplicate << std::endl;
    
    return 0;
}

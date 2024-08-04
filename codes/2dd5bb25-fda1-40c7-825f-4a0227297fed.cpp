#include <iostream>
#include <vector>

int findDuplicate(std::vector<int>& nums) {
    // Step 1: Initialize two pointers (tortoise and hare)
    int slow = nums[0];
    int fast = nums[0];

    // Step 2: Move slow by one step and fast by two steps until they meet
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);

    // Step 3: Find the entrance to the cycle
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    // The meeting point is the duplicate number
    return slow;
}

int main() {
    int size;
    std::cin >> size;

    std::vector<int> nums(size);
    for(int i = 0; i < size; i++) {
        std::cin >> nums[i];
    }

    int duplicate = findDuplicate(nums);
    std::cout << "The duplicate number is: " << duplicate << std::endl;

    return 0;
}

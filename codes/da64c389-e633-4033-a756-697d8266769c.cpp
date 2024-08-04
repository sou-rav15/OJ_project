#include <iostream>
using namespace std;

// Function to calculate the number of distinct ways to reach the top
int climbStairs(int n) {
    if (n <= 2) return n;
    
    int prev1 = 2, prev2 = 1;
    int current;
    
    for (int i = 3; i <= n; ++i) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return current;
}

int main() {
    int n;
    cin >> n;
    
    int result = climbStairs(n);
    cout << "Number of distinct ways to climb to the top: " << result << endl;
    
    return 0;
}

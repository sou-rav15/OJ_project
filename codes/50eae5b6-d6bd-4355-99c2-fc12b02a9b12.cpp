#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxProfit(const vector<int>& prices) {
    if (prices.empty()) return 0;

    int minPrice = INT_MAX; // Initialize minimum price to a very large value
    int maxProfit = 0;      // Initialize maximum profit to 0

    for (int price : prices) {
        if (price < minPrice) {
            minPrice = price; // Update the minimum price
        } else {
            maxProfit = max(maxProfit, price - minPrice); // Calculate the profit and update maxProfit if needed
        }
    }

    return maxProfit;
}

int main() {
    vector<int> prices;
    int n, price;
    cin >> n;

    for (int i = 0; i < n; ++i) {
        cin >> price;
        prices.push_back(price);
    }

    int result = maxProfit(prices);
    cout << "Maximum profit: " << result << endl;

  return 0;
}

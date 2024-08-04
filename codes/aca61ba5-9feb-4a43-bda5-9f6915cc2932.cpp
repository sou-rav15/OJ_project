#include <iostream>
#include <vector>
using namespace std;

int maxProfit(const vector<int>& prices) {
    if (prices.empty()) return 0;

    int minPrice = prices[0]; // Initialize minPrice with the first price
    int maxProfit = 0;        // Initialize maximum profit to 0

    for (int i = 1; i < prices.size(); ++i) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // Update the minimum price if current price is lower
        } else {
            maxProfit = max(maxProfit, prices[i] - minPrice); // Calculate profit and update maxProfit if needed
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
    cout <<  result ;
return 0;
}

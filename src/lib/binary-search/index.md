# Binary Search
With ordered arrays of a small size, the algorithm of binary search doesn’t have much of an advantage over linear search.
With an array containing 100 values, here are the maximum number of steps
each type of search would take:
• Linear search: 100 steps
• Binary search: 7 steps

The whole beauty of binary search is that each inspection eliminates half of the remaining elements. Therefore, each time we double the amount of data, 
we add only one step. After all, this doubling of data gets totally eliminated with the first inspection!

# Time complexity
`O(log n)`


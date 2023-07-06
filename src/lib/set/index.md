# Array-based set
It's the same as array but with one additional rule: No duplicate data are allowed!.
So, Read, Search and deletion has the same time complexity as an array, but insertion is different.
## Insertion
In order to perform insertion task, a computor must perform two three tasks:
1. Search for duplicate data.
2. Shift data to make room for the new data.
3. Insert the new data.
Time complextiy: O(n) + O(n) + O(1) = O(n)

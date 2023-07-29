# Sorting
## Bubble sort
In bubble-sort.ts file I have 3 ways of writing bubble sort and I really do like The first one!
The steps are abvious as we start by the max and decrement max on each iteration.
The second solution the boundaries are not clear as on the second loop we use

`j < arr.length - 1 - i`

It's  almost hidden!

The third solution we have to track sorted state in order for this algorithm to work properly!
But it might be the most efficient one!

## Selection Sort
It also has complexity of O(N^2), but in real world it's a bit faster than bubble sort as it takes half of the steps that bubble sort takes

## Insertion Sort
in the worst-case scenario, we compare and shift all the data, and in the best-case scenario, we shift none of the data (and just make one comparisonper pass-through).
For the average scenario, we can say that in the aggregate, we probably compare and shift about half the data.
Thus, if Insertion Sort takes N2 steps for the worst-case scenario, we’d say that it takes about N2 / 2 steps for the average scenario.
(In terms of Big O, however, both scenarios are O(N2).)
The array, [1, 2, 3, 4] is already presorted, which is the best case.
The worst case for the same data would be [4, 3, 2, 1], and an example of an average case might be [1, 3, 4, 2].
In the worst case ([4, 3, 2, 1]), there are six comparisons and six shifts, for a total of 12 steps.
In an average case of [1, 3, 4, 2], there are four comparisons
and two shifts, for a total of six steps. In the best case ([1, 2, 3, 4]), there are three comparisons and zero shifts.
We can now see that the performance of Insertion Sort varies greatly based on the scenario. In the worst-case scenario, Insertion Sort takes N2 steps.
In an average scenario, it takes N2 / 2 steps. And in the best-case scenario, it takes about N steps.
                 Best Case Average Case  Worst Case
Selection Sort    N^2 / 2     N^2 / 2       N^2 / 2
Insertion Sort    N          N^2 / 2       N^2

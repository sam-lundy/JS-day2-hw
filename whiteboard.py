# Task
# Given an array of integers, remove the smallest value. Do not mutate the 
#original array/list. If there are multiple elements with the same value, 
#remove the one with a lower index. If you get an empty array/list, 
#return an empty array/list.

# Don't change the order of the elements that are left.

# Examples
# * Input: [1,2,3,4,5], output = [2,3,4,5]
# * Input: [5,3,2,1,4], output = [5,3,2,4]
# * Input: [2,2,1,2,1], output = [2,2,2,1]

#added conditions, cannot use remove or min


def small_comp(arr):
    if not arr:
        return []
    min_index = arr.index(min(arr))

    return [num for i, num in enumerate(arr) if i != min_index]
    

print(small_comp([]))
print(small_comp([2, 2, 1, 2, 1]))
print(small_comp([1, 2, 3, 4, 5]))
print(small_comp([5, 3, 2, 1, 4]))


def remove_small(arr):
    counter = 0
    result = []
    if not arr:
        return []
    counter = arr[0]
    for i in arr:
        if i < counter:
            counter = i
    low_found = True
    

    for num in arr:
        if low_found:
            if num == counter:
                low_found = False
                continue
        result.append(num)
        
    return result




print(remove_small([5, 3, 2, 1, 4]))
print(remove_small([]))
print(remove_small([2, 2, 1, 2, 1]))
print(remove_small([1, 2, 3, 4, 5]))



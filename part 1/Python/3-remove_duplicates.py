def remove_duplicates(lst: list) -> list:
    lst = list(dict.fromkeys(lst))
    print(lst)
    return lst

remove_duplicates([1, 2, 3, 2, 1])

def remove_duplicates(lst: list) -> list:
    lst = list(dict.fromkeys(lst)) # Remove duplicates from the list by converting it to a dictionary and then back to a list

    print(lst)
    return lst

remove_duplicates([1, 2, 3, 2, 1])

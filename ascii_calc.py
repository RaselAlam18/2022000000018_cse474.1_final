def sum_of_evens_from_name(full_name):

    cleaned_name = full_name.replace(" ", "")

    if cleaned_name == "":
        return 0

    ascii_sum = 0

    for char in cleaned_name:
        ascii_sum += ord(char)

    even_sum = 0

    for i in range(2, ascii_sum + 1, 2):
        even_sum += i

    return even_sum


print(sum_of_evens_from_name("Rasel Alam"))
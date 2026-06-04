from ascii_calc import sum_of_evens_from_name


def test_standard_input():
    assert sum_of_evens_from_name("AB") == 4290


def test_empty_and_whitespace():
    assert sum_of_evens_from_name("") == 0
    assert sum_of_evens_from_name(" ") == 0


def test_special_characters():
    assert sum_of_evens_from_name("!") == 272
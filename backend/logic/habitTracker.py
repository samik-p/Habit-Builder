import datetime as dt
import json
from habit import Habit


class HabitTracker:
    def __init__(self, habits=None):
        # NOTE: linked list might be better (do some research)
        if not habits:
            habits = []

        self.habits = habits

    def __str__(self):
        output = "Tracker:[\n"
        counter = 1
        for habit in self.habits:
            output += f"\t{str(counter)}:\t{str(habit)}\n"
            counter += 1
        output += "]"
        return output

    def toDict(self):
        output = {"habits": []}
        for habit in self.habits:
            output["habits"].append(habit.toDict())
        return output

    def addHabit(self, title):
        newHabit = Habit(title)
        self.habits.append(newHabit)

    def removeHabit(self, idx):
        if idx < 1 or idx > len(self.habits):
            print(f"[-] removeHabit -- Invalid index: {idx}")
            return

        self.habits.pop(idx - 1)

    def toggleHabitDate(self, idx, y, m, d):
        if idx < 1 or idx > len(self.habits):
            print(f"[-] toggleHabitDate -- Invalid index: {idx}")
            return

        self.habits[idx - 1].toggleDate(y, m, d)

    def toggleHabitToday(self, idx):
        if idx < 1 or idx > len(self.habits):
            print(f"[-] toggleHabitToday -- Invalid index: {idx}")
            return

        self.habits[idx - 1].toggleToday()

    def updateHabitTitle(self, idx, title):
        if idx < 1 or idx > len(self.habits):
            print(f"[-] updateHabitTitle -- Invalid index: {idx}")
            return

        self.habits[idx - 1].updateTitle(title)


def convert_to_serializable(obj):
    if isinstance(obj, set):
        return list(obj)
    raise TypeError(f"Object of type {obj.__class__.__name__} is not JSON serializable")


def save_dict_to_json(data, filename):
    with open(filename, "w") as fd:
        json.dump(data, fd, indent=4, default=convert_to_serializable)


def load_dict_from_json(filename):
    with open(filename, "r") as fd:
        data = json.load(fd)

        habit_list = []
        for entry in data["habits"]:
            new_habit = Habit(entry["title"], entry["calendar"])
            habit_list.append(new_habit)

        return HabitTracker(habit_list)


if __name__ == "__main__":
    test = HabitTracker()
    test.addHabit("Jogging")
    test.addHabit("Coding")
    print(test)
    # print(test)
    # test.removeHabit(0)
    test.toggleHabitToday(2)
    test.toggleHabitDate(1, 2025, 3, 17)
    test.toggleHabitToday(1)
    print(test)

    test_dict = test.toDict()
    save_dict_to_json(test_dict, "test.json")

    # json_string = json.dumps(test_dict, default=convert_to_serializable)
    # print(json_string)

    test2 = load_dict_from_json("test.json")
    # print(test)
    print(test2)

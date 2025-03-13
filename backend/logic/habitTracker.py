import datetime as dt
from .habit import Habit


class HabitTracker:
    def __init__(self):
        # NOTE: linked list might be better (do some research)
        self.habits = []

    def __str__(self):
        output = "Tracker:[\n"
        counter = 1
        for habit in self.habits:
            output += f"\t{str(counter)}:\t{str(habit)}\n"
            counter += 1
        output += "]"
        return output

    def addHabit(self, title):
        newHabit = Habit(title)
        self.habits.append(newHabit)

    def removeHabit(self, idx):
        if idx < 1 or idx > len(self.habits):
            print(f"[-] removeHabit -- Invalid index: {idx}")
            pass

        self.habits.pop(idx - 1)

    def toggleHabitDate(self, idx, y, m, d):
        if idx < 1 or idx > len(self.habits):
            print(f"[-] toggleHabitDate -- Invalid index: {idx}")
            pass

        self.habits[idx - 1].toggleDate(y, m, d)

    def toggleHabitToday(self, idx):
        if idx < 1 or idx > len(self.habits):
            print(f"[-] toggleHabitToday -- Invalid index: {idx}")
            pass

        self.habits[idx - 1].toggleToday()

    def updateHabitTitle(self, idx, title):
        if idx < 1 or idx > len(self.habits):
            print(f"[-] updateHabitTitle -- Invalid index: {idx}")
            pass

        self.habits[idx].updateTitle(title)


if __name__ == "__main__":
    test = HabitTracker()
    test.addHabit("Jogging")
    test.addHabit("Coding")
    print(test)
    test.removeHabit(0)
    test.toggleHabitToday(7)
    test.toggleHabitToday(2)
    print(test)

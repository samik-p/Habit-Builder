import datetime as dt


class Habit:
    def __init__(self, title, num):
        self.number = num
        self.title = title
        self.streak = 0
        self.calendar = dict()

    def printInfo(self):
        print(f"Habit #{self.number}: {self.title} -- Streak: {self.streak}")
        print(self.calendar)
        print()

    def addEntry(self, year, month, day):
        if year not in self.calendar or month not in self.calendar[year]:
            self.calendar[year] = {month: {day}}
        else:
            self.calendar[year][month].add(day)

    def addToday(self):
        today = dt.datetime.now()
        year, month, day = (
            int(today.strftime("%Y")),
            int(today.strftime("%m")),
            int(today.strftime("%d")),
        )

        if year not in self.calendar or month not in self.calendar[year]:
            self.calendar[year] = {month: {day}}
        else:
            self.calendar[year][month].add(day)

        # this is assuming the current streak is correct
        self.streak += 1

    def calcStreak(self):
        today = dt.datetime.now()


def main():

    habitList = ["Cook a meal", "Brush teeth", "Work out"]
    today = dt.datetime(2025, 3, 6)
    year, month, day = (
        int(today.strftime("%Y")),
        int(today.strftime("%m")),
        int(today.strftime("%d")),
    )
    habits = []

    taskNum = 1
    for habit in habitList:
        newHabit = Habit(habit, taskNum)
        habits.append(newHabit)
        taskNum += 1

    habits[0].addToday()
    habits[1].addEntry(year, month, day)

    for h in habits:
        h.printInfo()


if __name__ == "__main__":
    main()

import datetime as dt
from functools import singledispatchmethod


class Habit:
    def __init__(self, title, calendar=None):
        self.title = title

        # {year: {month: {day}}}
        self.calendar = {}
        if calendar:
            self.updateCalendar(calendar)

        self.streak = 0
        self.updateStreak()

    def __str__(self):
        return f"<Habit: name='{self.title}', streak={self.streak}, calendar={self.calendar}>"

    def toDict(self):
        return {"title": self.title, "calendar": self.calendar}

    def updateCalendar(self, calendar):
        for y in calendar:
            for m in calendar[y]:
                for d in calendar[y][m]:
                    self.toggleDate(int(y), int(m), int(d))

    def toggleDate(self, y, m, d):
        if self.isDateInCalendar(y, m, d):
            self.calendar[y][m].remove(d)
            if len(self.calendar[y][m]) == 0:
                self.calendar[y].pop(m)
            if len(self.calendar[y]) == 0:
                self.calendar.pop(y)
        else:
            if y in self.calendar:
                if m in self.calendar[y]:
                    self.calendar[y][m].add(d)
                else:
                    self.calendar[y][m] = {d}
            else:
                self.calendar[y] = {m: {d}}

        self.updateStreak()

    def toggleToday(self):
        today = dt.date.today()
        self.toggleDate(today.year, today.month, today.day)

    @singledispatchmethod
    def isDateInCalendar(self, y, m, d):
        return y in self.calendar and m in self.calendar[y] and d in self.calendar[y][m]

    @isDateInCalendar.register
    def _(self, date: dt.date):
        return (
            date.year in self.calendar
            and date.month in self.calendar[date.year]
            and date.day in self.calendar[date.year][date.month]
        )

    def updateStreak(self):
        # NOTE: optimize this later
        cur_day = dt.date.today()
        self.streak = 0

        while self.isDateInCalendar(cur_day):
            self.streak += 1
            cur_day = cur_day - dt.timedelta(days=1)

    def updateTitle(self, title):
        self.title = title


def printList(l):
    for e in l:
        print("\t" + str(e))


if __name__ == "__main__":

    test = Habit("Coding")
    test2 = Habit("Jogging")
    habitList = [test, test2]

    printList(habitList)
    test.toggleToday()
    test.toggleDate(2025, 3, 11)
    test.toggleToday()
    printList(habitList)

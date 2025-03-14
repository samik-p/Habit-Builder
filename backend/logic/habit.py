import datetime as dt
from functools import singledispatchmethod


class Habit:
    def __init__(self, title):
        self.title = title
        self.streak = 0
        self.calendar = dict()  # {year: {month: {day}}}

    def __str__(self):
        return f"<Habit: name='{self.title}', streak={self.streak}, calendar={self.calendar}>"

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
        cur_day = dt.date.today()
        self.streak = 0

        while self.isDateInCalendar(cur_day):
            self.streak += 1
            cur_day = cur_day - dt.timedelta(days=1)

    def updateTitle(self, title):
        self.title = title


if __name__ == "__main__":
    test = Habit("placeholder")
    print(test)
    test.toggleToday()
    test.toggleDate(2025, 3, 11)
    test.toggleToday()
    print(test)

import datetime as dt
import unittest
from habit import Habit


class Tester(unittest.TestCase):

    def testPrint(self):
        test = Habit("test")
        self.assertEqual(
            f"{test}",
            "<Habit: name='test', streak=0, calendar={}>",
            "",
        )

    def testToggleToday_1(self):
        test = Habit("test")
        today = dt.date.today()

        test.toggleToday()

        self.assertEqual(
            f"{test}",
            "<Habit: name='test', streak=1, calendar={%d: {%d: {%d}}}>"
            % (today.year, today.month, today.day),
            "",
        )

    def testToggleToday_2(self):
        test = Habit("test")

        test.toggleToday()
        test.toggleToday()

        self.assertEqual(
            f"{test}",
            "<Habit: name='test', streak=0, calendar={}>",
            "<Habit: name='test', streak=0, calendar={}>",
        )

    def testToggleDate_1(self):
        test = Habit("test")
        year = 2024
        month = 6
        day = 23

        test.toggleDate(year, month, day)

        self.assertEqual(
            f"{test}",
            "<Habit: name='test', streak=%d, calendar={%d: {%d: {%d}}}>"
            % (test.streak, year, month, day),
            "",
        )

    def testToggleDate_2(self):
        test = Habit("test")
        year = 2024
        month = 6
        day = 23

        test.toggleDate(year, month, day)
        test.toggleDate(year, month, day)

        self.assertEqual(
            f"{test}",
            "<Habit: name='test', streak=0, calendar={}>",
            "",
        )


if __name__ == "__main__":
    unittest.main()

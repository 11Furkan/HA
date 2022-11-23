# 1. Jahr muss durch 4 teilbar sein. 
# 2. Ist das Jahr durch 100 teilbar, ist es kein Schaltjahr. 
# 3. Ist das Jahr 400 teilbar, ist es trotzdem ein Schaltjahr.



#Check if input is a leap year
def CheckLeap(Year):
    if((Year % 400 == 0)or
        (Year % 100 != 0)and
        (Year % 4 == 0)):
        print(f"the Year {Year} is a leap year");
    else:
        print(f"The year {Year} isn't a leap year")


Year = int(input("Enter the year: "))
CheckLeap(Year)
    

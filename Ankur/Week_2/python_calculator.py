a = int(input("Enter a number"))
b = int(input("Enter another number"))
operator = input("Enter an operator")
if operator == "+":
    print (a + b)
elif operator == "*":
    print (a * b)
elif operator == "-":
    print(a - b)
elif operator == "/":
    print (a / b)
else:
    print("Operator not recognised")
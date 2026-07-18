#!/bin/bash
#
echo "Login"

echo -n "Enter are username:"
read username

echo -n "Enter your password:"
read password
echo

if [ "$username" = "Tochukwu" ] && [ "$password" = "12345" ]; 
then
 echo "Acess Granted"
else
  echo "Access Denied"
fi

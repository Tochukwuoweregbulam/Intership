#!/bin/bash

echo "anlysing log files"
echo "=================="


grep "hello" interactiveshell.sh
grep -c "hello" interactiveshell.sh 

find . -name "*.sh" -mtime -1

grep "hello" file.txt
grep -c "hello" file.txt


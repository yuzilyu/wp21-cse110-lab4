1. The bug was that the result is treated as a string. In fact num1 and num2 are all treated as strings, which makes the addition process concatenating two strings together instead of adding the value.
2. I fixed it by parsing num1 and num2 as integer values that way it forces the addition to be done on numbers. [screenshot](/part3/part3-fix-ss.PNG)
3. The name is citylots.json
4. part.js initiated the download of the new file
5. The size is 11.7 MB
6. 1.07 s
7. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36
8. Apache
9. Thu, 22 Apr 2021 01:27:47 GMT
10. application/json
11. On line 2 of part2.js, fetchData made the request
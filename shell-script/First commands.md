# First Commands 

1. Create a shell script file with the '.sh' extension
```
nano script_file_name.sh
```
2. In the first line of the file, it's declare the type of shell that this shell script is executed
```bash 
#!/bin/bash
```
3. To comment a line, use the '#' char in the beginning of line:
```bash
# This is a comment
```
4. To print a string, for example, use the command 'echo' following by the string:
```bash
echo "Hello World"
```
5. It's possible too, print the content of a variable:
```bash
name="Paulo"

echo "Hello $name"
```
6. To give execution permission to a shell script file, use the following command:
```bash
chmod a+x script_file_name.sh
```
7. To run the script:
```bash
./script_file_name_.sh
```

## Source:
- Daniel Donda - Youtube Channel - Kali Linux Course - Shell Script Introduction
https://www.youtube.com/watch?v=9mS1ojDlTUw&list=PLPIvFl3fAVRfzxwHMK1ACl9m4GmwFoxVz&index=11

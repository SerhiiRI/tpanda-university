#
# !/usr/bin/python
# -*- coding: UTF-8 -*-


import json
import sys

try:
    file_name = "data/"
    file_name += sys.argv[1]
except IndexError:
    print("You don't enter file_name")
    exit()


def open_file(f_name):
    try:
        with open(f_name) as json_file:
            data = json.load(json_file)
        return data
    except IOError:
        print("Error: File does not appear to exist")
    except json.decoder.JSONDecodeError:
        print("Error: Invalid type of json")


def returnNum(num, fname):
    print('hello')
    data_num = open_file(fname)
    list(map(lambda x: print(x), data_num['entities'][:num]))


def saveJSON(data, f_name, key):
    try:
        data = eval(data)
        with open(f_name, key) as json_file:
            json.dump(data, json_file)
        return True
    except IOError:
        print("Error: File does not appear to exist")
        return False


if sys.argv[2] == '--save-w':
    print(saveJSON(sys.argv[3], file_name, 'w'))

if sys.argv[2] == '--save-a':
    print(saveJSON(sys.argv[3], file_name, 'a'))

if sys.argv[2] == '--return':
    returnNum(int(sys.argv[3]), file_name)

if sys.argv[2] == '--length':
    print(open_file(file_name)['length'])

if sys.argv[2] == '--open-file':
    print(open_file(file_name))

if sys.argv[2] == '--return-all':
    print(open_file(file_name))

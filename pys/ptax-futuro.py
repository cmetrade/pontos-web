import pandas as pd 
import time
import os

os.system("awk {'print $1'} arquivos/ptax-futuro.txt > arquivos/ptax-futuro2.txt")
with open("arquivos/ptax.txt", "r") as arquivo:
        ptax1 = arquivo.read()
with open("arquivos/ptax-futuro2.txt", "r") as arquivo:
        ptax2 = arquivo.read()

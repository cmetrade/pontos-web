#!/bin/bash
cd ~/pontos
arquivo="logs/relatorio.log"

i=1

while [[ $i -lt 5 ]] 
do
        if [ -e $arquivo ]; then
           cp logs/relatorio.log arquivos/relatorio.txt
           python3 pys/relatorio.py
           break
        fi
echo "$i tentativa(s)"
((i++))
done

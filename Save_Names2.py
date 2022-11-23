# 2. Schreibt ein Programm, das Namen speichern und Ausgeben kann. 
# Die Namen sollen ganz simpel in einer Textdatei gespeichert werden. 
# Das Programm soll 2 Funktionalitäten haben: 1. Zeige alle Namen 
# und 2. Füge Namen zur Textdatei hinzu. 
# Achtung: Doppelte Einträge sollen nicht eingetragen werden.



# Ich wollte es erst mal wie im friendbook machen und bin nicht ganz damit klargekommen.
class User:
    name = str

def save_name(name):

def add_name():
    name_file = open("names.txt", "w+")
    name_file.write(str(name))

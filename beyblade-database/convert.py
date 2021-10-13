import csv
import secrets


with open('BEYBLADE.csv') as csvfile:
	spam_reader = csv.reader(csvfile, delimiter=' ', quotechar='|')
	for idx, bey in enumerate(spam_reader):
		bey = bey[0].split(',')
		beyblade = f"_id: '{secrets.token_hex(4)}',name: '{bey[0]}',series: '{bey[1]}',attack: {bey[2]},burst: {bey[3]},defense: {bey[4]},weight: {bey[5]},agility: {bey[6]},stamina: {bey[7]} "

		print('db.beyblades.insert({' + f'{beyblade}' '})')
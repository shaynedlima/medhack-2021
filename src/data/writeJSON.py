import random
import json
import datetime

print('test')


import json

with open("coughs.json") as f:
  coughs = json.load(f)

with open("time.json") as f:
  time = json.load(f)

# Inputs: audio, results, initialTime
# Output: JSON

time_frame = 60
window_size = 16000



test = random.choices(range(500), k=window_size)
times = [(datetime.datetime.now() - datetime.timedelta(seconds=i)).strftime('%Y-%m-%d %H:%M:%S') for i in range(time_frame)]
times.reverse()
time['data'] = times

# Update audio monitor data
audio_data = coughs[0]["data"]
print(audio_data)
audio_data.pop(0)
audio_data.extend(random.sample(range(3),1))
print(audio_data)
coughs[0]["data"] = audio_data


# Update coughs data
cough_data = coughs[1]["data"]
print(cough_data)
cough_data.pop(0)
cough_data.extend(random.sample(range(3),1))
print(cough_data)
coughs[1]["data"] = cough_data

# coughs[0]["data"] = random.choices(range(3), k=time_frame)
# coughs[1]["data"] = random.choices(range(3), k=time_frame)

bins = 5 # 5s bins

# Writing data
with open("coughs.json", "w") as jsonFile:
    json.dump(coughs, jsonFile)

with open("time.json", "w") as jsonFile:
    json.dump(time, jsonFile)
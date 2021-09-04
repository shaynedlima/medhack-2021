import os
import sys
import numpy as np
import datetime
import math
import sounddevice as sd
import plotext as plt


os.system("cls")
print("****************************************************************")
print("**************  C O U G H      D E T E C T O R  ****************")
print("****************************************************************")
print("\nSuccessfully loaded model... starting microphone!"+'\n'*12)
 
Fs = 16000
sd.default.samplerate = Fs
sd.default.channels = 1
windowsize = Fs
buffer = np.zeros((windowsize*2))
end = 0
tend = 0
cough = 0

def write_file(t, cough):
    fname = "out.txt"

    with open(fname, "a") as file_object:
        file_object.write(t.strftime("%H:%M:%S") + ", " + str(cough) + "\n")

def classify_window(t, x):
    global cough
    global end
    
    features = np.linalg.norm(x.reshape(-1, 16), axis=0)
    cough = int(np.mean(features)>0.8)
        
    for i in range(12):
        sys.stdout.write('\x1b[1A')
        sys.stdout.write('\x1b[2K')

    plt.clf()
    plt.plot(np.linalg.norm(x.reshape(-1, 16), axis=0))
    plt.plotsize(64, 10)
    plt.canvas_color("black")
    plt.axes_color("black")
    plt.ticks_color("white")
    plt.ylim(0, 5)         
    plt.show()
    print("Time: " + str(t) + " | Buffer: " + str(end) + " | Cough: " + str(cough))
    
    write_file(t, cough)
    
    
def print_sound(indata, frames, time, status):
    global end
    global buffer
    global windowsize
    global cough
    global tend
    global Fs
    
    buffer[end:end+frames] = indata[:,0]
    tend = datetime.datetime.now()
    end = end + frames
    if end>=windowsize:
        x = buffer[0:windowsize]
        t = tend - datetime.timedelta(seconds=int((end-windowsize)/Fs))
        
        buffer[0:end-windowsize] = buffer[windowsize:end]
        end = end - windowsize

        classify_window(t, x)
        
        
with sd.InputStream(callback=print_sound):
    while(True):
        sd.sleep(1000)
    




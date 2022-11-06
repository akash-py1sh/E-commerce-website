import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import warnings
warnings.filterwarnings("ignore")
from ipywidgets import interact
df = pd.read_csv("data.csv")

print(df['label'].value_counts().index)






@interact
def compare(conditions = ['N']):
    print("Rice : {0:.2f}".format(df[(df['label'] == 'rice')][conditions].max()))
    print("Rice : {0:.2f}".format(df[(df['label'] == 'rice')][conditions].min()))
    print("Black grams : {0:.2f}".format(df[(df['label'] == 'blackgram')][conditions].max()))
    print("Black grams : {0:.2f}".format(df[(df['label'] == 'blackgram')][conditions].min()))
    print("Banana : {0:.2f}".format(df[(df['label'] == 'banana')][conditions].max()))
    print("Banana : {0:.2f}".format(df[(df['label'] == 'banana')][conditions].min()))
    print("Jute : {0:.2f}".format(df[(df['label'] == 'jute')][conditions].max()))
    print("Jute : {0:.2f}".format(df[(df['label'] == 'jute')][conditions].min()))
    print("Coconut : {0:.2f}".format(df[(df['label'] == 'coconut')][conditions].mean()))
    print("Apple : {0:.2f}".format(df[(df['label'] == 'apple')][conditions].mean()))
    print("Papaya : {0:.2f}".format(df[(df['label'] == 'papaya')][conditions].mean()))
    print("Muskmelon : {0:.2f}".format(df[(df['label'] == 'muskmelon')][conditions].mean()))
    print("Grapes : {0:.2f}".format(df[(df['label'] == 'grapes')][conditions].mean()))
    print("Watermelon : {0:.2f}".format(df[(df['label'] == 'watermelon')][conditions].mean()))
    print("Kidney Beans : {0:.2f}".format(df[(df['label'] == 'kidneybeans')][conditions].mean()))
    print("Mung Beans : {0:.2f}".format(df[(df['label'] == 'mungbean')][conditions].mean()))
    print("Oranges : {0:.2f}".format(df[(df['label'] == 'orange')][conditions].mean()))
    print("Chick Peas : {0:.2f}".format(df[(df['label'] == 'chickpea')][conditions].mean()))
    print("Lentils : {0:.2f}".format(df[(df['label'] == 'lentil')][conditions].mean()))
    print("Cotton : {0:.2f}".format(df[(df['label'] == 'cotton')][conditions].mean()))
    print("Maize : {0:.2f}".format(df[(df['label'] == 'maize')][conditions].mean()))
    print("Moth Beans : {0:.2f}".format(df[(df['label'] == 'mothbeans')][conditions].mean()))
    print("Pigeon Peas : {0:.2f}".format(df[(df['label'] == 'pigeonpeas')][conditions].mean()))
    print("Mango : {0:.2f}".format(df[(df['label'] == 'mango')][conditions].mean()))
    print("Pomegranate : {0:.2f}".format(df[(df['label'] == 'pomegranate')][conditions].mean()))
    print("Coffee : {0:.2f}".format(df[(df['label'] == 'coffee')][conditions].mean()))
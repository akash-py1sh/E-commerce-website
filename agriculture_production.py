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
def summary(crops=list(df['label'].value_counts().index)):
    x = df[df['label'] == crops]
    print("Statistics of Nitrogen")
    print("Min of Nitogen", x['N'].min())
    print("Mean of Nitogen", x['N'].mean())
    print("Max of Nitogen", x['N'].max())

    print("Statistics of Potasium")
    print("Min of Potasium", x['P'].min())
    print("Mean of Potasium", x['P'].mean())
    print("Max of Potasium ", x['P'].max())

    print("Statistics of Phosphorus")
    print("Min of Phosphorus", x['K'].min())
    print("Mean of Phosphorus", x['K'].mean())
    print("Max of Phosphorus", x['K'].max())

    print("Statistics of temperature")
    print("Min of temperature", x['temperature'].min())
    print("Mean of temperature", x['temperature'].mean())
    print("Max of temperature", x['temperature'].max())

    print("Statistics of humidity")
    print("Min of humidity", x['humidity'].min())
    print("Mean of humidity", x['humidity'].mean())
    print("Max of humidity", x['humidity'].max())

    print("Statistics of ph")
    print("Min of ph", x['ph'].min())
    print("Mean of ph", x['ph'].mean())
    print("Max of ph", x['ph'].max())

    print("Statistics of rainfall")
    print("Min of rainfall", x['rainfall'].min())
    print("Mean of rainfall", x['rainfall'].mean())
    print("Max of rainfall", x['rainfall'].max())

    print("Statistics of rainfall")
    print("Min of rainfall", x['rainfall'].min())
    print("Mean of rainfall", x['rainfall'].mean())
    print("Max of rainfall", x['rainfall'].max())

print("Crops that require very heigh ratio of nitrogen content int soil",df[df['N']>120]['label'].unique())
print("Crops that require very heigh ratio of phosphorus content int soil",df[df['K']>200]['label'].unique())
print("Crops that require very heigh ratio of potasium content int soil",df[df['P']>100]['label'].unique())
print("Crops that require very heigh ratio of rainfall content int soil",df[df['rainfall']>200]['label'].unique())
print("Crops that require very heigh ratio of temperature content int soil",df[df['temperature']<10]['label'].unique())
print("Crops that require very heigh ratio of temperature content int soil",df[df['temperature']>35]['label'].unique())
print("Crops that require very heigh ratio of humidity content int soil",df[df['humidity']>200]['label'].unique())

@interact
def compare(conditions = ['N', 'P', 'K', 'temperature', 'ph', 'humidity', 'rainfall']):
    print("Average Value for", conditions, "is {0:.2f}".format(df[conditions].mean()))
    print("...........................................")
    print("Rice : {0:.2f}".format(df[(df['label'] == 'rice')][conditions].mean()))
    print("Black grams : {0:.2f}".format(df[(df['label'] == 'blackgram')][conditions].mean()))
    print("Banana : {0:.2f}".format(df[(df['label'] == 'banana')][conditions].mean()))
    print("Jute : {0:.2f}".format(df[(df['label'] == 'jute')][conditions].mean()))
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

    @interact
    def compare(conditions = ['N', 'P', 'K', 'temperature', 'ph', 'humidity', 'rainfall']):
     print("Crops that require greater than average", conditions, '\n')
     print(df[df[conditions] > df[conditions].mean()]['label'].unique())
     print("...........................................")
     print("Crops that require less than average", conditions, '\n')
     print(df[df[conditions] <= df[conditions].mean()]['label'].unique())

     
print("Summer Crops")
print(df[(df['temperature'] > 30) & (df['humidity'] > 50)]['label'].unique())
print("...........................................")
print("Winter Crops")
print(df[(df['temperature'] < 20) & (df['humidity'] > 30)]['label'].unique())
print("...........................................")
print("Monsoon Crops")
print(df[(df['rainfall'] > 200) & (df['humidity'] > 30)]['label'].unique())

y = df['label']
x = df.drop(['label'], axis=1)


x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.2, random_state = 0)

model = LogisticRegression()
model.fit(x_train, y_train)

arr=np.array([[50, 80, 90, 10, 90, 67, 100]])

prediction = model.predict(arr)

print("Prediction of crop",prediction)

# mn = df["N"].mean()
# print("Mean of N=", mn)
# mn = df["P"].mean()
# print("Mean of p=", mn)
# mn = df["K"].mean()
# print("Mean of K=", mn)

# mn = df["temperature"].mean()
# print("Mean of temperature=", mn)

# mn = df["humidity"].mean()
# print("Mean of humidity=", mn)
# mn = df["ph"].mean()
# print("Mean of ph=", mn)
# mn = df["rainfall"].mean()
# print("Mean of rainfall=", mn)
plt.subplot(3,4,1)
sns.histplot(df['N'], color="yellow")
plt.xlabel('Nitrogen', fontsize = 12)
plt.grid()

plt.subplot(3,4,2)
sns.histplot(df['P'], color="orange")
plt.xlabel('Phosphorous', fontsize = 12)
plt.grid()

plt.subplot(3,4,3)
sns.histplot(df['K'], color="darkblue")
plt.xlabel('Pottasium', fontsize = 12)
plt.grid()

plt.subplot(3,4,4)
sns.histplot(df['temperature'], color="black")
plt.xlabel('Temperature', fontsize = 12)
plt.grid()

plt.subplot(2,4,5)
sns.histplot(df['rainfall'], color="grey")
plt.xlabel('Rainfall', fontsize = 12)
plt.grid()

plt.subplot(2,4,6)
sns.histplot(df['humidity'], color="lightgreen")
plt.xlabel('Humidity', fontsize = 12)
plt.grid()

plt.subplot(2,4,7)
sns.histplot(df['ph'], color="darkgreen")
plt.xlabel('PH Level', fontsize = 12)
plt.grid()

plt.suptitle('Distribution for Agricultural Conditions', fontsize = 20)
plt.show()

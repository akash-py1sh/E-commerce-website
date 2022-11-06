import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

from ipywidgets import interact
df = pd.read_csv("data.csv")

print(df.isnull().sum())
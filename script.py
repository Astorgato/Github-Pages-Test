# Voy a crear un estructura de proyecto de ejemplo y algunos datasets de muestra
# para usar en el portafolio que vamos a crear

import pandas as pd
import numpy as np
import json

# Crear estructura de datasets de ejemplo para proyectos
np.random.seed(42)

# 1. Dataset de precios de casas (ejemplo)
n_houses = 1000
house_data = {
    'area_m2': np.random.normal(120, 30, n_houses),
    'habitaciones': np.random.randint(1, 6, n_houses),
    'antiguedad': np.random.randint(0, 50, n_houses),
    'ubicacion': np.random.choice(['Centro', 'Residencial', 'Periferia'], n_houses, p=[0.3, 0.5, 0.2]),
    'precio': np.random.normal(250000, 80000, n_houses)
}

# Ajustar precios según características realistas
for i in range(n_houses):
    base_price = 200000
    base_price += house_data['area_m2'][i] * 1500  # €1500 por m2
    base_price += house_data['habitaciones'][i] * 15000  # €15k por habitación
    base_price -= house_data['antiguedad'][i] * 1000  # -€1k por año
    
    if house_data['ubicacion'][i] == 'Centro':
        base_price *= 1.3
    elif house_data['ubicacion'][i] == 'Periferia':
        base_price *= 0.8
        
    house_data['precio'][i] = base_price + np.random.normal(0, 20000)

house_df = pd.DataFrame(house_data)
house_df['precio'] = house_df['precio'].round(0).astype(int)
house_df['area_m2'] = house_df['area_m2'].round(1)

print("Dataset de precios de casas creado:")
print(house_df.head())
print(f"\nForma del dataset: {house_df.shape}")

# 2. Dataset de sentimientos de redes sociales (ejemplo)
n_posts = 500
social_data = {
    'texto': [
        "Me encanta este producto, excelente calidad",
        "Servicio terrible, muy decepcionado",
        "Producto regular, nada especial",
        "¡Increíble! Lo recomiendo totalmente",
        "No vale la pena el precio"
    ] * 100,
    'sentimiento': np.random.choice(['Positivo', 'Negativo', 'Neutral'], n_posts, p=[0.4, 0.3, 0.3]),
    'likes': np.random.poisson(10, n_posts),
    'shares': np.random.poisson(3, n_posts),
    'fecha': pd.date_range('2023-01-01', periods=n_posts, freq='H')
}

social_df = pd.DataFrame(social_data)
print("\n\nDataset de análisis de sentimientos creado:")
print(social_df.head())
print(f"Forma del dataset: {social_df.shape}")

# 3. Dataset de clasificación de clientes (ejemplo)
n_customers = 800
customer_data = {
    'edad': np.random.randint(18, 80, n_customers),
    'ingresos_anuales': np.random.normal(45000, 15000, n_customers),
    'gastos_mensuales': np.random.normal(2000, 800, n_customers),
    'categoria_cliente': np.random.choice(['Bronze', 'Silver', 'Gold', 'Platinum'], n_customers, p=[0.4, 0.3, 0.2, 0.1])
}

customer_df = pd.DataFrame(customer_data)
customer_df['ingresos_anuales'] = customer_df['ingresos_anuales'].round(0).astype(int)
customer_df['gastos_mensuales'] = customer_df['gastos_mensuales'].round(0).astype(int)

print("\n\nDataset de segmentación de clientes creado:")
print(customer_df.head())
print(f"Forma del dataset: {customer_df.shape}")

# Guardar los datasets
house_df.to_csv('dataset_precios_casas.csv', index=False)
social_df.to_csv('dataset_sentimientos.csv', index=False)
customer_df.to_csv('dataset_clientes.csv', index=False)

print("\n\n✅ Datasets guardados exitosamente:")
print("- dataset_precios_casas.csv")
print("- dataset_sentimientos.csv") 
print("- dataset_clientes.csv")
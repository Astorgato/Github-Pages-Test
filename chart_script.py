import plotly.graph_objects as go
import pandas as pd

# Data for the chart
data = {
    "plataformas": ["GitHub Pages", "Kaggle", "Netlify", "Personal Website", "Medium"],
    "facilidad_uso": [8, 9, 7, 5, 9],
    "costo": [10, 10, 8, 3, 7],
    "profesionalismo": [8, 6, 9, 10, 7],
    "funcionalidades": [7, 8, 9, 10, 6]
}

# Create DataFrame
df = pd.DataFrame(data)

# Brand colors (using first 4 colors for the 4 characteristics)
colors = ['#1FB8CD', '#DB4545', '#2E8B57', '#5D878F']

# Create grouped bar chart
fig = go.Figure()

# Add bars for each characteristic
characteristics = ['facilidad_uso', 'costo', 'profesionalismo', 'funcionalidades']
char_labels = ['Ease of Use', 'Cost', 'Professional', 'Features']

for i, (char, label) in enumerate(zip(characteristics, char_labels)):
    fig.add_trace(go.Bar(
        name=label,
        x=df['plataformas'],
        y=df[char],
        marker_color=colors[i],
        hovertemplate='<b>%{x}</b><br>' + label + ': %{y}<extra></extra>'
    ))

# Update layout
fig.update_layout(
    title='Data Portfolio Platform Comparison',
    xaxis_title='Platforms',
    yaxis_title='Score (1-10)',
    barmode='group',
    legend=dict(orientation='h', yanchor='bottom', y=1.05, xanchor='center', x=0.5)
)

# Update traces
fig.update_traces(cliponaxis=False)

# Update y-axis to show full range
fig.update_yaxes(range=[0, 10])

# Save as PNG and SVG
fig.write_image("portfolio_platforms.png")
fig.write_image("portfolio_platforms.svg", format="svg")

fig.show()
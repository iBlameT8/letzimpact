#!/usr/bin/env python3
import matplotlib.pyplot as plt
import numpy as np

# Data
months = ["Dez 25", "Jan 26", "Feb 26", "Mrz 26", "Apr 26", "Mai 26"]
editus = [3931, 3785, 3016, 1770, 3682, 3398]
bighouse = [467, 0, 622, 234, 269, 164]
neoagency = [126, 0, 456, 1841, 1981, 299]
hype = [0, 402, 969, 360, 0, 0]

# Styling
plt.style.use('dark_background')
fig, ax = plt.subplots(figsize=(10, 6), dpi=300)

# Colors matching LëtzImpact theme (Neon dark)
# #EC12D8 (Neon Pink), #4CC9F0 (Neon Blue), #A250E3 (Neon Purple), #FFB703 (Orange)
colors = ["#4CC9F0", "#FFB703", "#A250E3", "#EC12D8"]

# Plotting lines with markers
ax.plot(months, editus, marker='o', linewidth=2.5, color=colors[0], label="Editus Business (editus-business.lu)")
ax.plot(months, bighouse, marker='s', linewidth=2, color=colors[1], label="Big House Marketing (bighousemarketing.lu)")
ax.plot(months, neoagency, marker='^', linewidth=2, color=colors[2], label="NEO Agency (neoagency.lu)")
ax.plot(months, hype, marker='d', linewidth=2, color=colors[3], label="HYPE Luxembourg (hype.lu)")

# Grid and styling
ax.grid(True, linestyle='--', alpha=0.2, color='#EDEAF1')
ax.set_title("Wettbewerber Website-Traffic (Total Visits)", fontsize=16, fontweight='bold', pad=20, color='#EDEAF1', fontname="sans-serif")
ax.set_ylabel("Monatliche Gesamtaufrufe (SimilarWeb Schätzung)", fontsize=12, labelpad=15, color='#EDEAF1')
ax.set_xlabel("Monat", fontsize=12, labelpad=15, color='#EDEAF1')

# Customizing ticks and borders
ax.tick_params(colors='#EDEAF1', labelsize=10)
for spine in ax.spines.values():
    spine.set_color('#EDEAF1')
    spine.set_alpha(0.3)

# Legend
ax.legend(loc="upper right", frameon=True, facecolor="#07060B", edgecolor="#EDEAF1", framealpha=0.1, fontsize=10)

# Annotation for Editus as market leader
ax.annotate('Marktführer (Editus)', xy=("Dez 25", 3931), xytext=("Jan 26", 4100),
            arrowprops=dict(facecolor='#4CC9F0', shrink=0.05, width=1, headwidth=6),
            fontsize=9, color='#4CC9F0', fontweight='bold')

plt.tight_layout()
output_path = "/home/ubuntu/letzimpact/competitor_traffic_comparison.png"
plt.savefig(output_path, facecolor="#07060B", edgecolor='none')
print("Plot saved to:", output_path)

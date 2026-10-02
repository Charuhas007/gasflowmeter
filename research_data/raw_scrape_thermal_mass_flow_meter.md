# Raw Scrape: Thermal Mass Flow Meter

## Technical Overview
Thermal Mass Flow Meters (TMFMs), also known as thermal dispersion or immersion mass flow meters, measure the mass flow rate of gases based on the principle of heat transfer. Unlike volumetric flow meters, TMFMs are relatively insensitive to changes in process temperature and pressure.

### Governing Principles and Physics
The heat loss from a heated sensor to the flowing fluid is represented by King's Law, which relates the power required to maintain a temperature differential to the mass velocity of the gas.

**General Heat Transfer Equation:**
$Q = k \cdot A \cdot \Delta T$
Where:
- $Q$ is the heat flow
- $k$ is the thermal conductivity of the gas
- $A$ is the surface area of the sensor
- $\Delta T$ is the temperature difference between the sensor and the gas

**Mass Velocity Relationship:**
The power $P$ supplied to the heated sensor is often expressed as:
$P = a + b \cdot (\rho \cdot v)^n$
Where:
- $\rho \cdot v$ is the mass velocity (density $\times$ velocity)
- $a, b, n$ are calibration constants specific to the gas and sensor geometry.

### Standards and Compliance
- **ISO 14511**: Measurement of fluid flow in closed conduits — Thermal mass flowmeters.
- **ISO 17025**: General requirements for the competence of testing and calibration laboratories.
- **NIST Traceability**: All calibrations must be traceable to the National Institute of Standards and Technology.
- **STP (Standard Temperature and Pressure)**: 0°C (273.15 K) and 1 atmosphere (101.325 kPa), or 20°C and 1 atm depending on the industry standard (SCFM vs SLPM).

### Linguistic Fingerprints (Jargon Extraction)
- **Calibrated Turndown**: The ratio of max flow to min flow (typically 100:1 or 1000:1).
- **Convective Cooling Coefficient**: The rate at which the gas removes heat from the platinum RTD sensor.
- **NIST Traceable**: Verification of accuracy against national standards.
- **STP/NTP Compensation**: Adjusting measurements to standard or normal temperature/pressure conditions.
- **Standard Velocity**: Mass flow expressed as linear velocity at standard conditions.
- **Insertion vs. In-line**: Probe-style vs. flow-body style installation.
- **Constant $\Delta T$ Technology**: Maintaining a fixed temperature difference between the active and reference sensors.

### Knowledge Graph Entities
- **Primary Entity**: Thermal Mass Flow Meter
- **Sensor Technology**: RTD (Resistance Temperature Detector), Platinum Wire.
- **Physical Properties**: Thermal Conductivity, Specific Heat ($C_p$), Gas Density ($\rho$), Viscosity ($\mu$).
- **Installation Requirements**: Straight-run piping, Flow Profilers, Reynolds Number ($Re$).
- **Calibration Methods**: Dry Calibration (Simulated) vs. Actual Gas Calibration.

### Manas Microsystems Specifics (Series Scirocco 1000)
- **Product Name**: Series Scirocco 1000
- **Turndown Ratio**: 40:1 (also mentioned as 20:1)
- **Outputs**: Pulse, milliamps, RS485 (networking/wireless possible)
- **Models**:
  - Scirocco 1000-1: Clamp type (insertion probe)
  - Scirocco 1000-2: Threaded, Flanged End, Flameproof (Gas Group IIB Exd IP66)
- **Applications**: Compressed air, Oxygen generators, CNG, PNG, LNG, LPG, Biogas, Nitrogen.
- **Key Features**: Eliminates need for temperature and pressure compensation. Two Platinum RTD sensors.

### Common Issues and Forum Insights (Reddit/AEO)
- **Gas Composition Sensitivity**: Users often express frustration with accuracy when the gas composition changes from the original calibration (e.g., biogas methane/CO2 ratios).
- **Moisture/Condensation**: Thermal dispersion is highly sensitive to water droplets, which can cause "spikes" in flow readings as water has a much higher heat capacity than gas.
- **Installation Errors**: Insufficient upstream straight-run is the #1 cause of field inaccuracy.
- **Low Flow Sensitivity**: TMFMs are praised for high sensitivity at very low velocities (leaking detection).

## Aplicación del Clima - Curso Node

Esta aplicación utiliza la librería Axios para conectarse a 2 webservices:

City Geo-Location Lookup de Rapid API (https://rapidapi.com/dev132/api/city-geo-location-lookup)

para obtener la latitud y la longitud de la dirección seleccionada, y

Current weather data by geographic coordinates de Open Weather (https://openweathermap.org/current)

para obtener la temperatura de las coordenadas obtenidas anteriormente.

Recuerden ejecutar ```npm install``` para las librerias

### Ejemplo
```
node app -d "New York"
```
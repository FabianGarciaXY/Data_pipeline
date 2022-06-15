# **Prueba técnica: Data pipeline :star2:**

*Prueba tecnica como parte del proceso para desarrollador Backend con Scala en Ankor.* :man_technologist:

---

## Indice
* [Descripción y requerimientos](#id0)
* [Diseño del proyecto](#id1)
  * [Dependencias y tecnologías](#id1.1)
  * [Diagrama de solución](#id1.2)
  * [Diseño de backend y endpoints](#id1.3)
  * [Obtencion de ubicaciones](#id1.4)
* [Instalacion y ejecución](#id2)
* [Demo](#id3)

---

## Descripción <a id="id0"></a>

<p>
Se solicitó desarrollar un pipeline de análisis de datos utilizando los datos abiertos de la Ciudad de México
correspondientes a las ubicaciones de las unidades del metrobús para que pueda ser
consultado mediante un API Rest filtrando por unidad o por alcaldía con las siguientes consideraciones:
</p>

* *Obtener una lista de unidades disponibles*
* *Consultar la ubicación de una unidad dado su ID*
* *Obtener una lista de alcaldías disponibles*
* *Obtener la lista de unidades que se encuentren dentro de una alcaldía*

---

## Diseño del proyecto <a id="id1"></a> :writing_hand:

Para la solución del problema se realizo un diseño del flujo de datos obtenidos desde los datos abiertos de metrobuses de CDMX para que finalmente puedan ser expuestos mediante un API. <br><br>

**Dependencias y tecnologías** <a id="id1.1"></a>
* *Node.JS*
* *Postgres*
* *Express*
* *Docker*
* *Pg*
* *Geocoder*
* *Axios*
* *Jest*
* *Sequelize*

<br>

**Diagrama de solución** <a id="id1.2"></a>

![Diagram](./src/assets/diagram.png)

<br>

**Diseño de backend y endpoints** <a id="id1.3"></a>

```mermaid
graph TD

    A1(( METROBUSES API ))--Feth-data-->B1{{ READER }}
    A2((GOOGLE GEOCODER))--Reverse geocoding-->B1
    B1-->D1(MODEL)
    D1-->F1[(POSTGRES METROBUSES_DB)]

    F1--> | Queryng | G1([CONTROLLER])
    G1 ---> |Endpoints| H1([ROUTER])
    H1 --> I1{SERVER}
    I1 --> |Get|-E1{{/Metrobuses}}
    I1 --> |Get|-E2{{/Metrubuses/id}}
    I1 --> |Get|-E3{{/Alcaldias}}
    I1 --> |Get|-E4{{/Alcaldias/nombre}}
```


<br>


**Obtención de ubicaciones** <a id="id1.4"></a>


<br>

---

## Instalacion y Ejecución <a id="id2"></a>

Para desplegar el servicio se requiere unicamente contar con docker y docker compose y ejecutar la siguiente serie de pasos:

1. Primero
2. Segundo
3. Tercero

<br>

---

## Demo <a id="id3"></a>

Obtener una lista de unidades disponibles

![gif1]()<br><br>

Consultar la ubicación de una unidad dado su ID

![gif2]()<br><br>

Obtener una lista de alcaldías disponibles

![gif3]()<br><br>

Obtener la lista de unidades que se encuentren dentro de una alcaldía

![gif4]()<br><br>

---

<br><br>
Licencia ISC
Gracias, :p

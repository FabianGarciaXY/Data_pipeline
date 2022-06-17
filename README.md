# **Prueba técnica: Data pipeline :star2:**

*Prueba tecnica como parte del proceso para desarrollador Backend con Scala en Ankor.* :man_technologist:

---

## Indice
* [Descripción y requerimientos](#id0)
* [Diseño del proyecto](#id1)
  * [Dependencias y tecnologías](#id1.1)
  * [Diagrama de solución](#id1.2)
  * [Diseño de backend y endpoints](#id1.3)
* [Instalacion y ejecución](#id2)
* [Demo](#id3)

---

## Descripción :pencil:<a id="id0"></a>

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

## Diseño del proyecto :art:<a id="id1"></a>

Para la solución del problema se realizo un diseño del flujo de datos obtenidos desde los datos abiertos de metrobuses de CDMX para que finalmente puedan ser expuestos mediante un API. <br><br>

**Stack y dependencias** <a id="id1.1"></a>
* *[Node.JS](https://nodejs.org/en/)*
* *[Postgres](https://www.postgresql.org/)*
* *[Express](https://expressjs.com/)*
* *[Docker](https://www.docker.com/)*
* *[Pg(Node-Postgres)](https://node-postgres.com/)*
* *[Geocoder](https://www.npmjs.com/package/geocoder)*
* *[Axios](https://axios-http.com/docs/intro)*
* *[Jest](https://jestjs.io/)*
* *[Dotenv](https://www.npmjs.com/package/dotenv)*
* *[Sequelize](https://sequelize.org/)*

<br>

**Diagrama de solución** <a id="id1.2"></a>

![Diagram](./src/assets/diagram.png)

<br>

**Diseño de backend y endpoints** <a id="id1.3"></a>

```mermaid
graph TD

    %% Metrobuses a Reader
    A1(("METROBUSES <br> API"))--Feth-data-->B1(["READER <br> SCRIPT"])
    %% Geocoder a Reader
    A2(("GOOGLE <br> GEOCODER <br> API"))--Delegation-->D1
    %% Reader a Geocoder
    B1--"Reverse <br> Geocoding"-->A2
    %% Reader a Model
    B1--"Vehicles data"-->D1("DATA MODEL")
    

    %% Database
    D1--"Saving data"-->F1[(" <br>POSTGRES <br>METROBUSES DATABASE <br>")]
    
    %% Controllers
    F1--"Vehicles queries"----G1(DELEGATIONS <br> CONTROLLER)
    F1--"Delegation queries"----G2(VEHICLES <br> CONTROLLER)

    G2 --"Endpoints"-->I1
    G1 --"Endpoints"--> I1{API <br> ROUTER}

    %% Endpoints
    I1 --> |Get|-E1([/Metrobuses])
    I1 --> |Get|-E2([/Metrubuses/:id])
    I1 --> |Get|-E3([/Alcaldias])
    I1 --> |Get|-E4(["/Alcaldias/:nombre"])
```

<br>

---

## Instalacion y Ejecución :wrench:<a id="id2"></a>

Para desplegar el servicio se requiere unicamente contar con docker y docker compose y ejecutar la siguiente serie de pasos:

1. Primero
2. Segundo
3. Tercero

<br>

---

## Demo :computer:<a id="id3"></a>

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

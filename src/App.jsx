import './App.css'

function App() {
  return (
    <div className="App">
      <h1>¿Qué es el Modelo OSI? Funcionamiento y sus capas</h1>
      <p className="descripcion">
        En este documento hablaremos del modelo OSI, sus funciones y las características de cada una de sus 7 capas.
      </p>
      <hr className="linea-divisora" />

      <div className="contenido">
        <div className="blog-body_toc">
          <div className="blog-body_toc_title">Tabla de Contenidos</div>
          <div className="link"><a href="#introduccion">Introducción</a></div>
          <div className="link"><a href="#capa1">Capa N.°1: Física</a></div>
          <div className="link"><a href="#capa2">Capa N.°2: Enlace de datos</a></div>
          <div className="link"><a href="#capa3">Capa N.°3: Red</a></div>
          <div className="link"><a href="#capa4">Capa N.°4: Transporte</a></div>
          <div className="link"><a href="#capa5">Capa N.°5: Sesión</a></div>
          <div className="link"><a href="#capa6">Capa N.°6: Presentación</a></div>
          <div className="link"><a href="#capa7">Capa N.°7: Aplicación</a></div>
        </div>

    <div className="informacion">
      <div className="introduccion">
        <h2>Introducción</h2>
        <p>El modelo de Open Systems Interconnection (OSI), desarrollado por la Organización Internacional para la Normalización (ISO), fue creado para establecer estándares que permitieran la comunicación abierta entre diferentes sistemas técnicos. En los inicios de Internet, los fabricantes de tecnología de redes se enfrentaban al problema de que sus dispositivos solo podían conectarse a través de redes privadas, sin seguir estándares comunes. El protocolo OSI surgió como un intento de normalización para permitir la comunicación entre sistemas heterogéneos.
        El modelo OSI divide el proceso de comunicación en red en siete capas, cada una con tareas específicas, como el control de la comunicación, la dirección del sistema de destino y la traducción de datos a señales físicas. Sin embargo, para que este método funcione correctamente, todos los sistemas involucrados deben cumplir con las reglas establecidas en los protocolos correspondientes a cada capa. Estos protocolos son reglas y procedimientos que gobiernan la comunicación en cada nivel del modelo OSI, asegurando la interoperabilidad entre diferentes sistemas.
        </p>
      </div>
    
      <div id="capa1">
        <h2>Capa 1: Física</h2>
        <p>En la capa física se efectúa la transformación de los bits de un paquete de datos en una señal física adecuada para un medio de transmisión. Solo esta puede transferirse a través de un medio como hilo de cobre, fibra de vidrio o aire. La interfaz para el medio de transmisión se define por medio de protocolos o normas como DSL, ISDN, Bluetooth, USB (capa física) o Ethernet (capa física).</p>
        <img src="/CAPA1.png" alt="Capa 1: Física" />
      </div>
    
      <div id="capa2">
        <h2>Capa 2: Enlace de datos</h2>
        <p>En la capa de seguridad, las funciones como reconocimiento de errores, eliminación de errores y control del flujo de datos se encargan de evitar que se produzcan errores de comunicación. El paquete de datos se sitúa, junto a los encabezados de aplicación, presentación, sesión, transporte y red, en el marco del encabezado de enlace de datos y de la trama de enlace de datos. Además, en la capa 2 tiene lugar el direccionamiento de hardware y, asimismo, entran en acción las direcciones MAC. El acceso al medio está regulado por protocolos como Ethernet o PPP.</p>
        <img src="/CAPA2.png" alt="Capa 2: Enlace de datos" />
      </div>
    
      <div id="capa3">
        <h2>Capa 3: Red</h2>
        <p>Con la capa de mediación la transferencia de datos llega a Internet. Aquí se realiza el direccionamiento lógico del equipo terminal, al que se le asigna una dirección IP. Al paquete de datos, como los datos del correo electrónico del ejemplo, se le añadirá un encabezado de red en el estadio 3 del modelo OSI, que contiene información sobre la asignación de rutas y el control del flujo de datos. Aquí, los sistemas informáticos recurren a normas de Internet como IP, ICMP, X.25, RIP u OSPF. En lo relativo al tráfico de correo electrónico, se suele utilizar más TCP que IP.</p>
        <img src="/CAPA3.png" alt="Capa 3: Red" />
      </div>
    
      <div id="capa4">
        <h2>Capa 4: Transporte</h2>
        <p>La capa de transporte opera como vínculo entre las capas de aplicaciones y las orientadas al transporte. En este nivel del modelo OSI se lleva a cabo la conexión lógica de extremo a extremo (el canal de transmisión) entre los sistemas en la comunicación. Para ello, también se tiene que añadir cierta información en los datos del correo electrónico. El paquete de datos que ya se amplió para el encabezado de las capas orientadas a las aplicaciones se complementa en la capa 4 con un encabezado de transporte. En ello entran en juego protocolos de red estandarizados como TCP o UDP (User Datagram Protocol). Además, en la capa de transporte también se definen los puertos a través de los cuales las aplicaciones pueden dirigirse al sistema de destino. Asimismo, en la capa 4 también tiene lugar la asignación de un determinado paquete de datos a una aplicación.</p>
        <img src="/CAPA4.png" alt="Capa 4: Transporte" />
      </div>
    
      <div id="capa5">
        <h2>Capa 5: Sesión</h2>
        <p>Esta capa tiene la misión de organizar la conexión entre ambos sistemas finales, por lo que también recibe el nombre de capa de comunicación. En ella se incluyen los mecanismos especiales de gestión y control que regulan el establecimiento de la conexión, su mantenimiento y su interrupción. Para controlar la comunicación se necesitan unos datos adicionales que se deben añadir a los datos del correo electrónico transmitidos a través del encabezado de la sesión. La mayoría de protocolos de aplicación actuales como SMTP o FTP se ocupan ellos mismos de las sesiones o, como HTTP, son protocolos sin estado. El modelo TCP/IP, en calidad de competidor del modelo OSI, agrupa las capas OSI 5, 6 o 7 en una capa de aplicación. NetBIOS, Socks y RPC son otras de las especificaciones que recoge la capa 5. </p>
        <img src="/CAPA5.png" alt="Capa 5: Sesión" />
      </div>
    
      <div id="capa6">
        <h2>Capa 6: Presentación</h2>
        <p>Una de las tareas esenciales de la comunicación en red es garantizar el envío de datos en formatos estándar. En la capa de presentación, los datos se transportan localmente en formato estandarizados. En el caso de la transmisión de un correo electrónico, en esta capa se define el modo en que se tiene que presentar el mensaje. Para ello, el paquete de datos se completa para que se cree un encabezado de presentación que contiene los datos acerca de cómo se ha codificado el correo (en España se utiliza normalmente ISO 8859-1 (Latin1) o ISO 8859-15), en qué formato se presentan los archivos adjuntos (p. ej., JPEG o MPEG4) o cómo se han comprimido o cifrado los datos (p. ej., SSL/TLS). De esta manera se puede asegurar que el sistema de destino también ha entendido el formato del correo electrónico y que el mensaje se va a enviar.</p>
        <img src="/CAPA6.png" alt="Capa 6: Presentación" />
      </div>
    
      <div id="capa7">
        <h2>Capa 7: Aplicación</h2>
        <p>Este es el nivel del modelo OSI que está en contacto directo con aplicaciones como programas de correo electrónico o navegadores web y en ella se produce la entrada y salida de datos. Esta capa establece la conexión para los otros niveles y prepara las funciones para las aplicaciones. Este proceso se puede explicar mediante el ejemplo de la transmisión por correo electrónico: un usuario escribe un mensaje en el programa de correo electrónico en su terminal y la capa de aplicación lo acepta en forma de paquete de datos. A los datos del correo electrónico se le adjuntan datos adicionales en forma de encabezado de la aplicación: a esto se le llama también “encapsulamiento”. Este encabezado indica, entre otras cosas, que los datos proceden de un programa de correo electrónico. Aquí también se define el protocolo que se usa en la transmisión del correo electrónico en la capa de aplicación (normalmente el protocolo SMTP).</p>
        <img src="/CAPA7.png" alt="Capa 7: Aplicación" />
      </div>
    </div>
      </div>
    </div>
  )
}

export default App

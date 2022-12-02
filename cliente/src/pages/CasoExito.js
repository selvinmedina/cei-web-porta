import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/CasoExito.css';
export const CasoExito = () => {
    
    const param = useParams()

    console.log(param)

    return (
        <div className='caso-container'>
            
            <div className='caso-body'>
                <div className='caso-text'>
                    <h2 className='caso-text--title'>Los hermanos Nazar: Sampedranos disruptivos haciendo historia</h2>
                    <p className='caso-text--paragraph'>
                    Bryan Nazar (CEO/director ejecutivo), Mario Nazar (CMO/director de marketing),  y Wendell Nazar (CTO/director de tecnología), son los fundadores y creadores  de CloudBiz, software dirigido a micro, pequeñas y medianas empresas que comercializan un servicio o un producto terminado, y ofrece suscripciones mensuales desde: US$45/mes hasta paquetes platimun para uso de 24 usuarios dentro de la misma empresa.
                    </p>
                    <p className='caso-text--paragraph'>
                    Los hermanos Nazar que han sido egresados y uno todavía es estudiante de CEUTEC San Pedro Sula, comenzaron su viaje como emprendedores y fundadores de CloudBiz al estar trabajando en la agencia de marketing digital de sus papás, ya que se enfrentaban continuamente con el problema del papeleo físico y en Excel para llevar las facturas y cuentas por cobrar de dicha empresa. Fue entonces que nació la idea de crear un programa (Software As A Service) innovador en nuestra región para control en la facturación, inventarios, KPIs y contabilidad de las PYMES, funcionando las veinticuatro horas del día, los siete días de la semana, ¡desde cualquier lugar del mundo!
                    </p>
                    <p className='caso-text--paragraph'>
                    Fue en el año 2017 cuando el hermano mayor, Bryan aplicó (sin mencionarles nada a sus dos socios) al programa de incubación llamado Honduras Digital Challenge (HDC) y fue allí donde su startup despegó de la pista de vuelo para convertirse en lo que ahora conocemos como una de las empresas tecnológicas más reconocidas de Honduras.
                    </p>
                    <p className='caso-text--paragraph'>
                    Después de haber recibido mentorías, capacitaciones y asistencia técnica durante este bootcamp de emprendimiento de HDC, los CloudBizeros (como se autodenominan) logran llevarse el primer lugar dentro de su categoría y reciben un capital semilla de $32, 840, cantidad muy valiosa para unos jóvenes universitarios que apenas estaban desarrollando su primera startup.
                    </p>
                    <p className='caso-text--paragraph'>
                    “Nuestra misión es volvernos en el apoyo más importante para los microempresarios y mejorar radicalmente esa estadística de que el 80% de las Mipymes en Latinoamérica no sobreviven más de cuatro años por llevar una mala administración”, señaló Wendell Nazar, CTO de CloudBiz.
                    </p>

                    <p className='caso-text--paragraph'>
                    Pero para los hermanos Nazar esto apenas comenzaba, ya que luego de haber ganado la primera edición nacional del HDC y un Hackathon organizado por la Municipalidad de San Pedro Sula con su solución Biking, un día recibieron una llamada de Gary Urteaga, uno de los jueces que conocieron del HDC y gracias a su networking, les recomendó participar con una aceleradora holandesa Rockstar Accelerator con sede en Colombia. Fue entonces en el 2018 que la Fintech hondureña CloudBiz califica y se posiciona en el top 10 de los mejores startups de latinoamerica, levantando una inversión de capital de $140,000 durante los seis meses que permanecieron en dicho país sudamericano.
                    </p>
                    <p className='caso-text--paragraph'>
                    Después de haber recibido mentorías de grandes empresarios tecnológicos de América como José Vélez que fundó la empresa Pagosonline (que ahora se conoce como PayU) y en poco tiempo la vendió a Naspers y que ahora es el CEO de otra nueva empresa llamada Bold.com, ahora los hermanos Nazar desarrollan una nueva estrategia de negocios después de haber sido afectados por la pandemia tanto en sus operaciones en Honduras como en Colombia.
                    </p>
                    <p className='caso-text--paragraph'>
                    Hoy en día, CloudBiz tiene grandes empresas en su cartera de clientes como ser la empresa de delivery Hugo, Betcris, Lorenzo Martínez entre otros. Desde sus inicios en el 2017 hasta junio de este 2022, CloudBiz lleva un crecimiento total en sus ingresos de un 283%.
                    </p>
                    <p className='caso-text--paragraph'>
                    “Este año 2022 ha sido positivo para CloudBiz y esperamos cerrar nuestra tracción con un aumento de 30% más comparado al año anterior”, señaló Mario Nazar, Chief Marketing Officer de CloudBiz en la entrevista concedida a Dax Paz del Centro de Emprendimiento e Innovación CEI de CEUTEC SPS.
                    </p>
                    <p className='caso-text--paragraph'>Su actual enfoque de marketing radica en mejorar continuamente en producto para incrementar la tasa de referidos dentro de su embudo de ventas, mayor inversión y presencia en anuncios de Facebook, Google y Youtube; al igual que, presencia de publicidad física en eventos de deportes premium donde el atleta sea empresario/gerente.</p>

                    <p className='caso-text--paragraph'>
                    Desde el Centro de Emprendimiento e Innovación CEI de CEUTEC SPS nos sentimos muy orgullosos de haber sido parte de sus comienzos en la formación académica sobre negocios y estamos seguros que tienen todo el potencial para convertirse en una empresa unicornio colocando a Honduras en el ecosistema de emprendimiento a nivel mundial.
                    </p>

                    <div className='caso-img-container'>
                        <div className='caso-img-content'>
                            <img className='caso-img' src="https://www.imagelato.com/images/article-cover-start-a-food-truck-guide-dceb8393-1024w.jpg" alt='caso de exito imagen'/>
                        </div>
                        <div className='caso-img-content'>
                            <img className='caso-img' src="https://www.imagelato.com/images/article-cover-start-a-food-truck-guide-dceb8393-1024w.jpg" alt='caso de exito imagen'/>
                        </div>
                        <div className='caso-img-content'>
                            <img className='caso-img' src="https://www.imagelato.com/images/article-cover-start-a-food-truck-guide-dceb8393-1024w.jpg" alt='caso de exito imagen'/>
                        </div>
                </div>
                </div>
            </div>

        </div>
    )
}

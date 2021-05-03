function pdfexport() {
    let doc = new jsPDF('p', 'mm', 'a5');

    /**
     * Cabecera 
     */
    //Datos izquierda 
    var logo = new Image();
    logo.src = 'img/cabecera.jpg';
    doc.addImage(logo, 'JPEG', 5, 1, 30, 30);
    
    doc.setFontSize(14);
    doc.setFontType("bold");
    //doc.setTextColor(220, 20, 60);
    doc.text(40, 17, 'Servicio de fluido eléctrico');
    
    doc.setFontSize(8);
    doc.setFontType("bold");
    doc.text(108, 15, 'Municipalidad Distrital');
    doc.setFontSize(8);
    doc.setFontType("bold");
    doc.text(115, 20, 'de Pastaza');

    doc.setFontSize(8);
    doc.setFontType("bold");
    doc.text(10, 35, 'Código');
    doc.setFontSize(10);
    doc.setFontType("bold");
    doc.text(30, 35, '020281');

    doc.setFontSize(8);
    doc.setFontType('bold');
    doc.text(60, 35, 'Usuario');
    doc.setFontSize(10);
    doc.setFontType('normal');
    doc.text(80, 35, 'KATTY GONGORA ARIMUYA');

    doc.setFontSize(8);
    doc.setFontType('bold');
    doc.text(10, 40, 'Calle');
    doc.setFontSize(10);
    doc.setFontType('normal');
    doc.text(30, 40, 'ALIPIO PONCE S/N');

    doc.setFontSize(8);
    doc.setFontType('normal');
    doc.text(10, 45, 'Mes de consumo');
    doc.setFontSize(10);
    doc.setFontType('bold');
    doc.text(35, 45, 'ENERO');

    //   Lador derecha
    doc.setFontSize(10);
    doc.setFontType('bold');
    doc.text(130, 45, '2021');
    /**
     * Cabecera
     */


    /**
     * DATOS DEL USUARIO
     */

    doc.setDrawColor(0);
    doc.setFillColor(234, 234, 234);
    doc.roundedRect(5, 52, 138, 7, 1, 1, 'F');
    doc.setFontSize(10);
    doc.setFontType('bold');
    doc.text(20, 56.8, 'DATOS DEL USUARIO');

    // Cuadro
    doc.rect(5, 60,68, 90);
    doc.rect(75, 60, 68, 90);
    // End cuadro

    // Lado izquierda
    doc.setFontSize(8);
    doc.setFontType('normal');
    doc.text(8, 65, 'Sin medidor');
    doc.text(50, 65, '0');

    doc.text(8, 70, '');
    doc.text(50, 70, '0');

    doc.text(8, 75, 'WATTS');
    doc.setTextColor(220, 20, 60);
    doc.text(50, 75, '18');

    doc.setTextColor(0, 0, 0);
    doc.text(8, 80, 'Diferencia entre Lectura');
    doc.text(50, 80, '18');

    doc.text(8, 85, 'Consuma a Facturar');
    doc.text(50, 85, '18');
    doc.text(55, 85, 'Kw.h');

    doc.text(8, 90, 'Facturción a Facturar S/.');
    doc.text(50, 90, '0.529883');

    // Gráfico
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // end Gráfico

    doc.setFontSize(10);
    doc.setFontType('bold');
    doc.text(8, 130, 'FECHA DE EMISION');
    doc.text(50, 130, '1-2-21');

    doc.text(8, 135, 'ULTIMO DIA DE PAGO');
    doc.text(50, 135, '10-2-21');

    doc.setDrawColor(0);
    doc.setFillColor(255, 210, 131);
    doc.roundedRect(6, 120, 66, 7, 1, 1, 'F');
    doc.text(8, 144.5, 'FECHA DE CORTE');
    doc.text(50, 144.5, '15-feb-21');

    // Lado izquierdo end


    // Lado derecha start
    doc.setFontSize(8);
    doc.setFontType('normal');
    doc.text(78, 65, 'Cargo Fijo Mensual');
    doc.setFontType('bold');
    doc.text(135, 65, '0.01');

    doc.setFontType('normal');
    doc.text(78, 70, 'Cargo por Energia');
    doc.setFontType('bold');
    doc.text(135, 70, '0.05');

    doc.setFontType('normal');
    doc.text(78, 75, 'Mant. de conex y redes');
    doc.setFontType('bold');
    doc.text(135, 75, '0.60');

    doc.setFontType('normal');
    doc.text(78, 80, 'Alumbrado Publico');
    doc.setFontType('bold');
    doc.text(135, 80, '0.02');

    doc.setFontType('normal');
    doc.text(78, 85, 'T.c. congel. y Otros');
    doc.setTextColor(220, 20, 60);
    doc.text(135, 85, '0.00');

    // Sub total

    doc.setDrawColor(0);
    doc.setFillColor(255, 210, 131);
    doc.roundedRect(76, 95, 66, 7, 1, 1, 'F');
    doc.setTextColor(0, 0, 0);
    doc.text(78, 99.5, 'Sub total');
    doc.text(135, 99.5, '0.80');

    // Espacio
    // 
    // 
    // 
    // 
    // 
    // Espacio end
    doc.text(78, 105, 'Int. Moratorio');
    doc.text(130, 105, '0.00*****');

    doc.text(78, 110, 'Descuento');
    doc.text(130, 110, '0.60*****');

    doc.text(78, 115, 'Redondeo');
    doc.setTextColor(220, 20, 60);
    doc.text(130, 115, '0.00*****');

    doc.setDrawColor(0);
    doc.setFillColor(255, 210, 131);
    doc.roundedRect(76, 120, 66, 7, 1, 1, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFontType('bold');
    doc.text(78, 124.5, 'TOTAL FACTURADO');
    doc.text(130, 124.5, '22.00****');

    /**
     * Footer
     */

    doc.setDrawColor(0);
    doc.setFillColor(26, 97, 208);
    doc.roundedRect(5, 151, 160, 7, 1, 1, 'F');
    doc.setFontSize(10);
    doc.setFontType('bold');
    doc.setTextColor(255, 255, 255);
    doc.text(8, 155, 'NJB');
    doc.text(118, 155, 'Nuevos Soles');

    // Izquierda

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(8, 164, 'Codigo');
    doc.text(35, 164, '020281');

    doc.text(8, 169, 'Usuario');
    doc.text(35, 169, 'KATTY GONGORA ARIMUYA');

    doc.text(8, 174, 'Calle');
    doc.text(35, 174, 'ALIPIO PONCE S/N');

    doc.text(8, 179, 'Mes de Consumo');
    doc.setFontType('normal');
    doc.text(45, 179, 'ENERO');

    doc.setFontType('bold');
    doc.text(8, 185, 'WATTS');
    doc.setFontType('normal');
    doc.text(35, 185, '18');

    doc.text(8, 190, 'Diferencia entre Lectura 18 Kw');

    // lado izquierda end

    // Lado derecha start
    doc.setFontType('normal');
    doc.text(85, 175, 'FECHA DE EMISION');
    doc.text(128, 175, '1-feb-21');

    doc.text(85, 180, 'FECHA DE VENCI.');
    doc.text(128, 180, '10-feb-21');

    // lado derecha end

    // Total a pagar
    doc.setFontType('bold');
    doc.text(8, 195, 'SON: 22.00');

    doc.setFontType('normal');
    doc.text(85, 195, 'Nuevos Soles');
    doc.setFontType('bold');
    doc.text(128, 195, '22.00****');


    doc.setDrawColor(0);
    doc.setFillColor(26, 97, 208);
    doc.roundedRect(-1, 203, 150, 7, 1, 1, 'F');
    doc.setFontSize(8);
    doc.setFontType('bold');
    doc.setTextColor(255, 255, 255);
    doc.text(26, 207.8, 'CUIDE SU RECIBO. EL DUPLICADO COSTARA 2.00 NUEVOS SOLES.');


    doc.save('ejemplo.pdf');
}

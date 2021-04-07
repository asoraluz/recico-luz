function pdfexport() {
  let doc = new jsPDF('p', 'mm', 'a5');

  /**
   * Cabecera 
   */
  //Datos izquierda 
  doc.setFontSize(8);
  doc.setFontType("bold");
  doc.text(10, 10, 'Código');
  doc.setFontSize(10);
  doc.setFontType("bold");
  doc.text(30, 10, '020281');

  doc.setFontSize(8);
  doc.setFontType('bold');
  doc.text(10, 15, 'Usuario');
  doc.setFontSize(10);
  doc.setFontType('normal');
  doc.text(30, 15, 'KATTY GONGORA ARIMUYA');

  doc.setFontSize(8);
  doc.setFontType('bold');
  doc.text(10, 20, 'Calle');
  doc.setFontSize(10);
  doc.setFontType('normal');
  doc.text(30, 20, 'ALIPIO PONCE S/N');

  doc.setFontSize(8);
  doc.setFontType('normal');
  doc.text(10, 25, 'Mes de consumo');
  doc.setFontSize(10);
  doc.setFontType('bold');
  doc.text(35, 25, 'ENERO');

  //   Lador derecha
  doc.setFontSize(10);
  doc.setFontType('bold');
  doc.text(130, 25, '2021');
  /**
   * Cabecera
   */


  /**
   * DATOS DEL USUARIO
   */

  doc.setDrawColor(0);
  doc.setFillColor(234, 234, 234);
  doc.roundedRect(5, 32, 138, 7, 1, 1, 'F');
  doc.setFontSize(10);
  doc.setFontType('bold');
  doc.text(20, 36.8, 'DATOS DEL USUARIO');

  // Cuadro
  doc.rect(5, 40, 68, 90);
  doc.rect(75, 40, 68, 90);
  // End cuadro

  // Lado izquierda
  doc.setFontSize(8);
  doc.setFontType('normal');
  doc.text(8, 45, 'Sin medidor');
  doc.text(50, 45, '0');

  doc.text(8, 50, '');
  doc.text(50, 50, '0');

  doc.text(8, 55, 'WATTS');
  doc.setTextColor(220, 20, 60);
  doc.text(50, 55, '18');

  doc.setTextColor(0, 0, 0);
  doc.text(8, 60, 'Diferencia entre Lectura');
  doc.text(50, 60, '18');

  doc.text(8, 65, 'Consuma a Facturar');
  doc.text(50, 65, '18');
  doc.text(55, 65, 'Kw.h');

  doc.text(8, 70, 'Facturción a Facturar S/.');
  doc.text(50, 70, '0.529883');

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
  doc.text(8, 110, 'FECHA DE EMISION');
  doc.text(50, 110, '1-2-21');

  doc.text(8, 115, 'ULTIMO DIA DE PAGO');
  doc.text(50, 115, '10-2-21');

  doc.setDrawColor(0);
  doc.setFillColor(255, 210, 131);
  doc.roundedRect(6, 120, 66, 7, 1, 1, 'F');
  doc.text(8, 124.5, 'FECHA DE CORTE');
  doc.text(50, 124.5, '15-feb-21');

  // Lado izquierdo end


  // Lado derecha start
  doc.setFontSize(8);
  doc.setFontType('normal');
  doc.text(78, 45, 'Cargo Fijo Mensual');
  doc.setFontType('bold');
  doc.text(135, 45, '0.01');

  doc.setFontType('normal');
  doc.text(78, 50, 'Cargo por Energia');
  doc.setFontType('bold');
  doc.text(135, 50, '0.05');

  doc.setFontType('normal');
  doc.text(78, 55, 'Mant. de conex y redes');
  doc.setFontType('bold');
  doc.text(135, 55, '0.60');

  doc.setFontType('normal');
  doc.text(78, 60, 'Alumbrado Publico');
  doc.setFontType('bold');
  doc.text(135, 60, '0.02');

  doc.setFontType('normal');
  doc.text(78, 65, 'T.c. congel. y Otros');
  doc.setTextColor(220, 20, 60);
  doc.text(135, 65, '0.00');

  // Sub total

  doc.setDrawColor(0);
  doc.setFillColor(255, 210, 131);
  doc.roundedRect(76, 75, 66, 7, 1, 1, 'F');
  doc.setTextColor(0, 0, 0);
  doc.text(78, 79.5, 'Sub total');
  doc.text(135, 79.5, '0.80');

  // Espacio
  // 
  // 
  // 
  // 
  // 
  // Espacio end
  doc.text(78,85,'Int. Moratorio');
  doc.text(130,85, '0.00*****');

  doc.text(78,90,'Descuento');
  doc.text(130,90, '0.60*****');

  doc.text(78,95,'Redondeo');
  doc.setTextColor(220,20,60);
  doc.text(130,95, '0.00*****');

  doc.setDrawColor(0);
  doc.setFillColor(255, 210, 131);
  doc.roundedRect(76, 100, 66, 7, 1, 1, 'F'); 
  doc.setTextColor(0,0,0);
  doc.setFontType('bold');
  doc.text(78,104.5,'TOTAL FACTURADO');
  doc.text(130,104.5, '22.00****');

  /**
   * Footer
   */

  doc.setDrawColor(0);
  doc.setFillColor(135, 88, 146);
  doc.roundedRect(5, 135, 138, 7, 1, 1, 'F');
  doc.setFontSize(10);
  doc.setFontType('bold');
  doc.text(8, 139.8, 'NJB');
  doc.text(118,139.8, 'Nuevos Soles');
  
  doc.setTextColor(220, 20, 60);
  doc.text(40,150, 'MUNICIPALIDAD DISTRITAL DE PASTAZA');
  doc.setFontSize(8);
  doc.text(55,155, 'SERVICIO FLUIDO ELECTRICO');

  // Izquierda
  
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(8, 160, 'Codigo');
  doc.text(35, 160, '020281');
  
  doc.text(8, 165, 'Usuario');
  doc.text(35, 165, 'KATTY GONGORA ARIMUYA');
  
  doc.text(8, 170, 'Calle');
  doc.text(35, 170, 'ALIPIO PONCE S/N');

  doc.text(8, 175, 'Mes de Consumo');
  doc.setFontType('normal');
  doc.text(45, 175, 'ENERO');

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
  doc.setFillColor(135, 88, 146);
  doc.roundedRect(-1, 203, 150, 7, 1, 1, 'F');
  doc.setFontSize(8);
  doc.setFontType('bold');
  doc.setTextColor(255, 255, 255);
  doc.text(26, 207.8, 'CUIDE SU RECIBO. EL DUPLICADO COSTARA 2.00 NUEVOS SOLES.');
  

  doc.save('ejemplo.pdf');
}
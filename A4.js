function pdfexport() {
    let doc = new jsPDF('p', 'mm', 'a5');

    let specialElementHandlers = {
        '#bypassme': function(element, renderer){
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    /**
     * Cabecera
     */
      //Datos izquierda 
      doc.setFontSize(8);
      doc.setFontType("bold");
      doc.text(20,20,'Código');
      doc.setFontSize(10);
      doc.setFontType("bold");
      doc.text(35,20,'020281');

      doc.setFontSize(8);
      doc.setFontType('bold');
      doc.text(20,25, 'Usuario');
      doc.setFontSize(10);
      doc.setFontType('normal');
      doc.text(35,25, 'KATTY GONGORA ARIMUYA');

      doc.setFontSize(8);
      doc.setFontType('bold');
      doc.text(20,30, 'Calle');
      doc.setFontSize(10);
      doc.setFontType('normal');
      doc.text(35,30, 'ALIPIO PONCE S/N');

      doc.setFontSize(8);
      doc.setFontType('normal');
      doc.text(20,35, 'Mes de consumo');
      doc.setFontSize(10);
      doc.setFontType('bold');
      doc.text(45,35, 'ENERO');

    //   Lador derecha
      doc.setFontSize(10);
      doc.setFontType('bold');
      doc.text(185,35, '2021');

    /**
     * Cabecera
     */

    /**
     * DATOS DEL USUARIO
     */
     doc.setDrawColor(0);
     doc.setFillColor(234,234,234);
     doc.roundedRect(0, 42, 210, 7, 1, 1, 'F'); 
     doc.setFontSize(10);
     doc.setFontType('bold');
     doc.text(30,46.5,'DATOS DEL USUARIO');

    //  Lado izquierda
    doc.setFontSize(8);
    doc.setFontType('normal');
    doc.text(20,55, 'Sin medidor');
    doc.text(80,55, '0');

    doc.text(20,60, '');
    doc.text(80,60, '0');

    doc.text(20,65, 'WATTS');
    doc.setTextColor(220,20,60);
    doc.text(80,65, '18');

    doc.setTextColor(0,0,0);
    doc.text(20,70, 'Diferencia entre Lectura');
    doc.text(80,70, '18');

    doc.text(20,75, 'Consuma a Facturar');
    doc.text(80,75, '18');
    doc.text(85,75, 'Kw.h');

    doc.text(20,80, 'Facturción a Facturar S/.');
    doc.text(80,80, '0.529883');

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
    doc.text(20,130, 'FECHA DE EMISION');
    doc.text(80,130, '1-2-21');

    doc.text(20,135, 'ULTIMO DIA DE PAGO');
    doc.text(80,135, '10-2-21');

    doc.setDrawColor(0);
    doc.setFillColor(255, 210, 131);
    doc.roundedRect(10, 140, 100, 7, 1, 1, 'F'); 
    doc.text(20,144.5,'FECHA DE CORTE');
    doc.text(80,144.5,'15-feb-21');

    // Lado derecho
    doc.setFontSize(8);
    doc.setFontType('normal');
    doc.text(125,55, 'Cargo Fijo Mensual');
    doc.setFontType('bold');
    doc.text(185,55, '0.01');

    doc.setFontType('normal');
    doc.text(125,60, 'Cargo por Energia');
    doc.setFontType('bold');
    doc.text(185,60, '0.05');

    doc.setFontType('normal');
    doc.text(125,65, 'Mant. de conex y redes');
    doc.setFontType('bold');
    doc.text(185,65, '0.60');

    doc.setFontType('normal');
    doc.text(125,70, 'Alumbrado Publico');
    doc.setFontType('bold');
    doc.text(185,70, '0.02');

    doc.setFontType('normal');
    doc.text(125,75, 'T.c. congel. y Otros');
    doc.setTextColor(220,20,60);
    doc.text(185,75, '0.00');

    // Sub total

    doc.setDrawColor(0);
    doc.setFillColor(255, 210, 131);
    doc.roundedRect(115, 80, 85, 7, 1, 1, 'F'); 
    doc.setTextColor(0,0,0);
    doc.text(125,84.5,'Sub total');
    doc.text(185,84.5, '0.80');

    // Espacio
    // 
    // 
    // 
    // 
    // 
    // Espacio end
    doc.text(125,115,'Int. Moratorio');
    doc.text(185,115, '0.00******');

    doc.text(125,120,'Descuento');
    doc.text(185,120, '0.60******');

    doc.text(125,125,'Redondeo');
    doc.setTextColor(220,20,60);
    doc.text(185,125, '0.00******');

    doc.setDrawColor(0);
    doc.setFillColor(255, 210, 131);
    doc.roundedRect(115, 130, 85, 7, 1, 1, 'F'); 
    doc.setTextColor(0,0,0);
    doc.setFontType('bold');
    doc.text(125,134.5,'TOTAL FACTURADO');
    doc.text(185,134.5, '22.00******');





    doc.save('ejemplo.pdf');
}
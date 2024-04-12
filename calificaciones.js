function calcularPromedio() {
    
    var matricula = document.getElementById("matricula").value;
    var nombre = document.getElementById("nombre").value;
    var AuditoriaInformatica = parseFloat(document.getElementById("Auditoria Informatica").value);
    var FundamentosdeInvestigacion = parseFloat(document.getElementById("Fundamentos de Investigacion").value);
    var TopicodeBasedeDatos = parseFloat(document.getElementById("Topico de Base de Datos").value);
    var InterconectividaddeRedes = parseFloat(document.getElementById("Interconectividad de Redes").value);
    var Español = parseFloat(document.getElementById("Español").value);

   
    if (isNaN(AuditoriaInformatica) || isNaN(FundamentosdeInvestigacion) || isNaN(TopicodeBasedeDatos) || isNaN(InterconectividaddeRedes) || isNaN (Español) ||
    AuditoriaInformatica < 0 || AuditoriaInformatica > 100 ||
    FundamentosdeInvestigacion < 0 || FundamentosdeInvestigacion > 100 ||
    TopicodeBasedeDatos < 0 || TopicodeBasedeDatos > 100 ||
    InterconectividaddeRedes < 0 || InterconectividaddeRedes > 100
    || Español < 0 || Español > 100) {
        alert("Por favor ingrese calificaciones válidas entre 0 y 100.");
        return;
    }
  
    var promedio = (AuditoriaInformatica + FundamentosdeInvestigacion + TopicodeBasedeDatos + InterconectividaddeRedes + Español) / 5;
    
    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
 <h2>Resultados:</h2>
 <table>
 <tr>
 <th>Matrícula</th>
 <th>Nombre</th>
 <th>Auditoria Informatica</th>
 <th>Fundamentos de Investigacion</th>
 <th>Topico de Base de Datos</th>
 <th>Interconectividad de Redes</th>
 <th>Español</th>
 <th>Promedio</th>
 </tr>
 <tr>
 <td>${matricula}</td>
 <td>${nombre}</td>
 <td>${AuditoriaInformatica}</td>
 <td>${FundamentosdeInvestigacion}</td>
 <td>${TopicodeBasedeDatos}</td>
 <td>${InterconectividaddeRedes}</td>
 <td>${Español}</td>
 <td>${promedio.toFixed(2)}</td>
 </tr>
 </table>
    `;
 }

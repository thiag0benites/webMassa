function criaTabelaMassa(massas)
{
    var table = `<table class="table table-bordered table-hover" id="tabelaMassa" cellspacing="6">
    <thead>
        <tr>
            <th>ID</th>
            <th>STATUS</th>
            <th>PLANO</th>
            <th>MSISDN</th>
            <th>SIMCARD</th>
            <th>SQ_TRANSACAO</th>
            <th>DATA</th>
        </tr>
    </thead>
    <tbody>`;

    for (let i = 0; i < massas.length; i++) {
        table += `<tr>
            <td>${massas[i].id}</td>
            <td>${massas[i].status}</td>
            <td>${massas[i].plano}</td>
            <td>${massas[i].msisdn}</td>
            <td>${massas[i].simcard}</td>
            <td>${massas[i].sq_transacao}</td>
            <td>${massas[i].data_hora}</td>
            </tr>`;
    }
    
    table += `</tbody></table>`;
    return table;
}

function criaTabelaAutomacao(massas)
{
    var table = `<table class="table table-bordered table-hover" id="tabelaAuto" cellspacing="6">
    <thead>
        <tr>
            <th>ID</th>
            <th>STATUS</th>
            <th>SISTEMA</th>
            <th>PLANTA</th>
            <th>URL</th>
            <th>ESTADO</th>
            <th>DDD</th>
            <th>USUARIO</th>
            <th>SENHA</th>
        </tr>
    </thead>
    <tbody>`;

    for (let i = 0; i < massas.length; i++) {
        table += `<tr>
            <td>${massas[i].id}</td>
            <td>${massas[i].status}</td>
            <td>${massas[i].sistema}</td>
            <td>${massas[i].planta}</td>
            <td>${massas[i].url}</td>
            <td>${massas[i].estado}</td>
            <td>${massas[i].ddd}</td>
            <td>${massas[i].usuario}</td>
            <td>${massas[i].senha}</td>
            </tr>`;
    }
    
    table += `</tbody></table>`;
    return table;
}

function formataTabela(idTabela, titulo) {

    $('#titulo').text(titulo);

    $(idTabela).DataTable({
        "language": {
                "lengthMenu": "_MENU_ registros por página",
                "zeroRecords": "Nada encontrado",
                "info": "Página _PAGE_ de _PAGES_",
                "infoEmpty": "Nenhum registro disponível",
                "infoFiltered": "(filtrado de _MAX_ registros no total)",
                "search": "Buscar",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "Próximo",
                    "previous":   "Anterior"
                }
            },
        "scrollY": "325px",
        "scrollCollapse": true,
        "paging": true
    });

    return true;
}
$(function(){

    var tabelaMassa = false;
    var tabelaAuto = false;

    $.getJSON("1-php/massa.php", function(massa) {
        $('#massa').append(criaTabelaMassa(massa));
        $('#titulo').text('Massa de Teste');
        tabelaMassa = formataTabela('#tabelaMassa');
        $('#auto').hide();
        $('#massa').show('slow');
        $('#atualizar').show('slow');
    })
    .fail(function() {
        alert('Não foi criada massa de dados!');
    });

    $.getJSON("1-php/automacao.php", function(massa) {
        $('#auto').append(criaTabelaAutomacao(massa));
        $('#titulo').text('Dados Automação');
        tabelaAuto = formataTabela('#tabelaAuto', 'Dados Automação');
        $('#massa').hide();
        $('#auto').show('slow');
        $('#atualizar').show('slow');
    })
    .fail(function() {
        alert('Não existem dados cadastrados para automação!');
    });

    $('#consultar').click(function() {
        $('#titulo').text('Massa de Teste');
        $('#auto').hide();
        $('#massa').show('slow');
        $('#atualizar').show('slow');
    });

    $('#automacao').click(function() {
        $('#titulo').text('Dados Automação');
        $('#massa').hide();
        $('#auto').show('slow');
        $('#atualizar').show('slow');
    });

    $(document).on('click', '#atualizar', function() {
        window.location.reload();
    });   
});
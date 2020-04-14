
// Exibe menssagem
function displaysMessage(element, msg, timeOut)
{
    var disp = element.style.display;

    element.style.display = disp == 'none' ? 'block' : 'none';
    element.innerHTML = msg;
    hiddenMessage(element, timeOut);
}
// function displaysMessage(element, elementClass, msg, timeOut)
// {
//     var disp = element.style.display;

//     element.style.display = disp == 'none' ? 'block' : 'none';
//     element.classList.add(elementClass);
//     element.innerHTML = msg;
//     hiddenMessage(element, elementClass, timeOut);
// }

// // Oculta mensagem
function hiddenMessage(element, timeOut)
{
    timeOut = timeOut * 1000;

    setTimeout(function() 
    {
        element.innerHTML = '';
        element.style.display = 'none';
    }, timeOut);
}
// function hiddenMessage(element, elementClass, timeOut)
// {
//     timeOut = timeOut * 1000;

//     setTimeout(function() 
//     {
//         element.classList.remove(elementClass);
//         element.innerHTML = '';
//         element.style.display = 'none';
//     }, timeOut);
// }

// Função para limpar campos de element (Pai)
function clearFields(element)
{
    var inputs = element.getElementsByTagName('input');
        
    for(let i = 0; i < inputs.length; i++)
    {
        inputs[i].value = '';
    } 
}

//Função criar tabela com usuários
function createTableUsers(users)
{
    var table = `<div class="div-table-head">`;
    table += `<table id="table-head" class="table table-sm" cellspacing="0">`;
    table += `<thead><tr><th scope="col">ID</th><th scope="col">Users</th><th scope="col">Password</th></tr></thead>`;
    table += `</table>`;
    table += `</div>`;
    table += `<div class="div-table-body table-scroll-y">`;
    table += `<table id="table-body" class="table table-striped table-sm" cellspacing="0" width="100%">`;
    table += `<tbody>`;

    users.forEach(function(user) 
    {
        table += `<tr>`;
        table += `<th scope="row">${user.id}</th>`;
        table += `<td>${user.usuario}</td>`;
        table += `<td>${user.senha}</td>`;
        table += `<tr>`;
    });

    table += `</tbody>`;
    table += `</table>`;
    table += `</div>`;

    return table;
}
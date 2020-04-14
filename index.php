<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1, minimum-scale=1"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <title>Claro - Visualizador de Massa de Teste</title>
    <link rel="stylesheet" type="text/css" href="3-css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="3-css/jquery.dataTables.min.css" rel="stylesheet">
    <link rel="stylesheet" href="3-css/style.css"/>
  </head>
  <body>
    <div id="main">
        <nav class="navbar navbar-fixed-top">
            <div class="container">
                <a href="index.php"><img id="logo" src="4-img/logo.png" alt="home"></a>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-center">
                        <li class="link link-claro-pos" id="consultar"><a href="#">Consulta</a></li>
                        <li class="link link-claro-pos" id="automacao"><a href="#">Automação</a></li>
                    </ul>
                </div>
                
                <div class="row">
                    <div class="col-md-6"><h3 id="titulo">Visualizador de Massa de Teste</h3></div>
                    <div class="col-md-6"><img id="atualizar" style="display: none;" src="4-img/refresh.png" alt="Atualizar"></div>
                </div>
            </div>
        </nav>
        <div class="alert-info text-center" role="alert" id="erro"></div>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div id="massa" style="display: none;"><!-- js planos/tabelaMassa --></div>
                    <div id="auto" style="display: none;"><!-- js planos/tabelaAuto --></div>
                </div>
            </div>
        </div>
    
        <footer class="section footer">
            <div class="sub-footer">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-xs-12 col-md-12 col-sm-6">
                            <p class="copyright">&copy; 2020 Claro. Todos os direitos reservados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
 
    <!-- JAVASCRIPT -->
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
    <script type="text/javascript" src="5-lib/jquery-3.5.0.min.js"></script>
    <script src="//cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <!-- AJAX -->
    <script src="2-ajax/generic.js"></script>
    <script src="2-ajax/cria_tabelas.js"></script>
    <script src="2-ajax/ajaxJQuery.js"></script>
  </body>
</html>
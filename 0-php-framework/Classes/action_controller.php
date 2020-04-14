<?php

    require_once 'database_connection.php';
    require_once 'database_actions.php';

    class controller extends connection
    {
        protected $obj_query;

        public function __construct()
		{
			//Executa construtor do connection
            parent::__construct();
            $this->obj_query = new actions($this->conn);
        }

        public function le_tabela_massa()
        {
            $table_massa = $this->obj_query->exec_query_le_massa();
            $table_massa = is_array($table_massa) ? json_encode($table_massa) : "erro";

            return $table_massa;
        }

        public function le_tabela_automacao()
        {
            $table_automacao = $this->obj_query->exec_query_le_automacao();
            $table_automacao = is_array($table_automacao) ? json_encode($table_automacao) : "erro";

            return $table_automacao;
        }
    }
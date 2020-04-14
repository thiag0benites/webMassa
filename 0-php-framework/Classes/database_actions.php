<?php

    require_once 'database_querys.php';

    class actions extends querys
    {
        protected $conn;

        public function __construct($conn){
            $this->conn = $conn;
        }

        public function execute_query($str_query, $parameters)
        {
            try
            {
                $result =  $this::prepare_query($str_query, $parameters);
                $result->execute();

                if($result->rowCount() > 0)
                {
                    return $result->fetchAll(PDO::FETCH_OBJ);
                }
                else
                {
                    return 'error';
                }    
            }
            catch (Exception $e)
            {
                return 'error';
            }          
        }

        public function prepare_query($str_query, $parameters)
        {
            $parameters = is_array($parameters) ? $parameters : array($parameters);
            $str_query = $this->conn->prepare($str_query);

            for($i = 0; $i < count($parameters); $i++)
            {
                switch(gettype($parameters[$i]))
                {
                    case 'string':
                        $str_query->bindValue($i + 1, $parameters[$i], PDO::PARAM_STR);
                        break;

                    case 'integer':
                        $str_query->bindValue($i + 1, $parameters[$i], PDO::PARAM_INT);
                        break;
                }
            }

            return $str_query; 
        }

        public function exec_query_le_massa()
        {
            return $this::execute_query($this->MASSA, '');
        }

        public function exec_query_le_automacao()
        {
            return $this::execute_query($this->AUTOMACAO, '');
        }
    }
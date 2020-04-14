<?php

    class querys
    {
        protected $MASSA = "SELECT * FROM massa";
        protected $AUTOMACAO = "SELECT
                                    auto.id,
                                    auto.status,
                                    sist.sistema,
                                    auto.planta,
                                    auto.url,
                                    auto.estado,
                                    auto.ddd,
                                    auto.usuario,
                                    auto.senha
                                FROM
                                    massateste.automacao auto
                                INNER JOIN 
                                    massateste.sistemas sist
                                ON
                                    auto.sistema = sist.id";
    }
import { useEffect, useState } from "react";
import api from "../api/api";

interface Totais {
    totalReceitas: number;
    totalDespesas: number;
    saldo: number;
}

interface ResumoPessoa {
    id: number;
    nome: string;
    totalReceitas: number;
    totalDespesas: number;
    saldo: number;
}

function Dashboard() {

    const [totais, setTotais] = useState<Totais>({
        totalReceitas: 0,
        totalDespesas: 0,
        saldo: 0
    });

    const [resumos, setResumos] = useState<ResumoPessoa[]>([]);

    useEffect(() => {

        carregarTotais();

        carregarResumos();

    }, []);

    function carregarTotais() {

        api.get("/transacao/totais")
            .then(response => {

                setTotais(response.data);

            })
            .catch(error => {

                console.error(
                    "Erro ao buscar totais:",
                    error
                );

            });

    }

    function carregarResumos() {

        api.get("/pessoa/resumos")
            .then(response => {

                setResumos(response.data);

            })
            .catch(error => {

                console.error(
                    "Erro ao buscar resumos:",
                    error
                );

            });

    }

    return (

        <div className="page-container">

            <h1 className="dashboard-title">
                Controle de Gastos
            </h1>

            <p className="dashboard-subtitle">
                Visão geral das suas finanças
            </p>

            <div className="dashboard-grid">

                <div className="card">

                    <div className="card-title">
                        <span>💰</span>
                        Receitas
                    </div>

                    <p className="money receita">
                        R$ {totais.totalReceitas.toFixed(2)}
                    </p>

                    <small>
                        Entradas registradas
                    </small>

                </div>

                <div className="card">

                    <div className="card-title">
                        <span>💸</span>
                        Despesas
                    </div>

                    <p className="money despesa">
                        R$ {totais.totalDespesas.toFixed(2)}
                    </p>

                    <small>
                        Gastos registrados
                    </small>

                </div>

                <div className="card">

                    <div className="card-title">
                        <span>📊</span>
                        Saldo Atual
                    </div>

                    <p className="money saldo">
                        R$ {totais.saldo.toFixed(2)}
                    </p>

                    <small>
                        Resultado financeiro
                    </small>

                </div>

            </div>

            <div className="card table-card">

                <h2>
                    Resumo Financeiro por Pessoa
                </h2>

                <table>

                    <thead>

                        <tr>

                            <th>Pessoa</th>

                            <th>Receitas</th>

                            <th>Despesas</th>

                            <th>Saldo</th>

                        </tr>

                    </thead>

                    <tbody>

                        {resumos.map(pessoa => (

                            <tr key={pessoa.id}>

                                <td>

                                    {pessoa.nome}

                                </td>

                                <td className="receita">

                                    R$ {pessoa.totalReceitas.toFixed(2)}

                                </td>

                                <td className="despesa">

                                    R$ {pessoa.totalDespesas.toFixed(2)}

                                </td>

                                <td
                                    className={
                                        pessoa.saldo >= 0
                                            ? "receita"
                                            : "despesa"
                                    }
                                >

                                    R$ {pessoa.saldo.toFixed(2)}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Dashboard;
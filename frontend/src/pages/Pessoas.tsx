import { useEffect, useState } from "react";
import api from "../api/api";

interface Pessoa {
    id: number;
    nome: string;
    idade: number;
    quantidadeTransacoes: number;
}

function Pessoas() {

    const [pessoas, setPessoas] = useState<Pessoa[]>([]);

    const [nome, setNome] = useState("");

    const [idade, setIdade] = useState("");


    function carregarPessoas() {

        api.get("/pessoa")
            .then(response => {

                setPessoas(response.data);

            })
            .catch(error => {

                console.error(
                    "Erro ao buscar pessoas:",
                    error
                );

            });

    }


    useEffect(() => {

        carregarPessoas();

    }, []);



    async function cadastrarPessoa() {

        if (!nome || !idade) {

            alert("Preencha todos os campos");
            return;

        }


        await api.post("/pessoa", {

            nome: nome,

            idade: Number(idade)

        });


        setNome("");

        setIdade("");

        carregarPessoas();

    }



    return (

        <div className="page-container">


            <h1 className="dashboard-title">
                Pessoas cadastradas
            </h1>



            <div className="card">


                <h2>
                    Nova pessoa
                </h2>


                <div className="form-group">


                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={
                            e => setNome(e.target.value)
                        }
                    />



                    <input
                        type="number"
                        placeholder="Idade"
                        value={idade}
                        onChange={
                            e => setIdade(e.target.value)
                        }
                    />



                    <button
                        className="primary-button"
                        onClick={cadastrarPessoa}
                    >
                        Cadastrar
                    </button>


                </div>


            </div>





            <div className="card table-card">


                <h2>
                    Lista de pessoas
                </h2>



                <table>


                    <thead>

                        <tr>

                            <th>
                                Nome
                            </th>


                            <th>
                                Idade
                            </th>


                            <th>
                                Transações
                            </th>


                        </tr>

                    </thead>



                    <tbody>


                        {
                            pessoas.map(pessoa => (

                                <tr key={pessoa.id}>


                                    <td>
                                        {pessoa.nome}
                                    </td>


                                    <td>
                                        {pessoa.idade}
                                    </td>


                                    <td>
                                        {pessoa.quantidadeTransacoes}
                                    </td>


                                </tr>

                            ))
                        }


                    </tbody>


                </table>


            </div>


        </div>

    );

}


export default Pessoas;
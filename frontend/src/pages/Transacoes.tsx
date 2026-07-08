import { useEffect, useState } from "react";
import api from "../api/api";


interface Pessoa {
    id: number;
    nome: string;
    idade: number;
}


interface Transacao {

    id: number;
    descricao: string;
    valor: number;
    tipo: number;
    pessoaId: number;
    PessoaNome: string;

}



function Transacoes(){


    const [transacoes, setTransacoes] = useState<Transacao[]>([]);

    const [pessoas, setPessoas] = useState<Pessoa[]>([]);


    const [descricao, setDescricao] = useState("");

    const [valor, setValor] = useState("");

    const [tipo, setTipo] = useState(1);

    const [pessoaId, setPessoaId] = useState("");




    function carregarTransacoes(){

        api.get("/transacao")
            .then(response => {

                setTransacoes(response.data);

            });

    }



    function carregarPessoas(){

        api.get("/pessoa")
            .then(response => {

                setPessoas(response.data);

            });

    }





    useEffect(() => {

        carregarTransacoes();

        carregarPessoas();

    }, []);






    async function cadastrarTransacao(){


        try {


            await api.post("/transacao", {

                descricao,

                valor: Number(valor),

                tipo,

                pessoaId: Number(pessoaId)

            });



            setDescricao("");

            setValor("");

            setPessoaId("");


            carregarTransacoes();


        }
        catch(error:any){

            alert(
                error.response?.data ??
                "Erro ao cadastrar transação"
            );

        }


    }







    return (

        <div className="page-container">



            <h1 className="dashboard-title">
                Transações
            </h1>





            <div className="card">


                <h2>
                    Nova transação
                </h2>



                <div className="form-group">



                    <input

                        placeholder="Descrição"

                        value={descricao}

                        onChange={
                            e => setDescricao(e.target.value)
                        }

                    />




                    <input

                        type="number"

                        placeholder="Valor"

                        value={valor}

                        onChange={
                            e => setValor(e.target.value)
                        }

                    />





                    <select

                        value={pessoaId}

                        onChange={
                            e => setPessoaId(e.target.value)
                        }

                    >

                        <option value="">
                            Selecione uma pessoa
                        </option>



                        {
                            pessoas.map(pessoa => (

                                <option
                                    key={pessoa.id}
                                    value={pessoa.id}
                                >

                                    {pessoa.nome}

                                </option>

                            ))
                        }


                    </select>





                    <select

                        value={tipo}

                        onChange={
                            e => setTipo(Number(e.target.value))
                        }

                    >

                        <option value={1}>
                            Receita
                        </option>


                        <option value={2}>
                            Despesa
                        </option>


                    </select>





                    <button
                        className="primary-button"
                        onClick={cadastrarTransacao}
                    >

                        Cadastrar

                    </button>



                </div>


            </div>








            <div className="card table-card">


                <h2>
                    Histórico de transações
                </h2>





                <table>


                    <thead>

                        <tr>

                            <th>
                                Descrição
                            </th>


                            <th>
                                Valor
                            </th>


                            <th>
                                Tipo
                            </th>


                            <th>
                                Pessoa
                            </th>


                        </tr>

                    </thead>





                    <tbody>


                        {
                            transacoes.map(transacao => (

                                <tr key={transacao.id}>


                                    <td>
                                        {transacao.descricao}
                                    </td>



                                    <td>
                                        R$ {transacao.valor.toFixed(2)}
                                    </td>




                                    <td>

                                        {
                                            transacao.tipo === 1

                                            ?

                                            <span className="receita">
                                                Receita
                                            </span>

                                            :

                                            <span className="despesa">
                                                Despesa
                                            </span>
                                        }

                                    </td>




                                    <td>
                                        {transacao.PessoaNome}
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


export default Transacoes;
interface CardResumoProps {
    titulo: string;
    valor: number;
    tipo: "receita" | "despesa" | "saldo";
}


function CardResumo({ titulo, valor, tipo }: CardResumoProps) {

    return (
        <div>

            <h3>
                {titulo}
            </h3>

            <p>
                R$ {valor.toFixed(2)}
            </p>

            <small>
                Tipo: {tipo}
            </small>

        </div>
    );
}


export default CardResumo;
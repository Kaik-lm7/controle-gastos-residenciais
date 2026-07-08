namespace ControleGastos.API.Models;

/// <summary>
/// Representa uma transação financeira.
/// </summary>
public class Transacao
{
    /// <summary>
    /// Identificador único da transação.
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Descrição da transação.
    /// </summary>
    public string Descricao { get; set; } = string.Empty;

    /// <summary>
    /// Valor da transação.
    /// </summary>
    public decimal Valor { get; set; }

    /// <summary>
    /// Tipo da transação.
    /// </summary>
    public TipoTransacao Tipo { get; set; }

    /// <summary>
    /// Chave estrangeira da pessoa.
    /// </summary>
    public int PessoaId { get; set; }

    /// <summary>
    /// Pessoa dona da transação.
    /// </summary>
    public Pessoa? Pessoa { get; set; }
}
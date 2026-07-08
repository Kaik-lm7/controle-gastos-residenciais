namespace ControleGastos.API.Models;

/// <summary>
/// Representa uma pessoa cadastrada no sistema.
/// Cada pessoa pode possuir várias transações.
/// </summary>
public class Pessoa
{
    /// <summary>
    /// Identificador único da pessoa.
    /// O Entity Framework criará este campo como chave primária.
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Nome da pessoa.
    /// </summary>
    public string Nome { get; set; } = string.Empty;

    /// <summary>
    /// Idade da pessoa.
    /// </summary>
    public int Idade { get; set; }

    /// <summary>
    /// Lista de transações pertencentes à pessoa.
    /// </summary>
    public ICollection<Transacao> Transacoes { get; set; } = new List<Transacao>();
}
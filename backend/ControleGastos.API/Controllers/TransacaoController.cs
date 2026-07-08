using ControleGastos.API.Data;
using ControleGastos.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ControleGastos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransacaoController : ControllerBase
{
    private readonly AppDbContext _context;

    public TransacaoController(AppDbContext context)
    {
        _context = context;
    }


    // GET: api/transacao
[HttpGet]
public async Task<ActionResult> Listar()
{
    var transacoes = await _context.Transacoes
        .Select(t => new
        {
            t.Id,
            t.Descricao,
            t.Valor,
            t.Tipo,
            t.PessoaId,
            PessoaNome = t.Pessoa!.Nome
        })
        .ToListAsync();

    return Ok(transacoes);
}


    // POST: api/transacao
    [HttpPost]
    public async Task<ActionResult> Criar(Transacao transacao)
    {
        var pessoa = await _context.Pessoas
            .FirstOrDefaultAsync(p => p.Id == transacao.PessoaId);


        if (pessoa == null)
        {
            return NotFound("Pessoa não encontrada.");
        }


        // Regra:
        // Menores de 18 anos não podem cadastrar receitas
        if (pessoa.Idade < 18 &&
            transacao.Tipo == TipoTransacao.Receita)
        {
            return BadRequest(
                "Menores de 18 anos não podem cadastrar receitas."
            );
        }


        _context.Transacoes.Add(transacao);

        await _context.SaveChangesAsync();


        return CreatedAtAction(
            nameof(Listar),
            new { id = transacao.Id },
            new
            {
                transacao.Id,
                transacao.Descricao,
                transacao.Valor,
                transacao.Tipo,
                transacao.PessoaId
            }
        );
    }



    // DELETE: api/transacao/1
    [HttpDelete("{id}")]
    public async Task<ActionResult> Excluir(int id)
    {
        var transacao = await _context.Transacoes
            .FindAsync(id);


        if (transacao == null)
        {
            return NotFound("Transação não encontrada.");
        }


        _context.Transacoes.Remove(transacao);

        await _context.SaveChangesAsync();


        return NoContent();
    }



    // GET: api/transacao/totais
[HttpGet("totais")]
public async Task<ActionResult> Totais()
{
    var transacoes = await _context.Transacoes
        .ToListAsync();


    var totalReceitas = transacoes
        .Where(t => t.Tipo == TipoTransacao.Receita)
        .Sum(t => t.Valor);


    var totalDespesas = transacoes
        .Where(t => t.Tipo == TipoTransacao.Despesa)
        .Sum(t => t.Valor);


    return Ok(new
    {
        TotalReceitas = totalReceitas,
        TotalDespesas = totalDespesas,
        Saldo = totalReceitas - totalDespesas
    });
}
}
    
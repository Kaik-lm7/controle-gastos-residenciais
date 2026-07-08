using ControleGastos.API.Data;
using ControleGastos.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ControleGastos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PessoaController : ControllerBase
{
    private readonly AppDbContext _context;

    public PessoaController(AppDbContext context)
    {
        _context = context;
    }


    // GET: api/pessoa
    [HttpGet]
    public async Task<ActionResult> Listar()
    {
        var pessoas = await _context.Pessoas
            .Select(p => new
            {
                p.Id,
                p.Nome,
                p.Idade,
                QuantidadeTransacoes = p.Transacoes.Count()
            })
            .ToListAsync();

        return Ok(pessoas);
    }


    // POST: api/pessoa
    [HttpPost]
    public async Task<ActionResult> Criar(Pessoa pessoa)
    {
        _context.Pessoas.Add(pessoa);

        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(Listar),
            new { id = pessoa.Id },
            new
            {
                pessoa.Id,
                pessoa.Nome,
                pessoa.Idade
            }
        );
    }


    // DELETE: api/pessoa/1
    [HttpDelete("{id}")]
    public async Task<ActionResult> Excluir(int id)
    {
        var pessoa = await _context.Pessoas.FindAsync(id);

        if (pessoa == null)
        {
            return NotFound("Pessoa não encontrada.");
        }

        _context.Pessoas.Remove(pessoa);

        await _context.SaveChangesAsync();

        return NoContent();
    }


    // GET: api/pessoa/1/resumo
    [HttpGet("{id}/resumo")]
    public async Task<ActionResult> Resumo(int id)
    {
        var pessoa = await _context.Pessoas
            .Include(p => p.Transacoes)
            .FirstOrDefaultAsync(p => p.Id == id);

        if (pessoa == null)
        {
            return NotFound("Pessoa não encontrada.");
        }

        var totalReceitas = pessoa.Transacoes
            .Where(t => t.Tipo == TipoTransacao.Receita)
            .Sum(t => t.Valor);

        var totalDespesas = pessoa.Transacoes
            .Where(t => t.Tipo == TipoTransacao.Despesa)
            .Sum(t => t.Valor);

        return Ok(new
        {
            pessoa.Nome,
            TotalReceitas = totalReceitas,
            TotalDespesas = totalDespesas,
            Saldo = totalReceitas - totalDespesas
        });
    }


    // GET: api/pessoa/resumos
[HttpGet("resumos")]
public async Task<ActionResult> Resumos()
{
    var pessoas = await _context.Pessoas
        .Include(p => p.Transacoes)
        .ToListAsync();

    var resultado = pessoas.Select(p => new
    {
        p.Id,
        p.Nome,

        TotalReceitas = p.Transacoes
            .Where(t => t.Tipo == TipoTransacao.Receita)
            .Sum(t => t.Valor),

        TotalDespesas = p.Transacoes
            .Where(t => t.Tipo == TipoTransacao.Despesa)
            .Sum(t => t.Valor),

        Saldo =
            p.Transacoes
                .Where(t => t.Tipo == TipoTransacao.Receita)
                .Sum(t => t.Valor)
            -
            p.Transacoes
                .Where(t => t.Tipo == TipoTransacao.Despesa)
                .Sum(t => t.Valor)
    });

    return Ok(resultado);
}
    }

using System.Linq;
using System.Threading.Tasks;
using App.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace App.API.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private DataContext _context;
        private readonly IValuesRepository _repo;
        public ValuesController(IValuesRepository repo,DataContext context)
        {
            _repo = repo;
            _context= context;

        }
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values = await _repo.GetValues();

            return Ok(values);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult GetValue(int id)
        {
            var value=_context.Values.FirstOrDefault( x=> x.Id == id);

            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

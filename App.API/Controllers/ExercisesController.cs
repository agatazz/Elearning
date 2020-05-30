// using System.Threading.Tasks;
// using App.API.Data;
// using Microsoft.AspNetCore.Authorization;
// using Microsoft.AspNetCore.Mvc;

// namespace App.API.Controllers
// {
//     [Authorize]
//     [Route("api/controller]")]
//     [ApiController]
//     public class ExercisesController
//     {
//         private readonly IValuesRepository _repo;
//         public ExercisesController(IValuesRepository repo)
//         {
//             _repo = repo;

//         }
//         [HttpGet]
//         public async Task<IActionResult> GetValues(){
//             var values=await _repo.GetValues();

        
//         }
//     }
// }
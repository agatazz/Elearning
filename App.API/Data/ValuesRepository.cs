using System.Collections.Generic;
using System.Threading.Tasks;
using App.API.Models;
using Microsoft.EntityFrameworkCore;

namespace App.API.Data
{
    public class ValuesRepository : IValuesRepository
    {
        private readonly DataContext _context;

        public ValuesRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Value> GetValue()
        {
            var values=await _context.Values.FirstOrDefaultAsync();

            return values;
            
        }

        public async Task<IEnumerable<Value>> GetValues()
        {
            var values=await _context.Values.ToListAsync();

            return values;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() >0;
        }
    }
}
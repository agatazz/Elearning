using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace App.API.ErrorHandler
{
    public static class Extensions
    {
        public static void AddError(this HttpResponse response,string messege){
            response.Headers.Add("Error",messege);
            response.Headers.Add("Acces-Control-Expose-Headers","Error");
            response.Headers.Add("Acces-Control-Allowa-Origin","*");
        }

        public static void PagedView(this HttpResponse response,int currentPage,int itemsPerPage,int totalItems,int totalPages){
            var pagedHeader=new PagedHeaders(currentPage,itemsPerPage,totalItems,totalPages);
            response.Headers.Add("Pagination", JsonConvert.SerializeObject(pagedHeader));
            response.Headers.Add("Acces-Control-Expose-Headers","Pagination");

        }
    }
}
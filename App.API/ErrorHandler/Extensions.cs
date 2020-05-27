using Microsoft.AspNetCore.Http;

namespace App.API.ErrorHandler
{
    public static class Extensions
    {
        public static void AddError(this HttpResponse response,string messege){
            response.Headers.Add("Error",messege);
            response.Headers.Add("Acces-Control-Expose-Headers","Error");
            response.Headers.Add("Acces-Control-Allowa-Origin","*");
        }
    }
}
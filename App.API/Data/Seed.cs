using System.Collections.Generic;
using System.Linq;
using App.API.Models;
using Newtonsoft.Json;

namespace App.API.Data
{
    public class Seed
    {
        public static void seedValues(DataContext context){
            if(!context.Values.Any()){
                var valuesData=System.IO.File.ReadAllText("Data/ValuesSeedData.json");
                var values=JsonConvert.DeserializeObject<List<Value>>(valuesData);
                foreach(var value in values){

                    context.Values.Add(value);
                }

                context.SaveChanges();
            }
        }
    }
}
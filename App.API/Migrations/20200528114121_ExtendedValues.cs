using Microsoft.EntityFrameworkCore.Migrations;

namespace App.API.Migrations
{
    public partial class ExtendedValues : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Contact",
                table: "Values",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Desription",
                table: "Values",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Specialization",
                table: "Values",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Contact",
                table: "Values");

            migrationBuilder.DropColumn(
                name: "Desription",
                table: "Values");

            migrationBuilder.DropColumn(
                name: "Specialization",
                table: "Values");
        }
    }
}

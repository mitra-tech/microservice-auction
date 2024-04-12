using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuctionService.Data.Migrations
{
    /// <inheritdoc />
    public partial class SecondCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Aucions_AuctionId",
                table: "Items");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Aucions",
                table: "Aucions");

            migrationBuilder.RenameTable(
                name: "Aucions",
                newName: "Auctions");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Auctions",
                table: "Auctions",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Auctions_AuctionId",
                table: "Items",
                column: "AuctionId",
                principalTable: "Auctions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Auctions_AuctionId",
                table: "Items");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Auctions",
                table: "Auctions");

            migrationBuilder.RenameTable(
                name: "Auctions",
                newName: "Aucions");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Aucions",
                table: "Aucions",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Aucions_AuctionId",
                table: "Items",
                column: "AuctionId",
                principalTable: "Aucions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

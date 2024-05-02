namespace Contracts;


public class AuctionFinished 
{
    public bool ItemSold { get; set; }
    public string AuctionId { get; set; }
    public bool Winner { get; set; }
    public bool Seller { get; set; }
    public int? Amount { get; set; }
}
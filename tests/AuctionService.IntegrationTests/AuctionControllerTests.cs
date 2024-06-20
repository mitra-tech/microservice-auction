
using System.Net;
using System.Net.Http.Json;
using AuctionService.Data;
using AuctionService.DTOs;
using Microsoft.Extensions.DependencyInjection;

namespace AuctionService.IntegrationTests;

public class AuctionControllerTests : IClassFixture<CustomWebAppFactory>, IAsyncLifetime
{
    private readonly CustomWebAppFactory _factory;
    private readonly HttpClient _httpClient;
    private const string GT_ID= "afbee524-5972-4075-8800-7d1f9d7b0a0c";

    public AuctionControllerTests(CustomWebAppFactory factory)
    {
        _factory = factory;
        _httpClient = factory.CreateClient();
    }

    [Fact]
    public async Task GetAuctions_ShouldReturn3Auctions()
    {
        // arrange

        // act
        var response = await _httpClient.GetFromJsonAsync<List<AuctionDto>>("api/auctions");

        // assert
        Assert.Equal(3, response.Count);
    }

    [Fact]
    public async Task GetAuctionById_WithValidIdShouldReturnAuction()
    {
        // arrange

        // act
        var response = await _httpClient.GetFromJsonAsync<AuctionDto>($"api/auctions/{GT_ID}");

        // assert
        Assert.Equal("GT", response.Model);
    }


    [Fact]
    public async Task GetAuctionById_WithInvalidId_ShouldReturn404Response()
    {
        // arrange

        // act
        var response = await _httpClient.GetAsync($"api/auctions/{Guid.NewGuid()}");

        // assert
        Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
    }


    [Fact]
    public async Task GetAuctionById_WithInvalidGuid_ShouldReturn400Response()
    {
        // arrange

        // act
        var response = await _httpClient.GetAsync($"api/auctions/invalidguid");

        // assert
        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
    }


    public Task InitializeAsync() => Task.CompletedTask;

    public Task DisposeAsync()
    {
        using var scope = _factory.Services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AuctionDbContext>();
        DbHelper.RenitDbForTests(db);
        
        return Task.CompletedTask;
    }
}
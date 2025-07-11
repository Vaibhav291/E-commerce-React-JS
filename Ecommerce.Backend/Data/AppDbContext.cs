﻿using Ecommerce.Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
    }
}

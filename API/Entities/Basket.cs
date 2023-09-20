using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public List<BasketItem> Items { get; set; } = new ();
        public string PaymentIntentId { get; set; }
        public string ClientSecret { get; set; }

        public void AddItem(Product product, int quantity = 1)
        {
            if(Items.Any(x => x.ProductId == product.Id))
            {
                var existingItem = Items.FirstOrDefault(x => x.ProductId == product.Id);
                
                if(existingItem != null) existingItem.Quantity += quantity;
            }
            else
            {
                Items.Add(new BasketItem
                {
                    Product = product,                  
                    Quantity = quantity
                });
            }
        }

        public void RemoveItem(int productId, int quantity)
        {
            var item = Items.FirstOrDefault(x => x.ProductId == productId);

            if (item == null) return;

            item.Quantity -= quantity;

            if(item.Quantity == 0) Items.Remove(item);
        }
        
    }   
}
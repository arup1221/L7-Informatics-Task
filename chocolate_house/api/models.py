from django.db import models
from decimal import Decimal

class SeasonalFlavor(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    flavor_type = models.CharField(max_length=50, choices=[('chocolate', 'Chocolate'), ('vanilla', 'Vanilla'), ('fruity', 'Fruity'), ('spicy', 'Spicy')])
    availability_start = models.DateField()
    availability_end = models.DateField()
    price = models.DecimalField(max_digits=5, decimal_places=2)  
    is_active = models.BooleanField(default=True) 

    def __str__(self):
        return f"{self.name} ({self.flavor_type})"

class Ingredient(models.Model):
    name = models.CharField(max_length=100)
    quantity_in_stock = models.FloatField() 
    unit = models.CharField(max_length=20)  # gram and kg 
    supplier = models.CharField(max_length=200)  
    expiry_date = models.DateField()  
    ingredient_type = models.CharField(max_length=50, choices=[('dairy', 'Dairy'), ('sugar', 'Sugar'), ('flavoring', 'Flavoring'), ('additive', 'Additive')])

    def __str__(self):
        return f"{self.name} ({self.ingredient_type})"

class CustomerSuggestion(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    suggestion = models.TextField()
    allergy_concern = models.TextField(blank=True, null=True)
    suggestion_date = models.DateTimeField(auto_now_add=True)  
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('reviewed', 'Reviewed'), ('accepted', 'Accepted'), ('rejected', 'Rejected')], default='pending')
    priority = models.CharField(max_length=20, choices=[('low', 'Low'), ('medium', 'Medium'), ('high', 'High')], default='low')

    def __str__(self):
        return f"Suggestion by {self.name} ({self.status})"

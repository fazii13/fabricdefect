from django.db import models

class React(models.Model):
    employee = models.CharField(max_length=30)
    department = models.CharField(max_length=30)

    def __str__(self):
        return f"{self.employee} - {self.department}"

from django.db import models

class Product(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    image = models.ImageField(upload_to='product_images/', null=True, blank=True)
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255, default="Unknown")
    unit_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    selling_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    stock = models.IntegerField(default=0)
    type = models.CharField(max_length=100, default="General")
    category = models.CharField(max_length=100, default="Uncategorized")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=100, db_index=True)
    color = models.CharField(max_length=50, db_index=True)
    size = models.PositiveSmallIntegerField(db_index=True)
    material = models.CharField(max_length=100)
    image = models.ImageField(upload_to='products/', blank=True)
    is_active = models.BooleanField(default=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = 'catalog'

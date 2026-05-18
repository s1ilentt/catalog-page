from django.db import models
from django.contrib.postgres.fields import ArrayField


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=100, db_index=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    old_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    discount_percent = models.PositiveSmallIntegerField(null=True, blank=True)
    sizes = ArrayField(models.DecimalField(max_digits=4, decimal_places=1))
    colors = ArrayField(models.CharField(max_length=50))
    heel_params = models.CharField(max_length=100, db_index=True)
    material = models.CharField(max_length=100, db_index=True)
    image = models.ImageField(upload_to='products/', blank=True)
    is_active = models.BooleanField(default=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = 'catalog'

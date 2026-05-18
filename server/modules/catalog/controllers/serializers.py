from rest_framework import serializers
from ..models.product import Product


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'category',
            'price',
            'old_price',
            'discount_percent',
            'sizes',
            'colors',
            'heel_params',
            'material',
            'image',
        ]

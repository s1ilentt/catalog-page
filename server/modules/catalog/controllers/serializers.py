from rest_framework import serializers
from ..models.product import Product


class ProductListSerializer(serializers.ModelSerializer):
    oldPrice = serializers.DecimalField(source='old_price', max_digits=10, decimal_places=2, allow_null=True)
    discountPercent = serializers.IntegerField(source='discount_percent', allow_null=True)
    heelParams = serializers.CharField(source='heel_params')

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'category',
            'price',
            'oldPrice',
            'discountPercent',
            'sizes',
            'colors',
            'heelParams',
            'material',
            'image',
        ]

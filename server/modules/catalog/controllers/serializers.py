from rest_framework import serializers
from ..models.product import Product


class ProductDetailSerializer(serializers.ModelSerializer):
    price = serializers.IntegerField()
    oldPrice = serializers.IntegerField(source='old_price', allow_null=True)
    discountPercent = serializers.IntegerField(source='discount_percent', allow_null=True)
    heelParams = serializers.CharField(source='heel_params')

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'description',
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


class ProductListSerializer(serializers.ModelSerializer):
    price = serializers.IntegerField()
    oldPrice = serializers.IntegerField(source='old_price', allow_null=True)
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

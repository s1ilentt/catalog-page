from django.db.models import Min, Max, Count
from ..models.product import Product


class FiltersRepository:
    @staticmethod
    def get_price_range() -> dict:
        result = Product.objects.filter(is_active=True).aggregate(
            min_price=Min('price'),
            max_price=Max('price'),
        )
        return result

    @staticmethod
    def get_category_counts() -> list:
        return list(
            Product.objects.filter(is_active=True)
            .values('category')
            .annotate(count=Count('id'))
            .order_by('category')
        )

    @staticmethod
    def get_material_counts() -> list:
        return list(
            Product.objects.filter(is_active=True)
            .values('material')
            .annotate(count=Count('id'))
            .order_by('material')
        )

    @staticmethod
    def get_heel_params_counts() -> list:
        return list(
            Product.objects.filter(is_active=True)
            .values('heel_params')
            .annotate(count=Count('id'))
            .order_by('heel_params')
        )

    @staticmethod
    def get_color_counts() -> list:
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT unnest(colors) AS color, COUNT(*) AS count
                FROM catalog_product
                WHERE is_active = TRUE
                GROUP BY color
                ORDER BY color
            """)
            return [{'color': row[0], 'count': row[1]} for row in cursor.fetchall()]

    @staticmethod
    def get_size_counts() -> list:
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT unnest(sizes) AS size, COUNT(*) AS count
                FROM catalog_product
                WHERE is_active = TRUE
                GROUP BY size
                ORDER BY size
            """)
            return [{'size': str(row[0]), 'count': row[1]} for row in cursor.fetchall()]

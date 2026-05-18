import math
from ..repositories.product_repository import ProductRepository

BASE_PAGE_SIZE = 24


class CatalogService:
    @staticmethod
    def list_products(params: dict) -> dict:
        page = max(1, int(params.get('page', 1)))
        limit = max(1, int(params.get('limit', BASE_PAGE_SIZE)))

        colors = [c for c in params.get('colors', '').split(',') if c]
        sizes = [float(s) for s in params.get('sizes', '').split(',') if s]

        min_price = params.get('min_price')
        max_price = params.get('max_price')

        products, total = ProductRepository.find_many(
            category=params.get('category') or None,
            colors=colors or None,
            sizes=sizes or None,
            heel_params=params.get('heel_params') or None,
            material=params.get('material') or None,
            min_price=float(min_price) if min_price else None,
            max_price=float(max_price) if max_price else None,
            ordering=params.get('ordering', '-created_at'),
            page=page,
            limit=limit,
        )

        return {
            'total': total,
            'results': products,
        }

    @staticmethod
    def get_product(product_id: int):
        return ProductRepository.get_by_id(product_id)

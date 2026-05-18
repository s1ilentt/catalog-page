import math
from ..repositories.product_repository import ProductRepository

BASE_PAGE_SIZE = 24


class CatalogService:
    @staticmethod
    def list_products(params: dict) -> dict:
        page = int(params.get('page', 1))
        limit = int(params.get('limit', BASE_PAGE_SIZE))

        products, total = ProductRepository.find_many(
            category=params.get('category'),
            colors=params.get('colors', []) or [],
            sizes=params.get('sizes', []) or [],
            heel_params=params.get('heel_params'),
            material=params.get('material'),
            min_price=params.get('min_price'),
            max_price=params.get('max_price'),
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

from ..repositories.product_repository import ProductRepository

BASE_PAGE_SIZE = 24
ALLOWED_ORDERING = {'price', '-price', 'name', '-name', 'created_at', '-created_at'}
DEFAULT_ORDERING = '-created_at'


class CatalogService:
    @staticmethod
    def list_products(params: dict) -> dict:
        page = max(1, int(params.get('page', 1)))
        limit = max(1, int(params.get('limit', BASE_PAGE_SIZE)))

        ordering = params.get('ordering', DEFAULT_ORDERING)
        if ordering not in ALLOWED_ORDERING:
            ordering = DEFAULT_ORDERING

        colors = [c for c in params.get('colors', '').split(',') if c]
        sizes = [float(s) for s in params.get('sizes', '').split(',') if s]

        try:
            min_price = float(params['min_price']) if params.get('min_price') else None
            max_price = float(params['max_price']) if params.get('max_price') else None
        except ValueError:
            min_price = None
            max_price = None

        products, total = ProductRepository.find_many(
            category=params.get('category') or None,
            colors=colors or None,
            sizes=sizes or None,
            heel_params=params.get('heel_params') or None,
            material=params.get('material') or None,
            min_price=min_price,
            max_price=max_price,
            ordering=ordering,
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

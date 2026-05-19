from ..models.product import Product

ALLOWED_ORDERING = {'price', '-price', 'name', '-name', 'created_at', '-created_at'}
DEFAULT_ORDERING = '-created_at'


class ProductRepository:
    @staticmethod
    def find_many(*, category=None, colors=None, sizes=None, heel_params=None,
                  material=None, min_price=None, max_price=None,
                  ordering=DEFAULT_ORDERING, page=1, limit=24):
        qs = Product.objects.filter(is_active=True)

        if category:
            qs = qs.filter(category=category)
        if colors:
            qs = qs.filter(colors__contains=colors)
        if sizes:
            qs = qs.filter(sizes__contains=sizes)
        if heel_params:
            qs = qs.filter(heel_params=heel_params)
        if material:
            qs = qs.filter(material=material)
        if min_price is not None:
            qs = qs.filter(price__gte=min_price)
        if max_price is not None:
            qs = qs.filter(price__lte=max_price)

        if ordering not in ALLOWED_ORDERING:
            ordering = DEFAULT_ORDERING

        qs = qs.order_by(ordering)
        total = qs.count()
        offset = (page - 1) * 24

        return qs[offset:offset + limit], total

    @staticmethod
    def get_by_id(product_id: int) -> Product:
        return Product.objects.get(id=product_id, is_active=True)

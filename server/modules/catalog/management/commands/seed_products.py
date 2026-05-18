import random
from faker import Faker
from django.core.management.base import BaseCommand
from modules.catalog.models.product import Product
from modules.catalog.constants import COLORS, CATEGORIES, MATERIALS, HEEL_PARAMS

fake = Faker('uk_UA')

TOTAL = 100
IMAGES = [
    'products/shoe1.webp',
    'products/shoe2.webp',
    'products/shoe3.webp',
]


class Command(BaseCommand):
    help = 'Seed database with test products'

    def handle(self, *args, **options):
        Product.objects.all().delete()

        colors = list(COLORS.keys())
        categories = list(CATEGORIES.keys())
        materials = list(MATERIALS.keys())
        heel_params = list(HEEL_PARAMS.keys())
        all_sizes = [23.0, 23.5, 24.0, 24.5, 25.0, 25.5, 26.0, 26.5]

        products = []
        for _ in range(TOTAL):
            old_price_value = random.randrange(1200, 6500, 50)
            has_discount = random.random() < 0.3
            discount_percent = random.randint(10, 40) if has_discount else None
            price = round(old_price_value * (1 - discount_percent / 100), 2) if has_discount else old_price_value
            old_price = old_price_value if has_discount else None

            products.append(Product(
                name=fake.catch_phrase(),
                description=fake.text(max_nb_chars=200),
                category=random.choice(categories),
                price=price,
                old_price=old_price,
                discount_percent=discount_percent,
                sizes=random.sample(all_sizes, k=random.randint(2, 5)),
                colors=random.sample(colors, k=random.randint(1, 3)),
                heel_params=random.choice(heel_params),
                material=random.choice(materials),
                image=random.choice(IMAGES),
                is_active=True,
            ))

        Product.objects.bulk_create(products)
        self.stdout.write(self.style.SUCCESS(f'Successfully seeded {TOTAL} products'))

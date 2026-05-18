from ..repositories.filters_repository import FiltersRepository
from ..constants import COLORS, CATEGORIES, MATERIALS, HEEL_PARAMS


class FiltersService:
    @staticmethod
    def get_filters() -> dict:
        price_range = FiltersRepository.get_price_range()
        category_counts = FiltersRepository.get_category_counts()
        material_counts = FiltersRepository.get_material_counts()
        heel_params_counts = FiltersRepository.get_heel_params_counts()
        color_counts = FiltersRepository.get_color_counts()
        size_counts = FiltersRepository.get_size_counts()

        return {
            'filters': [
                {
                    'name': 'category',
                    'label': 'Категорія',
                    'values': [
                        {
                            'value': item['category'],
                            'label': CATEGORIES.get(item['category'], {}).get('label', item['category']),
                            'count': item['count'],
                        }
                        for item in category_counts
                    ],
                },
                {
                    'name': 'size',
                    'label': 'Розмір стельки (см)',
                    'values': [
                        {'value': item['size'], 'label': item['size'], 'count': item['count']}
                        for item in size_counts
                    ],
                },
                {
                    'name': 'heel_params',
                    'label': 'Параметри каблука',
                    'values': [
                        {
                            'value': item['heel_params'],
                            'label': HEEL_PARAMS.get(item['heel_params'], {}).get('label', item['heel_params']),
                            'count': item['count'],
                        }
                        for item in heel_params_counts
                    ],
                },
                {
                    'name': 'material',
                    'label': 'Матеріал',
                    'values': [
                        {
                            'value': item['material'],
                            'label': MATERIALS.get(item['material'], {}).get('label', item['material']),
                            'count': item['count'],
                        }
                        for item in material_counts
                    ],
                },
                {
                    'name': 'color',
                    'label': 'Колір',
                    'values': [
                        {
                            'value': item['color'],
                            'label': COLORS.get(item['color'], {}).get('label', item['color']),
                            'hex': COLORS.get(item['color'], {}).get('hex'),
                            'count': item['count'],
                        }
                        for item in color_counts
                    ],
                },
                {
                    'name': 'price',
                    'label': 'Ціна, ГРН',
                    'min': price_range['min_price'],
                    'max': price_range['max_price'],
                },
            ]
        }

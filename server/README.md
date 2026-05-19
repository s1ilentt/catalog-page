# Catalog API — Backend

REST API для каталогу. Django + PostgreSQL.

## Стек

- Python 3.12
- Django 5.2
- Django REST Framework
- PostgreSQL
- drf-spectacular (Swagger)

## Запуск

### 1. Клонувати репозиторій

```bash
git clone https://github.com/s1ilentt/catalog-page.git
cd catalog-page/server
```

### 2. Створити базу даних

Відкрити pgAdmin або psql і виконати:

```sql
CREATE DATABASE catalog_db;
```

### 3. Налаштувати змінні оточення

```bash
cp .env.example .env
```

Заповнити `.env` своїми даними:

```
DB_NAME=catalog_db
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

### 4. Встановити залежності

```bash
pip install -r requirements.txt
```

### 5. Виконати міграції

```bash
python manage.py migrate
```

### 6. Завантажити тестові дані

```bash
python manage.py seed_products
```

### 7. Запустити сервер

```bash
python manage.py runserver
```

Сервер запуститься на `http://127.0.0.1:8000`

## API Endpoints

| Метод | URL | Опис |
|-------|-----|------|
| GET | `/api/v1/products/` | Список товарів |
| GET | `/api/v1/products/{id}/` | Деталі товару |
| GET | `/api/v1/products/filters/` | Доступні фільтри |

## Query params для списку товарів

| Параметр | Приклад | Опис |
|----------|---------|------|
| `page` | `?page=1` | Номер сторінки |
| `limit` | `?limit=24` | Кількість товарів |
| `category` | `?category=stilettos` | Фільтр за категорією |
| `colors` | `?colors=black,white` | Фільтр за кольором |
| `sizes` | `?sizes=23.5,24.0` | Фільтр за розміром |
| `material` | `?material=leather` | Фільтр за матеріалом |
| `heel_params` | `?heel_params=professional` | Фільтр за каблуком |
| `min_price` | `?min_price=1000` | Мінімальна ціна |
| `max_price` | `?max_price=5000` | Максимальна ціна |
| `ordering` | `?ordering=-price` | Сортування |

## Документація

Swagger UI доступний за адресою: `http://127.0.0.1:8000/api/docs/`

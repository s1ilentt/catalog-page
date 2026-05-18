from django.urls import path
from .views import ProductListView, ProductDetailView, ProductFiltersView

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/filters/', ProductFiltersView.as_view(), name='product-filters'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
]

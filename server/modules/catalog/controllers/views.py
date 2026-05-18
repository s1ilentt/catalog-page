from rest_framework.views import APIView
from rest_framework.response import Response
from ..services.catalog_service import CatalogService
from .serializers import ProductListSerializer


class ProductListView(APIView):
    def get(self, request):
        data = CatalogService.list_products(request.query_params)
        return Response({
            'total': data['total'],
            'results': ProductListSerializer(data['results'], many=True, context={'request': request}).data,
        })


class ProductDetailView(APIView):
    def get(self, request, pk):
        return Response({})

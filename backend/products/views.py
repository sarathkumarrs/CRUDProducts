from django.shortcuts import render
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .models import Products
from rest_framework import filters
from .serializers import ProductSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class Pagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = 'page_size'
    max_page_size = 1000

class ProductsListView(generics.ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer
    pagination_class = Pagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['product_name']

class ProductsView(APIView):
    def post(self,request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print("SUCESS")
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class FilterProduct(APIView):
    def post(self,request):
        from_date = request.data["from"]
        end_date = request.data["end"]
        print(from_date,end_date)
        products = Products.objects.filter(expiration_date__range=[from_date,end_date])
        serializer = ProductSerializer(products,many=True)
        return Response(serializer.data)
    
    
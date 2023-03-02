from django.urls import path
from .views import ProductsListView,ProductsView

urlpatterns = [
    
    path('products/',ProductsListView.as_view(),name='products-list'),
     path('add/product/',ProductsView.as_view(),name='add-product')
]
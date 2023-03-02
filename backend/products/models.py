from django.db import models

# Create your models here.
class Products(models.Model):
    product_name=models.CharField(max_length=20)
    stock=models.IntegerField(null=True,blank=True)
    price=models.IntegerField(null=True,blank=True)
    colour=models.CharField(max_length=20)
    expiration_date=models.DateField()

    def __str__(self):
        return self.product_name